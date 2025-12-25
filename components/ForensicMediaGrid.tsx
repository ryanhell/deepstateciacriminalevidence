"use client";
import React, { useEffect, useState } from "react";
import { ShieldAlert, Download, FileVideo, FileAudio } from "lucide-react";

export default function ForensicMediaGrid() {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                // Point this to your VPS2 JSON endpoint
                const res = await fetch("https://your-vps2-api.com/media_inventory.json");
                const data = await res.json();
                setInventory(data || []);
            } catch (err) {
                console.error("VPS2 Storage Link Error", err);
            } finally {
                setLoading(false);
            }
        };
        fetchInventory();
    }, []);

    // Helper to extract filename from the long server path
    const getFileName = (path: string) => path.split('/').pop() || "Unknown File";

    if (loading) return <div className="p-10 text-red-600 animate-pulse font-mono font-black text-center uppercase tracking-tighter">Establishing Link to Evidence Node...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {inventory.map((item: any, idx: number) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden flex flex-col shadow-2xl transition-all hover:ring-2 hover:ring-red-600">
                    <div className="p-5 flex-grow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-black rounded">
                                {item.format.includes("video") ? <FileVideo className="text-blue-500" size={24} /> : <FileAudio className="text-green-500" size={24} />}
                            </div>
                            {/* Force Tamper badge if filename matches your analysis targets */}
                            {(item.path.includes("AdamMusgrove") || item.path.includes("24C06401")) && (
                                <div className="bg-red-600 text-white text-[9px] px-2 py-1 font-black animate-pulse rounded flex items-center gap-1 uppercase italic">
                                    <ShieldAlert size={12} /> Tampering Suspected
                                </div>
                            )}
                        </div>

                        <h3 className="text-sm font-black text-white uppercase break-all mb-2 leading-tight">
                            {getFileName(item.path)}
                        </h3>

                        <div className="space-y-3 mt-4">
                            <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                                <span>Size</span>
                                <span className="text-zinc-300">{(item.size_bytes / (1024 * 1024)).toFixed(2)} MB</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-zinc-500 uppercase">
                                <span>Format</span>
                                <span className="text-zinc-300">{item.format}</span>
                            </div>
                            <div className="bg-black p-2 rounded border border-zinc-800">
                                <span className="block text-[8px] text-zinc-600 font-black mb-1 uppercase tracking-widest">SHA-256 Checksum</span>
                                <code className="text-[9px] text-red-400 break-all leading-none">{item.checksum}</code>
                            </div>
                        </div>
                    </div>

                    <a
                        href={`https://your-vps2-storage-domain.com/download?path=${encodeURIComponent(item.path)}`}
                        download
                        className="bg-white hover:bg-red-600 text-black hover:text-white transition-colors py-3 text-center font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 border-t border-zinc-800"
                    >
                        <Download size={14} /> Download Public Evidence
                    </a>
                </div>
            ))}
        </div>
    );
}