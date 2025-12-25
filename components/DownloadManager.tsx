"use client";
import { useState, useEffect, useMemo } from "react";
import {
  Download,
  FileText,
  Video,
  File,
  Folder,
  ChevronRight,
  ChevronDown,
  AlertCircle,
  Search,
  Filter,
  Clock,
  HardDrive,
  MicroscopeIcon,
} from "lucide-react";

interface FileItem {
  name: string;
  path: string;
  size: number;
  type: "file" | "directory";
  mtime: string;
  extension?: string;
  category: string;
  children?: FileItem[];
}

interface DownloadState {
  loading: boolean;
  error: string | null;
  progress?: number;
}

const API_ENDPOINT = '/api/downloads';

function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return 'Unknown date';
  }
}

function getFileIcon(name: string, type: string, size: 'sm' | 'md' = 'md') {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';

  if (type === "directory")
    return <Folder className={`${sizeClass} text-blue-500`} />;

  const ext = name.split(".").pop()?.toLowerCase();

  if (ext === "pdf")
    return <FileText className={`${sizeClass} text-red-500`} />;
  if (["mp4", "mov", "avi"].includes(ext || ""))
    return <Video className={`${sizeClass} text-purple-500`} />;
  if (["jpg", "jpeg", "png", "gif"].includes(ext || ""))
    return <File className={`${sizeClass} text-green-500`} />;
  if (["wav", "mp3", "ogg"].includes(ext || ""))
    return <File className={`${sizeClass} text-orange-500`} />;
  if (["zip", "rar", "7z"].includes(ext || ""))
    return <HardDrive className={`${sizeClass} text-yellow-500`} />;

  return <File className={`${sizeClass} text-gray-500`} />;
}

