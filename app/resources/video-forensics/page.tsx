import { Metadata } from 'next';
import {
    Download,
    ExternalLink,
    Search,
    FileVideo,
    AlertCircle,
    CheckCircle,
    Microscope,
    Shield,
    FileText,
    Terminal,
    BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Video Forensics Tools & Guide | Ryan Hell Facts',
    description: 'Free professional video forensics tools and techniques to analyze evidence for tampering, manipulation, and authenticity verification.',
    keywords: 'video forensics, evidence analysis, metadata analysis, tamper detection, ExifTool, VideoCleaner',
};

interface Tool {
    name: string;
    type: 'professional' | 'metadata' | 'specialized';
    free: boolean;
    description: string;
    features: string[];
    downloadUrl: string;
    bestFor: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const tools: Tool[] = [
    {
        name: 'VideoCleaner',
        type: 'professional',
        free: true,
        description: 'Free forensic video enhancement and authentication software used by law enforcement, CSI labs, and intelligence agencies worldwide.',
        features: [
            'Tamper detection algorithms',
            'Video enhancement and restoration',
            'Metadata logging and verification',
            'Frame-by-frame analysis',
            'Authentication reports for court',
        ],
        downloadUrl: 'https://www.videocleaner.com/download.html',
        bestFor: 'Law enforcement-grade analysis, detecting edits and alterations',
        difficulty: 'intermediate',
    },
    {
        name: 'Amped FIVE',
        type: 'professional',
        free: false,
        description: 'Professional forensic video enhancement with scientifically validated filters for deblurring, stabilizing, and correcting lens distortions. Trial and academic versions available.',
        features: [
            'Scientific validation for court admissibility',
            'Advanced video enhancement',
            'Automatic documentation of all steps',
            'Export reports for legal proceedings',
            'Lens distortion correction',
        ],
        downloadUrl: 'https://ampedsoftware.com/five',
        bestFor: 'Court-admissible professional analysis',
        difficulty: 'advanced',
    },
    {
        name: 'Amped Authenticate',
        type: 'professional',
        free: false,
        description: 'Examines metadata, compression patterns, and sensor noise to detect splicing, edits, or inconsistencies in video recordings. Includes deepfake detection.',
        features: [
            'Deepfake detection',
            'Compression analysis',
            'Metadata verification',
            'Sensor noise analysis',
            'Splicing and edit detection',
        ],
        downloadUrl: 'https://ampedsoftware.com/authenticate',
        bestFor: 'Detecting sophisticated video manipulation and forgeries',
        difficulty: 'advanced',
    },
    {
        name: 'ForeVid',
        type: 'professional',
        free: true,
        description: 'Free forensic video analysis software specifically designed for surveillance videos from CCTV, video cameras, and mobile devices.',
        features: [
            'Frame bookmarking',
            'Built-in image editor',
            'Video encoding and format conversion',
            'Metadata viewer',
            'Multi-format support',
        ],
        downloadUrl: 'https://forevid.com/',
        bestFor: 'Surveillance and dashcam footage analysis',
        difficulty: 'beginner',
    },
    {
        name: 'VidForensicsTool',
        type: 'professional',
        free: true,
        description: 'Open-source video forensics analysis tool designed to ensure authenticity and integrity of digital video content for law enforcement and journalism.',
        features: [
            'Open source and transparent',
            'Hash verification',
            'Timeline analysis',
            'Metadata extraction',
            'Tampering indicators',
        ],
        downloadUrl: 'https://github.com/LitZeus/VidForensicsTool',
        bestFor: 'Open-source video tampering detection',
        difficulty: 'intermediate',
    },
    {
        name: 'ExifTool',
        type: 'metadata',
        free: true,
        description: 'The gold standard for metadata extraction. Free and open-source software for reading, writing, and manipulating metadata from images, audio, video, and PDFs.',
        features: [
            'Extract ALL metadata fields',
            'Cross-platform (Windows, Mac, Linux)',
            'Command-line and GUI versions',
            'Detect metadata inconsistencies',
            'Export to CSV, JSON, XML',
        ],
        downloadUrl: 'https://exiftool.org/',
        bestFor: 'Deep metadata extraction and detecting metadata inconsistencies',
        difficulty: 'intermediate',
    },
    {
        name: 'MediaInfo',
        type: 'metadata',
        free: true,
        description: 'Free and open-source utility providing comprehensive metadata for video and audio files including codec, bitrate, frame rate, and container information.',
        features: [
            'User-friendly GUI interface',
            'Command-line version available',
            'Export to multiple formats',
            'Container and stream analysis',
            'Codec identification',
        ],
        downloadUrl: 'https://mediainfo.sourceforge.net/',
        bestFor: 'Quick technical specifications and container format analysis',
        difficulty: 'beginner',
    },
    {
        name: 'FFmpeg/FFprobe',
        type: 'metadata',
        free: true,
        description: 'Industry-standard multimedia framework for video processing, conversion, and analysis. Extremely powerful command-line tools.',
        features: [
            'Frame-by-frame extraction',
            'Stream verification',
            'Format conversion',
            'Hash generation',
            'Detailed stream analysis',
        ],
        downloadUrl: 'https://ffmpeg.org/',
        bestFor: 'Advanced frame-by-frame analysis and stream verification',
        difficulty: 'advanced',
    },
    {
        name: 'InVID Verification Plugin',
        type: 'specialized',
        free: true,
        description: 'Browser extension for quick online video verification with reverse image search, metadata extraction, and fragmentation detection.',
        features: [
            'Browser-based (Chrome/Firefox)',
            'Reverse image search integration',
            'Quick metadata extraction',
            'Fragmentation detection',
            'Thumbnail analysis',
        ],
        downloadUrl: 'https://www.invid-project.eu/tools-and-services/invid-verification-plugin/',
        bestFor: 'Quick online video verification and fact-checking',
        difficulty: 'beginner',
    },
    {
        name: 'Ghiro',
        type: 'specialized',
        free: true,
        description: 'Digital forensic tool for image analysis with integrity verification, histogram analysis, and compression detection capabilities.',
        features: [
            'Compression artifacts detection',
            'Histogram analysis',
            'Metadata extraction',
            'Batch processing',
            'Visual analysis tools',
        ],
        downloadUrl: 'https://github.com/ghirensics/ghiro',
        bestFor: 'Analyzing video frames for compression artifacts',
        difficulty: 'intermediate',
    },
];

const redFlags = [
    {
        category: 'Metadata Inconsistencies',
        indicators: [
            'Creation timestamp doesn\'t match recording device clock',
            'Multiple software signatures (evidence of re-encoding)',
            'GPS coordinates that don\'t match the stated location',
            'Modified date is before creation date',
            'Missing expected metadata fields for the device type',
        ],
    },
    {
        category: 'Compression Artifacts',
        indicators: [
            'Double compression (video re-encoded after initial recording)',
            'Different compression levels in different sections',
            'Mismatched GOP (Group of Pictures) structures',
            'Inconsistent bitrate patterns',
            'Unexpected codec for the recording device',
        ],
    },
    {
        category: 'Frame Analysis',
        indicators: [
            'Missing frames in the sequence',
            'Inconsistent or variable frame rates',
            'Duplicate frames inserted',
            'Discontinuous timestamps between frames',
            'Sudden changes in frame properties',
        ],
    },
    {
        category: 'Container/Codec Mismatches',
        indicators: [
            'Container format doesn\'t match camera model capabilities',
            'Codec not available on the recording device',
            'Stream order inconsistencies',
            'Multiple audio/video streams where device only supports one',
            'Unexpected file size for duration and quality',
        ],
    },
];

export default function VideoForensicsPage() {
    const professionalTools = tools.filter(t => t.type === 'professional');
    const metadataTools = tools.filter(t => t.type === 'metadata');
    const specializedTools = tools.filter(t => t.type === 'specialized');

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-blue-800">
                <div className="container mx-auto px-4 py-16">
                    <div className="flex items-center gap-4 mb-6">
                        <Microscope className="w-12 h-12 text-blue-400" />
                        <h1 className="text-5xl font-bold">Video Forensics Tools & Guide</h1>
                        <p className="text-sm">by Ryan Hell</p>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        Professional-grade free tools and techniques to analyze video evidence for tampering,
                        manipulation, and authenticity verification. Used by law enforcement, journalists, and
                        legal professionals worldwide.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Alert Box */}
                <div className="bg-yellow-900/30 border border-yellow-600 rounded-lg p-6 mb-12">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-yellow-400 mb-2">
                                About This Resource
                            </h3>
                            <p className="text-gray-300">
                                This guide was created to help analyze the Chelan County evidence videos for signs
                                of tampering. All tools listed are free or have free versions available. These are
                                the same tools used by law enforcement, forensic experts, and legal professionals
                                to verify video authenticity in court cases.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Start Guide */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-8 h-8 text-green-400" />
                        <h2 className="text-3xl font-bold">Quick Start Guide</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                            <div className="text-3xl font-bold text-blue-400 mb-4">1</div>
                            <h3 className="text-xl font-bold mb-3">Start with Metadata</h3>
                            <p className="text-gray-300 mb-4">
                                Begin by extracting all metadata using ExifTool or MediaInfo. Look for
                                inconsistencies in timestamps, device information, and encoding details.
                            </p>
                            <div className="bg-slate-900 rounded p-3 font-mono text-sm text-green-400">
                                exiftool -a -G1 video.mp4
                            </div>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                            <div className="text-3xl font-bold text-blue-400 mb-4">2</div>
                            <h3 className="text-xl font-bold mb-3">Analyze with Professional Tools</h3>
                            <p className="text-gray-300 mb-4">
                                Use VideoCleaner or ForeVid to perform deeper analysis including tamper detection,
                                frame analysis, and compression verification.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Check for double compression</li>
                                <li>• Analyze frame sequences</li>
                                <li>• Verify timestamps</li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                            <div className="text-3xl font-bold text-blue-400 mb-4">3</div>
                            <h3 className="text-xl font-bold mb-3">Document Everything</h3>
                            <p className="text-gray-300 mb-4">
                                Screenshot all findings, export reports, and maintain a chain of custody log.
                                Documentation is critical for legal proceedings.
                            </p>
                            <ul className="text-sm text-gray-400 space-y-1">
                                <li>• Save all metadata exports</li>
                                <li>• Screenshot analysis results</li>
                                <li>• Note file hashes</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Professional Tools */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-purple-400" />
                        <h2 className="text-3xl font-bold">Professional Forensics Tools</h2>
                    </div>
                    <p className="text-gray-300 mb-8">
                        Enterprise-grade video forensics software used by law enforcement and legal experts.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {professionalTools.map((tool) => (
                            <ToolCard key={tool.name} tool={tool} />
                        ))}
                    </div>
                </section>

