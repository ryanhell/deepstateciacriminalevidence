export function DOJReport() {
    return (
        <div className="max-w-4xl mx-auto my-10 border-4 border-double border-red-600 p-6 bg-slate-900 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            <h3 className="text-2xl font-black text-red-500 mb-2 uppercase italic">DOJ / FBI Case Submission</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 font-mono">
                The presence of <span className="text-white font-bold underline">Sally Bagshaw</span> (Former Chief Civil Deputy Prosecutor, King County) at the "Barn" site (Incident 24C06401) establishes a high-probability of <span className="text-white font-bold">State-Created Danger</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[10px] font-bold text-red-400">
                <div className="border border-red-900 p-2">VIOLATION: 18 U.S.C. § 241</div>
                <div className="border border-red-900 p-2">VIOLATION: 18 U.S.C. § 242</div>
                <div className="border border-red-900 p-2">RCW 9A.36.021 (ASSAULT 2)</div>
                <div className="border border-red-900 p-2">RCW 9A.76.050 (OBSTRUCTION)</div>
            </div>
        </div>
    )
}