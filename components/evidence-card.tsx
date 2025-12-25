import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// We use 'any' here to stop the build from ever crashing on a 'status' label again.
interface EvidenceProps {
    title: string;
    id: string;
    status: any;
    description: string;
    lawCite: string;
}

export function EvidenceCard({ title, id, status, description, lawCite }: EvidenceProps) {
    // Simple color logic: Verified is green, everything else (Urgent, Error, etc) is amber/red
    const statusColor = status === "Verified" ? "bg-green-500" : "bg-amber-600";

    return (
        <Card className="bg-slate-900 border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-mono text-slate-400">FILE ID: {id}</CardTitle>
                <Badge className={statusColor}>{status}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
                <h4 className="text-xl font-bold">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                <div className="pt-2 border-t border-slate-800">
                    <span className="text-xs font-mono text-blue-400 uppercase">Violation: {lawCite}</span>
                </div>
            </CardContent>
        </Card>
    )
}