                {/* Metadata Analysis Tools */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-8 h-8 text-blue-400" />
                        <h2 className="text-3xl font-bold">Metadata Analysis Tools</h2>
                    </div>
                    <p className="text-gray-300 mb-8">
                        Essential tools for extracting and analyzing video metadata to detect inconsistencies.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {metadataTools.map((tool) => (
                            <ToolCard key={tool.name} tool={tool} />
                        ))}
                    </div>
                </section>

                {/* Specialized Tools */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Search className="w-8 h-8 text-green-400" />
                        <h2 className="text-3xl font-bold">Specialized Analysis Tools</h2>
                    </div>
                    <p className="text-gray-300 mb-8">
                        Additional tools for specific forensic tasks and quick verification.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {specializedTools.map((tool) => (
                            <ToolCard key={tool.name} tool={tool} />
                        ))}
                    </div>
                </section>

                {/* Red Flags Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertCircle className="w-8 h-8 text-red-400" />
                        <h2 className="text-3xl font-bold">What to Look For: Tampering Red Flags</h2>
                    </div>
                    <p className="text-gray-300 mb-8">
                        Key indicators that a video may have been tampered with, edited, or manipulated.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {redFlags.map((category) => (
                            <div
                                key={category.category}
                                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
                            >
                                <h3 className="text-xl font-bold mb-4 text-red-400">{category.category}</h3>
                                <ul className="space-y-3">
                                    {category.indicators.map((indicator, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-300">{indicator}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Command Line Guide */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <Terminal className="w-8 h-8 text-cyan-400" />
                        <h2 className="text-3xl font-bold">Command Line Analysis Guide</h2>
                    </div>
                    <p className="text-gray-300 mb-8">
                        Step-by-step commands for analyzing your evidence videos.
                    </p>

                    <div className="space-y-6">
                        <CommandExample
                            title="1. Extract All Metadata"
                            description="Get comprehensive metadata from all videos"
                            command="exiftool -a -G1 -s -ee -csv *.mp4 > all_videos_metadata.csv"
                        />

                        <CommandExample
                            title="2. Get Technical Specifications"
                            description="Detailed codec, container, and stream information"
                            command="mediainfo --Full video.mp4 > video_technical_report.txt"
                        />

                        <CommandExample
                            title="3. Check for Double Compression"
                            description="Detect if video has been re-encoded (sign of editing)"
                            command="ffprobe -v error -show_entries frame=pict_type,coded_picture_number -of csv video.mp4"
                        />

                        <CommandExample
                            title="4. Extract I-Frames"
                            description="Extract keyframes to check for inconsistencies"
                            command="ffmpeg -i video.mp4 -vf &quot;select='eq(pict_type,I)'&quot; -vsync 0 frames/frame_%04d.png"
                        />

                        <CommandExample
                            title="5. Generate Video Hash"
                            description="Create cryptographic hash for verification"
                            command="ffmpeg -i video.mp4 -f md5 - | tee video_hash.md5"
                        />

                        <CommandExample
                            title="6. Compare Multiple Videos"
                            description="Batch analyze all videos and compare metadata"
                            command="for file in *.mp4; do echo &quot;=== $file ===&quot;; exiftool &quot;$file&quot; | grep -E '(Create|Modify|Software|Model)'; done"
                        />
                    </div>
                </section>

                {/* Analysis Workflow */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <FileVideo className="w-8 h-8 text-orange-400" />
                        <h2 className="text-3xl font-bold">Recommended Analysis Workflow</h2>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
                        <ol className="space-y-6">
                            {[
                                {
                                    step: 'Preserve Original Files',
                                    description:
                                        'Make copies of all original videos. Never work directly on originals. Calculate and store SHA-256 hashes of originals.',
                                    icon: Shield,
                                },
                                {
                                    step: 'Extract Basic Metadata',
                                    description:
                                        'Use ExifTool and MediaInfo to extract all metadata. Export to CSV for easy comparison across multiple files.',
                                    icon: FileText,
                                },
                                {
                                    step: 'Look for Obvious Red Flags',
                                    description:
                                        'Check for timestamp inconsistencies, wrong device models, missing GPS data, or unexpected software signatures.',
                                    icon: AlertCircle,
                                },
                                {
                                    step: 'Deep Technical Analysis',
                                    description:
                                        'Use FFprobe to analyze compression, GOP structure, and stream details. Look for double compression or mismatched codecs.',
                                    icon: Microscope,
                                },
                                {
                                    step: 'Professional Tool Verification',
                                    description:
                                        'Run videos through VideoCleaner or Amped Authenticate for automated tamper detection and professional reports.',
                                    icon: CheckCircle,
                                },
                                {
                                    step: 'Document All Findings',
                                    description:
                                        'Screenshot every finding, export all reports, and maintain a detailed analysis log with timestamps.',
                                    icon: BookOpen,
                                },
                            ].map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <li key={idx} className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                                                {idx + 1}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Icon className="w-5 h-5 text-blue-400" />
                                                <h3 className="text-xl font-bold">{item.step}</h3>
                                            </div>
                                            <p className="text-gray-300">{item.description}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </section>

                {/* Analyzing Chelan Evidence */}
                <section className="mb-16">
                    <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700 rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-6">Analyzing the Chelan County Evidence</h2>
                        <div className="space-y-4 text-gray-300">
                            <p>
                                Based on the evidence tampering claims in this case, here are specific things to
                                check in the Chelan County police videos:
                            </p>

                            <div className="bg-slate-900/50 rounded-lg p-6 space-y-3">
                                <h3 className="font-bold text-white mb-3">Priority Checks:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>
                                            <strong>Dropbox timestamps:</strong> Compare file creation times with actual
                                            recording times to verify the evidence tampering claims
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>
                                            <strong>Body camera metadata:</strong> Verify camera model, serial numbers,
                                            and officer assignment match police records
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>
                                            <strong>Dashcam footage:</strong> Check GPS coordinates, speed data, and
                                            timestamps for consistency with police reports
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>
                                            <strong>Audio synchronization:</strong> Verify 911 audio matches video
                                            timestamps and wasn't spliced or edited
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span>
                                            <strong>File hashes:</strong> Compare original file hashes with any copies to
                                            verify chain of custody
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-sm text-gray-400 italic mt-6">
                                All tools and techniques listed on this page can be used to independently verify
                                these claims. The evidence is publicly available for download and analysis.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Legal Notice */}
                <section className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Legal & Ethical Use Notice</h3>
                    <div className="text-gray-300 space-y-3 text-sm">
                        <p>
                            These tools and techniques are provided for legitimate forensic analysis, legal
                            proceedings, journalism, and public interest investigations. Always:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Maintain chain of custody documentation</li>
                            <li>Never work on original files directly</li>
                            <li>Document all analysis steps with timestamps</li>
                            <li>Use scientifically validated methods</li>
                            <li>Consult with legal counsel when appropriate</li>
                        </ul>
                        <p className="mt-4">
                            The Chelan County evidence is provided as part of public record requests and
                            whistleblower protection. Analysis and verification by independent parties is
                            encouraged and protected under First Amendment rights.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

function ToolCard({ tool }: { tool: Tool }) {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner':
                return 'text-green-400 bg-green-900/30';
            case 'intermediate':
                return 'text-yellow-400 bg-yellow-900/30';
            case 'advanced':
                return 'text-red-400 bg-red-900/30';
            default:
                return 'text-gray-400 bg-gray-900/30';
        }
    };

    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-2xl font-bold mb-2">{tool.name}</h3>
                    <div className="flex gap-2">
                        {tool.free ? (
                            <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded">
                                FREE
                            </span>
                        ) : (
                            <span className="px-2 py-1 bg-orange-900/30 text-orange-400 text-xs rounded">
                                TRIAL AVAILABLE
                            </span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded capitalize ${getDifficultyColor(tool.difficulty)}`}>
                            {tool.difficulty}
                        </span>
                    </div>
                </div>
                <Download className="w-6 h-6 text-blue-400" />
            </div>

            <p className="text-gray-300 mb-4">{tool.description}</p>

            <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-400 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                    {tool.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-4 p-3 bg-blue-900/20 rounded border border-blue-800">
                <p className="text-sm text-blue-300">
                    <strong>Best for:</strong> {tool.bestFor}
                </p>
            </div>


            <a href={tool.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                <ExternalLink className="w-4 h-4" />
                Download / Learn More
            </a>
        </div>
    );
}

function CommandExample({
    title,
    description,
    command,
}: {
    title: string;
    description: string;
    command: string;
}) {
    return (
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                {command}
            </div>
        </div>
    );
}