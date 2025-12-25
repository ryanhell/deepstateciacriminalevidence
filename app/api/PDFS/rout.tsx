// app/api/pdfs/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  try {
    const pdfsDirectory = path.join(process.cwd(), "public", "pdfs");

    // Check if directory exists
    if (!fs.existsSync(pdfsDirectory)) {
      return NextResponse.json(
        { error: "PDFs directory not found" },
        { status: 404 }
      );
    }

    const filenames = fs.readdirSync(pdfsDirectory);
    const pdfFiles = filenames.filter((name) =>
      name.toLowerCase().endsWith(".pdf")
    );

    const pdfs = pdfFiles.map((filename) => {
      const filepath = path.join(pdfsDirectory, filename);
      const stats = fs.statSync(filepath);

      // Extract name without extension
      const nameWithoutExt = path.parse(filename).name;

      return {
        name: nameWithoutExt.replace(/[-_]/g, " "), // Format filename as title
        url: `/pdfs/${filename}`,
        description: `PDF document: ${nameWithoutExt}`,
        dateCreated: stats.birthtime.toISOString().split("T")[0],
        source: "File System",
      };
    });

    return NextResponse.json(pdfs);
  } catch (error) {
    console.error("Error reading PDFs directory:", error);
    return NextResponse.json({ error: "Failed to read PDFs" }, { status: 500 });
  }
}
