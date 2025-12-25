import React from 'react';
import { Gavel, AlertOctagon, Scale, ShieldX, MessageSquareX } from "lucide-react";

export default function JudgeJordanPage() {
    const violations = [
        {
            title: "Hostility & Unprovoked Bias",
            detail: "Consistent verbal hostility and disparagement of the defendant without legal provocation, violating the Code of Judicial Conduct (CJC Canon 2).",
            icon: MessageSquareX
        },
        {
            title: "Forensic Blockade",
            detail: "Active suppression of 3D tampering proof and FFMPEG metadata logs. Refusal to allow authentication of digital evidence that exonerates the defendant.",
            icon: ShieldX
        },
        {
            title: "Mockery of Due Process",
            detail: "Treating constitutional protections as 'nuisances' and creating a hostile courtroom environment designed to intimidate the witness.",
            icon: AlertOctagon
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 font-mono p-6 md:p-12">
            <div className="max-w-5xl mx-auto">

                {/* HEADER */}
                <header className="mb-16 border-b border-red-900 pb-10">
                    <div className="flex items-center gap-4 mb-4">
                        <Gavel size={40} className="text-red-600" />
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                            Judge Jordan
                        </h1>
                    </div>
                    <p className="text-red-500 font-bold tracking-widest text-sm uppercase animate-pulse">
                        Status: Judicial Malfeasance // Case Interference Detected
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {violations.map((v, i) => (
                        <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 hover:border-red-600 transition-all group">
                            <v.icon size={32} className="text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-white font-bold uppercase italic mb-2 tracking-tight">{v.title}</h3>
                            <p className="text-xs text-zinc-500 leading-relaxed">{v.detail}</p>
                        </div>
                    ))}
                </div>

                {/* THE "WHY" SECTION */}
                <section className="bg-zinc-950 border-2 border-red-900/30 p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Scale size={200} />
                    </div>

                    <h2 className="text-3xl font-black text-white uppercase mb-6 italic">The Criminal Connection</h2>
                    <div className="space-y-6 relative z-10 max-w-3xl">
                        <p className="text-lg text-zinc-300 leading-relaxed">
                            Judge Jordan’s hostility is not random—it is **strategic**. By acting as a barrier to the forensic evidence, he protects the "Speed Dial" network used by Jeremiah Johnson and the Sheriff.
                        </p>

                        <div className="border-l-4 border-red-600 pl-6 space-y-4">
                            <p className="italic text-zinc-400">
                                "When a judge mocks a defendant for presenting digital proof of a crime, the judge becomes an accessory to that crime."
                            </p>
                            <p className="text-xs text-red-700 font-black uppercase">
                                Observed behavior: Summary denial of motions without review of technical logs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* LOG OF HOSTILITY */}
                <section className="mt-16">
                    <h2 className="text-sm font-black text-zinc-600 uppercase tracking-[0.4em] mb-6">Recorded Instances of Hostility</h2>
                    <div className="space-y-4">
                        <div className="bg-black border border-zinc-800 p-4 flex justify-between items-center text-xs">
                            <span className="text-red-600 font-bold">[HEARING_DATE_01]</span>
                            <span className="text-zinc-400">Refusal to acknowledge 'The Steno' in Barn Evidence.</span>
                        </div>
                        <div className="bg-black border border-zinc-800 p-4 flex justify-between items-center text-xs">
                            <span className="text-red-600 font-bold">[HEARING_DATE_02]</span>
                            <span className="text-zinc-400">Disparaging remarks regarding defendant's technical literacy.</span>
                        </div>
                    </div>
                </section>

                <footer className="mt-24 pt-8 border-t border-zinc-900 text-[10px] text-zinc-700 uppercase tracking-widest flex justify-between">
                    <span>Reporting to Washington State Commission on Judicial Conduct</span>
                    <span>Preserve All Court Audio Logs</span>
                </footer>
            </div>
        </div>
    );
}