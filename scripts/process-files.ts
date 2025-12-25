import fs from "fs";
import path from "path";

interface RawFileEntry {
  path: string;
  size: number;
  type: string;
  mtime: string;
  permissions: string;
  fullpath: string;
}

interface ProcessedFile {
  name: string;
  path: string;
  size: number;
  type: "file" | "directory";
  mtime: string;
  extension?: string;
  category: string;
  children?: ProcessedFile[];
}

function getCategory(filepath: string): string {
  const pathLower = filepath.toLowerCase();

  if (pathLower.includes("mypersonallegalefforts")) return "Legal Documents";
  if (pathLower.includes("police-reports")) return "Police Reports";
  if (pathLower.includes("witness-statements")) return "Witness Statements";
  if (pathLower.includes("proofof") || pathLower.includes("tampering"))
    return "Evidence Tampering";
  if (pathLower.includes("misidentified") || pathLower.includes("tow"))
    return "Towing Company";
  if (pathLower.includes("911") || pathLower.includes("jeremiah"))
    return "911 Audio";
  if (pathLower.includes("video") || pathLower.includes("chelanvideo"))
    return "Video Evidence";
  if (pathLower.includes("court")) return "Court Documents";
  if (pathLower.includes("prr") || pathLower.includes("public"))
    return "Public Records";

  return "Other Evidence";
}

function getExtension(filename: string): string | undefined {
  const parts = filename.split(".");
  return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : undefined;
}

function buildFileTree(entries: RawFileEntry[]): ProcessedFile[] {
  const fileMap = new Map<string, ProcessedFile>();
  const root: ProcessedFile[] = [];

  // Filter out system files and process entries
  const validEntries = entries.filter((entry) => {
    const name = path.basename(entry.path);
    return (
      entry.type === "regular file" &&
      !name.startsWith(".") &&
      name !== "generate_list.sh" &&
      name !== "file_list.csv" &&
      name !== "file_list_recursive.txt" &&
      name !== "download_list.txt"
    );
  });

  // Sort by path for proper tree building
  validEntries.sort((a, b) => a.path.localeCompare(b.path));

  validEntries.forEach((entry) => {
    const pathParts = entry.path.split("/").filter((p) => p && p !== ".");
    const filename = pathParts[pathParts.length - 1];

    const processed: ProcessedFile = {
      name: filename,
      path: entry.path.replace(/^\.\//, "/"),
      size: entry.size,
      type: entry.type === "directory" ? "directory" : "file",
      mtime: entry.mtime,
      extension: getExtension(filename),
      category: getCategory(entry.path),
    };

    // Build directory structure
    let currentLevel = root;
    for (let i = 0; i < pathParts.length - 1; i++) {
      const dirName = pathParts[i];
      const dirPath = "/" + pathParts.slice(0, i + 1).join("/");

      let dir = currentLevel.find((f) => f.path === dirPath);
      if (!dir) {
        dir = {
          name: dirName,
          path: dirPath,
          size: 0,
          type: "directory",
          mtime: entry.mtime,
          category: getCategory(dirPath),
          children: [],
        };
        currentLevel.push(dir);
      }

      currentLevel = dir.children!;
    }

    currentLevel.push(processed);
  });

  return root;
}

// Read the JSON file and process it
const jsonPath = path.join(process.cwd(), "public", "file-list.json");

// Check if file exists before processing
if (!fs.existsSync(jsonPath)) {
  console.log("⚠️  file-list.json not found, skipping file processing");
  process.exit(0);
}

const rawData: RawFileEntry[] = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
const processedFiles = buildFileTree(rawData);

// Write processed file structure
fs.writeFileSync(
  path.join(process.cwd(), "public", "processed-files.json"),
  JSON.stringify(processedFiles, null, 2)
);

console.log("✅ Files processed successfully");
console.log(
  `📁 Total files: ${rawData.filter((e) => e.type === "regular file").length}`
);
console.log(`📂 Directory structure built`);
