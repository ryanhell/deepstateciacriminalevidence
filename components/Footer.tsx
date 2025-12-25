export function Footer() {
    return (
        <footer className="mt-20 border-t border-slate-800 bg-black p-10 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-red-500 font-mono text-xs uppercase tracking-widest">
                    Public Safety Alert: Digital Chain of Custody has been compromised.
                </p>
                <p className="text-slate-500 text-[10px] leading-relaxed">
                    The information on this portal is derived from FFMPEG metadata analysis of
                    discovery provided in Case 24-1-00253-04. Forensic markers of VideoHandle
                    and SoundHandle are verified.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                    <button className="px-4 py-2 bg-slate-800 text-white text-[10px] font-bold rounded hover:bg-red-700 transition-colors">
                        DOWNLOAD FULL PDF ARCHIVE
                    </button>
                </div>
            </div>
        </footer>
    )
}   