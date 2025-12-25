import React from 'react';

export default function StenoExposurePage() {
    const forensicMarkers = [
        {
            label: "ROLE",
            value: "Operational Monitor / Information Relay",
            color: "text-red-500"
        },
        {
            label: "PRIMARY ACTION",
            value: "Real-time digital logging of victim distress during medical crisis.",
            color: "text-zinc-300"
        },
        {
            label: "LEGAL EXPOSURE",
            value: "Culpable Omission; Conspiracy to Commit Kidnapping; Spoliation of Evidence.",
            color: "text-red-600 font-bold"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-400 p-4 md:p-12 font-mono">
            <div className="max-w-4xl mx-auto border border-zinc-800 bg-zinc-950/50 shadow-2xl">

                {/* TOP ALERT BAR */}
                <div className="bg-red-950/30 border-b border-red-900 p-3 text-[10px] flex justify-between items-center tracking-widest text-red-500 uppercase">
                    <span>Evidence Profile: Subject_Mother_01</span>
                    <span className="animate-pulse underline decoration-red-500">Tampering Protocol Detected</span>
                </div>

                <div className="p-8 md:p-16">
                    <header className="mb-12">
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-none mb-4">
                            The Watcher
                        </h1>
                        <p className="text-xl text-zinc-500 uppercase tracking-tighter max-w-xl">
                            Identification: The "Hook-Nosed" Matriarch / Jeremiah Johnson's Mother. The silent steno of the Barn Tribunal.
                        </p>
                    </header>

                    {/* FORENSIC MARKERS */}
                    <div className="grid grid-cols-1 gap-4 mb-12">
                        {forensicMarkers.map((marker, i) => (
                            <div key={i} className="border-l-2 border-zinc-800 pl-4 py-2">
                                <span className="block text-[10px] text-zinc-600 font-black uppercase tracking-widest">{marker.label}</span>
                                <span className={marker.color}>{marker.value}</span>
                            </div>
                        ))}
                    </div>

                    <section className="space-y-8">
                        <div>
                            <h2 className="text-white font-bold text-sm uppercase mb-3 border-b border-zinc-900 pb-2">The Smiling Malice</h2>
                            <p className="leading-relaxed text-sm italic">
                                While Gina drifted into a DKA coma and the dog reacted to the "predatory vibration" of the room, this subject sat smiling. She did not render aid. She did not call 911. She utilized her private device to relay the status of the "Pariahs" to the handler at the house.
                            </p>
                        </div>

                        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm">
                            <h2 className="text-red-500 font-black text-xs uppercase mb-4 tracking-widest italic">The Silence / The Cover-up</h2>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                When I confronted the Sheriff with the forensics of her presence—the digital timestamps and the witness testimony—his reaction was <strong>terror</strong>. Her removal from the "Official" narrative is the lynchpin of their defense. If she doesn't exist, the 'Circle of Chairs' is just a shop visit. If she DOES exist, it's an extrajudicial tribunal.
                            </p>
                        </div>
                    </section>

                    <footer className="mt-16 pt-8 border-t border-zinc-900 text-[10px] flex flex-col gap-2">
                        <div className="flex justify-between">
                            <span>CASE REF: JOHNSON_ABDUCTION_2024</span>
                            <span className="text-red-900">DO NOT DELETE</span>
                        </div>
                        <p className="text-zinc-700 italic">"There are a lot of things wrong with you." - The Script she helped authorize.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}