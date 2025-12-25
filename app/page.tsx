import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShieldAlert, Scale, Truck, FileSearch, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 p-6 md:p-12 lg:p-24 space-y-12">
      {/* Header / Forensic Alert Section */}
      <header className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center gap-3 text-red-500 font-mono tracking-tighter text-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          OFFICIAL WHISTLEBLOWER DISCLOSURE // CASE: CHELAN-2024-GRID
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          Operation Gridlack: Systemic Judicial Corruption Report
        </h1>

        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Forensic documentation of illegal abduction, state-sanctioned extortion, and
          evidence tampering within Chelan County, WA.
          <span className="text-white font-semibold italic"> For Federal & Investigative use only.</span>
        </p>

        <Alert variant="destructive" className="bg-red-950/30 border-red-500/50">
          <ShieldAlert className="h-5 w-5" />
          <AlertTitle className="font-bold">NOTICE TO FBI / DOJ / DHS</AlertTitle>
          <AlertDescription>
            This portal contains primary source evidence regarding 18 U.S. Code § 241 (Conspiracy Against Rights)
            and 18 U.S. Code § 1512 (Tampering with Witnesses).
          </AlertDescription>
        </Alert>
      </header>

      {/* Evidence Pillars Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1: Abduction */}
        <Card className="bg-slate-900 border-slate-800 hover:border-blue-500 transition-colors">
          <CardHeader>
            <Scale className="text-blue-500 mb-2 h-8 w-8" />
            <CardTitle>Judicial Abduction</CardTitle>
            <CardDescription>The "Steno-in-the-Barn" Conflict</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-400">
              Side-by-side proof of the Superior Court Stenographer’s presence at an
              unlisted "black site" during the July 4th detention.
            </p>
            <Link href="/sallybagshaw">
              <Button variant="outline" className="w-full">Review Evidence</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Pillar 2: Towing Fraud */}
        <Card className="bg-slate-900 border-slate-800 hover:border-amber-500 transition-colors">
          <CardHeader>
            <Truck className="text-amber-500 mb-2 h-8 w-8" />
            <CardTitle>Racketeering</CardTitle>
            <CardDescription>B&T Towing / Dissolved LLCs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-400">
              Evidence of $1,000 "cash-only" extortion by a defunct LLC operating
              as a law-enforcement tool.
            </p>
            <Link href="/the-shakedown">
              <Button variant="outline" className="w-full">Review Fraud Logs</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Pillar 3: Tampering */}
        <Card className="bg-slate-900 border-slate-800 hover:border-red-500 transition-colors">
          <CardHeader>
            <FileSearch className="text-red-500 mb-2 h-8 w-8" />
            <CardTitle>Records Tampering</CardTitle>
            <CardDescription>Redacted Audio & Dash Cams</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-400">
              Audit trails showing missing lines of court audio and modified
              Sheriff dash cam footage.
            </p>
            <Link href="/evidence-tampering">
              <Button variant="outline" className="w-full">View Audit Trail</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer / Quick Nav for Investigators */}
      <footer className="max-w-5xl mx-auto pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between gap-6 items-center">
        <div className="flex gap-4">
          <Badge variant="secondary">RCW 46.55 Violation</Badge>
          <Badge variant="secondary">RCW 9A.40 Conflict</Badge>
        </div>
        <div className="flex gap-6 text-sm text-slate-500">
          <Link href="/timeline" className="hover:text-white underline">Timeline</Link>
          <Link href="/contact" className="hover:text-white underline">Encrypted Contact</Link>
          <a href="https://sos.wa.gov" target="_blank" className="flex items-center gap-1 hover:text-white underline">
            WA SoS Records <ExternalLink size={14} />
          </a>
        </div>
      </footer>
    </div>
  )
}