function FileRow({
  file,
  depth = 0,
  onDownload
}: {
  file: FileItem;
  depth?: number;
  onDownload: (file: FileItem) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(depth === 0);
  const [downloadState, setDownloadState] = useState<DownloadState>({
    loading: false,
    error: null,
  });

  const handleDownload = async () => {
    setDownloadState({ loading: true, error: null });

    try {
      const response = await fetch(`${API_ENDPOINT}?path=${encodeURIComponent(file.path)}`);

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Download failed');
      }

      // Track successful download
      onDownload(file);

      // The API will redirect to the file
      window.open(response.url, '_blank');

      setDownloadState({ loading: false, error: null });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Download failed';
      setDownloadState({ loading: false, error: message });

      // Clear error after 5 seconds
      setTimeout(() => {
        setDownloadState(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  };

  if (file.type === "directory") {
    const fileCount = file.children?.length || 0;
    const totalSize = file.children?.reduce((sum, child) => sum + child.size, 0) || 0;

    return (
      <>
        <div
          className="flex items-center gap-3 p-3 hover:bg-slate-600/50 rounded cursor-pointer transition-colors"
          style={{ paddingLeft: `${depth * 24 + 12}px` }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          )}
          {getFileIcon(file.name, file.type)}
          <span className="font-medium flex-1 text-white">{file.name}</span>
          <span className="text-sm text-gray-300 hidden md:block">
            {fileCount} items • {formatFileSize(totalSize)}
          </span>
        </div>
        {isExpanded && file.children && (
          <div className="animate-slideDown">
            {file.children.map((child, idx) => (
              <FileRow
                key={idx}
                file={child}
                depth={depth + 1}
                onDownload={onDownload}
              />
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <div
      className="flex items-center gap-3 p-3 hover:bg-slate-600/30 rounded group transition-colors"
      style={{ paddingLeft: `${depth * 24 + 36}px` }}
    >
      {getFileIcon(file.name, file.type)}
      <div className="flex-1 min-w-0">
        <div className="text-white truncate">{file.name}</div>
        <div className="text-xs text-gray-400 flex items-center gap-2 mt-1">
          <Clock className="w-3 h-3" />
          {formatDate(file.mtime)}
        </div>
      </div>
      <span className="text-sm text-gray-300 hidden sm:block">
        {formatFileSize(file.size)}
      </span>
      {downloadState.error && (
        <span className="text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {downloadState.error}
        </span>
      )}
      <button
        onClick={handleDownload}
        disabled={downloadState.loading}
        className="opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white px-3 py-1.5 rounded text-sm flex items-center gap-2 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed flex-shrink-0"
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">
          {downloadState.loading ? 'Loading...' : 'Download'}
        </span>
      </button>
    </div>
  );
}

export default function DownloadManager() {
  const [fileStructure, setFileStructure] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<'name' | 'size' | 'date'>('name');
  const [downloadHistory, setDownloadHistory] = useState<string[]>([]);

  // Load file structure
  useEffect(() => {
    fetch('/processed-files.json')
      .then(res => res.json())
      .then(data => {
        setFileStructure(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load files:', err);
        setLoading(false);
      });
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    const traverse = (items: FileItem[]) => {
      items.forEach(item => {
        cats.add(item.category);
        if (item.children) traverse(item.children);
      });
    };
    traverse(fileStructure);
    return Array.from(cats).sort();
  }, [fileStructure]);

  // Filter and sort files
  const filteredStructure = useMemo(() => {
    const filterFiles = (files: FileItem[]): FileItem[] => {
      return files
        .map((file) => {
          // Filter directories recursively
          if (file.type === "directory" && file.children) {
            const filteredChildren = filterFiles(file.children);
            if (filteredChildren.length > 0) {
              return { ...file, children: filteredChildren };
            }
            return null;
          }

          // Search filter
          if (searchTerm && !file.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return null;
          }

          // Category filter
          if (selectedCategory !== "all" && file.category !== selectedCategory) {
            return null;
          }

          // Type filter
          if (selectedType !== "all") {
            const ext = file.extension;
            if (selectedType === "documents" && ext !== "pdf") return null;
            if (selectedType === "videos" && !["mp4", "mov", "avi"].includes(ext || "")) return null;
            if (selectedType === "audio" && !["wav", "mp3"].includes(ext || "")) return null;
            if (selectedType === "images" && !["jpg", "jpeg", "png"].includes(ext || "")) return null;
            if (selectedType === "archives" && !["zip", "rar", "7z"].includes(ext || "")) return null;
          }

          return file;
        })
        .filter(Boolean) as FileItem[];
    };

    const sortFiles = (files: FileItem[]): FileItem[] => {
      return files.map(file => {
        if (file.children) {
          return { ...file, children: sortFiles(file.children) };
        }
        return file;
      }).sort((a, b) => {
        if (a.type === 'directory' && b.type !== 'directory') return -1;
        if (a.type !== 'directory' && b.type === 'directory') return 1;

        switch (sortBy) {
          case 'size':
            return b.size - a.size;
          case 'date':
            return new Date(b.mtime).getTime() - new Date(a.mtime).getTime();
          default:
            return a.name.localeCompare(b.name);
        }
      });
    };

    return sortFiles(filterFiles(fileStructure));
  }, [fileStructure, searchTerm, selectedCategory, selectedType, sortBy]);

  // Calculate statistics
  const stats = useMemo(() => {
    let totalFiles = 0;
    let totalSize = 0;

    const traverse = (items: FileItem[]) => {
      items.forEach(item => {
        if (item.type === 'file') {
          totalFiles++;
          totalSize += item.size;
        }
        if (item.children) traverse(item.children);
      });
    };

    traverse(filteredStructure);

    return { totalFiles, totalSize };
  }, [filteredStructure]);

  const handleDownload = (file: FileItem) => {
    setDownloadHistory(prev => [...prev, file.path].slice(-10)); // Keep last 10
  };

  if (loading) {
    return (
      <div className="bg-slate-700 rounded-lg shadow-lg p-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-300">Loading evidence files...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 rounded-lg shadow-lg overflow-hidden">
      {/* Header with Stats */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 border-b border-slate-600">
        <h2 className="text-2xl font-bold text-white mb-4">Evidence Download Center</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-600/50 rounded-lg p-3">
            <div className="text-gray-300">Total Files</div>
            <div className="text-2xl font-bold text-white">{stats.totalFiles}</div>
          </div>
          <div className="bg-slate-600/50 rounded-lg p-3">
            <div className="text-gray-300">Total Size</div>
            <div className="text-2xl font-bold text-white">{formatFileSize(stats.totalSize)}</div>
          </div>
          <div className="bg-slate-600/50 rounded-lg p-3">
            <div className="text-gray-300">Categories</div>
            <div className="text-2xl font-bold text-white">{categories.length}</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 border-b border-slate-600 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search files by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Filter className="w-5 h-5 text-gray-400 mt-2" />
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === "all"
              ? "bg-blue-600 text-white"
              : "bg-slate-600 text-gray-300 hover:bg-slate-500"
              }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-slate-600 text-gray-300 hover:bg-slate-500"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Type and Sort Filters */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-gray-400 text-sm">Type:</span>
          {["all", "documents", "videos", "audio", "images", "archives"].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded text-sm capitalize transition-colors ${selectedType === type
                ? "bg-slate-500 text-white"
                : "bg-slate-600 text-gray-300 hover:bg-slate-500"
                }`}
            >
              {type}
            </button>
          ))}

          <div className="ml-auto flex gap-2 items-center">
            <span className="text-gray-400 text-sm">Sort:</span>
            {(["name", "size", "date"] as const).map((sort) => (
              <button
                key={sort}
                onClick={() => setSortBy(sort)}
                className={`px-3 py-1.5 rounded text-sm capitalize transition-colors ${sortBy === sort
                  ? "bg-slate-500 text-white"
                  : "bg-slate-600 text-gray-300 hover:bg-slate-500"
                  }`}
              >
                {sort}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* File List */}
      <div className="p-4 max-h-[600px] overflow-y-auto">
        {filteredStructure.length > 0 ? (
          filteredStructure.map((file, idx) => (
            <FileRow key={idx} file={file} onDownload={handleDownload} />
          ))
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300 text-lg">No files found matching your criteria</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedType("all");
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-600 bg-slate-800">
        <div className="flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div className="text-gray-300">
            <p className="font-semibold text-white mb-1">⚠️ Legal Notice</p>
            <p>These files are provided as public evidence for legal review and whistleblower protection purposes. All downloads are logged for security and legal compliance. By downloading these files, you acknowledge that this evidence is being preserved for matters of public interest and legal proceedings.</p>
          </div>
          <div className="text-gray-300">
            <p className="font-medium text-white mb-1">Vide Forensics Tips:</p>
            <p>I've compiled a few tips for you to inspect these assets yourself, or perhaps you have your own case where there were tampered videos used in court. I would suggest hiring an expert obviously, but in the event you cannot afford one, I would understand if you checked yourself. Here are some free tools and guidance. </p>
            <a href="/resources/video-forensics"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              <MicroscopeIcon className="w-5 h-5" />
              Video Forensics Tools & Guide
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}