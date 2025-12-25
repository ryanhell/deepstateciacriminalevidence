import React from 'react';
import { Clock, AlertTriangle, ShieldCheck, Eye, Radio } from "lucide-react";

export default function MasterTimeline() {
    const forensicEvents = [
        {
            time: "17:30",
            title: "ENTRY TO POLE BARN",
            description: "Subject (User) and Patient (Gina) lured into secondary structure under pretense of aid. Jeremiah Johnson establishes the 'Circle of Chairs'.",
            icon: Clock,
            marker: "UNLAWFUL SEQUESTRATION"
        },
        {
            time: "18:05",
            title: "THE WATCHER DEPLOYMENT",
            description: "The 'Steno' (Mother) takes position. Silent logging commences. Use of private mobile device in 'Dead Zone' confirmed via forensic metadata.",
            icon: Eye,
            marker: "PRE-MEDITATED SURVEILLANCE"
        },
        {
            time: "18:15",
            title: "BIOLOGICAL ALERT",
            description: "Canine exhibits extreme distress (Puke/Urination) directed at Jenna. Indicators of high-frequency deterrent or predatory atmospheric tension.",
            icon: AlertTriangle,
            marker: "ENVIRONMENTAL HOSTILITY"
        },
        {
            time: "18:25",
            title: "THE MASK SLIP (ADMISSION)",
            description: "Jeremiah exhibits vacant/detached state. Direct statement: 'There are a lot of things wrong with you.' Admission of character-based targeting.",
            icon: Radio,
            marker: "MALICIOUS INTENT"
        },
        {
            time: "POST-ARREST",
            title: "SHERIFF CONFRONTATION",
            description: "User informs Sheriff of video tampering forensics. Sheriff exhibits 'Visible Terror' regarding the Steno's digital audit. Cover-up initiated.",
            icon: ShieldCheck,
            marker: "SPOOLIATION OF EVIDENCE"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-zinc-300 p-6 md:p-12 font-mono">
            <div className="max-w-4xl mx-auto">
                <header className="mb-16 border-l-4 border-red-600 pl-6">
                    <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter">
                        Master Timeline
                    </h1>
                    <p className="text-red-500 text-xs font-bold mt-2 uppercase tracking-[0.3em]">
                        Case 24-1-00253-04 // Forensic Audit Trail
                    </p>
                </header>

                <div className="space-y-0 relative border-l border-zinc-800 ml-4">
                    {forensicEvents.map((event, index) => (
                        <div key={index} className="relative pl-10 pb-16 last:pb-0">
                            {/* Dot Indicator */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-red-600 shadow-[0_0_10px_rgba(255,0,0,0.5)] z-10" />

                            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                <span className="text-red-600 font-black text-lg tracking-widest">
                                    [{event.time}]
                                </span>
                                <span className="bg-red-900/20 text-red-500 text-[10px] px-2 py-0.5 border border-red-900/50 rounded uppercase font-black">
                                    {event.marker}
                                </span>
                            </div>

                            <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-sm hover:border-red-600/50 transition-all group">
                                <div className="flex items-center gap-3 mb-4">
                                    <event.icon size={20} className="text-zinc-500 group-hover:text-red-500 transition-colors" />
                                    <h2 className="text-xl font-bold text-white uppercase tracking-tight italic">
                                        {event.title}
                                    </h2>
                                </div>
                                <p className="text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                    {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="mt-20 pt-8 border-t border-zinc-900 text-[10px] text-zinc-600 flex justify-between">
                    <span>DATA INTEGRITY: HARDENED</span>
                    <span className="animate-pulse">MONITORING FOR UNAUTHORIZED EDITS...</span>
                </footer>
            </div>
        </div>
    );
}