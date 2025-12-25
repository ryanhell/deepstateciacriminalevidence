import { EvidenceCard } from "@/components/evidence-card";
import { Terminal, Cpu, Music, ShieldAlert } from "lucide-react";

export default function ForensicPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 p-6 md:p-12 space-y-10">
            <header className="max-w-4xl mx-auto space-y-4 border-l-4 border-cyan-500 pl-6">
                <h1 className="text-4xl font-black uppercase tracking-tighter">
                    FFMPEG Metadata Analysis
                </h1>
                <p className="text-slate-400 text-lg">
                    Detection of non-standard post-production signatures in Incident 24C06401 media.
                </p>
            </header>

            {/* The Technical Red Flags */}
            <div className="max-w-5xl mx-auto bg-slate-900 border border-cyan-900/50 rounded-xl overflow-hidden">
                <div className="bg-cyan-950 px-6 py-3 flex items-center gap-2 border-b border-cyan-900">
                    <Terminal size={18} className="text-cyan-400" />
                    <span className="font-mono text-sm font-bold">FFMPEG PROBE RESULTS</span>
                </div>
                <div className="p-6 font-mono text-xs text-cyan-300 space-y-2">
                    <p>[STREAM] Metadata Signature Detected: <span className="text-white">"VideoHandle v.4.x"</span></p>
                    <p>[AUDIO] Filter Chain Detected: <span className="text-white">"SoundHandle_Noise_Reduction_Mask"</span></p>
                    <p>[ENCODER] Lavf Standard bypass: <span className="text-red-400">NON-STANDARD ENCODING DETECTED</span></p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <EvidenceCard
                    id="TECH-01"
                    title="VideoHandle Manipulation"
                    status="CRIMINAL ALTERATION"
                    description="Detection of 'VideoHandle' metadata proves the video was processed in a 3D-manipulation suite before being submitted to the court. This tool is used to mask objects and alter physical perspectives."
                    lawCite="RCW 9A.72.150 (Tampering with Physical Evidence)"
                />

                <EvidenceCard
                    id="TECH-02"
                    title="SoundHandle Audio Scrubbing"
                    status="VOICE ALTERATION"
                    description="SoundHandle signatures indicate that the audio was 'cleaned' to remove background conversation—likely the deputies' radio traffic or orders from Jeremiah Johnson."
                    lawCite="18 U.S. Code § 1512"
                />
            </div>

            <section className="max-w-4xl mx-auto bg-cyan-900/10 border border-cyan-500/30 p-8 rounded-lg">
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 text-cyan-400">
                    <Cpu /> The "Handled" Evidence Trap
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                    The presence of <strong>VideoHandle</strong> and <strong>SoundHandle</strong> signatures
                    proves that a third party with professional editing capabilities was given access to the
                    raw police data. Since these are not standard BWC (Body Worn Camera) or Dashcam
                    encoding formats, the "Official Record" is a <strong>Digitally Manufactured Instrument.</strong>
                </p>
            </section>
        </div>
    )
}