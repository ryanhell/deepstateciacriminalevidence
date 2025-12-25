// app/downloads/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Download Evidence - Ryan Hell Facts',
    description: 'Download evidence files and documentation',
};

const files = [
    {
        category: "Video Evidence",
        items: [
            {
                name: "July 4 Incident - Part 1",
                url: "https://files.ryanhellfacts.com/evidence/video-001.mp4",
                size: "2.5 GB"
            },
            {
                name: "July 4 Incident - Part 2",
                url: "https://files.ryanhellfacts.com/evidence/video-002.mp4",
                size: "1.8 GB"
            },
        ]
    },
    {
        category: "Documents",
        items: [
            {
                name: "Police Report",
                url: "https://files.ryanhellfacts.com/docs/police-report.pdf",
                size: "4.2 MB"
            },
            {
                name: "911 CAD Logs",
                url: "https://files.ryanhellfacts.com/docs/911-cad-logs.pdf",
                size: "2.1 MB"
            },
            {
                name: "Court Filings",
                url: "https://files.ryanhellfacts.com/docs/court-filings.pdf",
                size: "8.5 MB"
            },
        ]
    },
    {
        category: "Audio Recordings",
        items: [
            {
                name: "911 Call - Initial",
                url: "https://files.ryanhellfacts.com/audio/911-call-001.mp3",
                size: "12 MB"
            },
            {
                name: "911 Call - Follow-up",
                url: "https://files.ryanhellfacts.com/audio/911-call-002.mp3",
                size: "8 MB"
            },
        ]
    }
];

export default function DownloadsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Download Evidence</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                All evidence related to July 4, 2024 incident in Chelan County, Washington
            </p>

            <div className="space-y-8">
                {files.map((category) => (
                    <section key={category.category}>
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
                            {category.category}
                        </h2>
                        <ul className="space-y-3">
                            {category.items.map((file) => (
                                <li
                                    key={file.name}
                                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                                >
                                    <div>
                                        <p className="font-medium">{file.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{file.size}</p>
                                    </div>
                                    <a
                                        href={file.url}
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition whitespace-nowrap"
                                    >
                                        Download
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            {/* IPFS Backup Info */}
            <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 rounded">
                <h3 className="text-lg font-semibold mb-2">🛡️ Permanent Backup</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    All evidence is permanently stored on IPFS (InterPlanetary File System).
                    This means the evidence cannot be deleted or censored, even if this website is taken down.
                </p>
                <div className="space-y-2">
                    <p className="text-sm font-mono bg-white dark:bg-gray-800 p-2 rounded">
                        Evidence Package CID: [Add your IPFS hash]
                    </p>
                    <a
                        href="https://ipfs.io/ipfs/YOUR_CID_HERE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm inline-block"
                    >
                        View on public IPFS gateway →
                    </a>
                </div>
            </div>

            {/* Hosted in Bahnhof */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded">
                <h3 className="text-lg font-semibold mb-2">🏔️ Secure Hosting</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    This site is hosted in <strong>Bahnhof's underground data center</strong> in Stockholm, Sweden—
                    a former nuclear bunker 100 feet below solid granite bedrock, designed to withstand attacks
                    and ensure information freedom.
                </p>
            </div>
        </div>
    );
}