"use client";

import { CheckCircle2, Circle, AlertCircle } from "lucide-react";

interface LogEntry {
    id: string;
    timestamp: string;
    event: string;
    status: "SUCCESS" | "WARNING" | "ERROR" | "INFO";
    details?: string;
}

const logs: LogEntry[] = [
    { id: "0xf0", timestamp: "2026.01.02 12:05:00", event: "PORTFOLIO_CORE_STABLE", status: "INFO", details: "Portfolio running live." },
    { id: "0xf3", timestamp: "2026.01.03 11:30:00", event: "OPERATIONAL_HISTORY_TIMELINE", status: "SUCCESS", details: "Career timeline updated." },
    { id: "0xf2", timestamp: "2026.01.02 21:00:00", event: "PORTFOLIO_CORE_STABLE", status: "INFO", details: "Portfolio running live." },
    { id: "0xf1", timestamp: "2026.01.02 19:55:00", event: "DEPLOYED_PORTFOLIO", status: "SUCCESS", details: "Site with Next.js & Tailwind success." },
    { id: "0xef", timestamp: "2026.01.02 19:30:00", event: "PROMPT_TO_CODE_SYNC", status: "WARNING", details: "Reviewed & synced prompt-to-code." },
    { id: "0xee", timestamp: "2026.01.02 19:15:00", event: "AGENT_ORCHESTRATOR_INIT", status: "SUCCESS" },
    { id: "0xed", timestamp: "2026.01.02 19:00:00", event: "SYSTEM_BOOTSTRAP", status: "INFO", details: "Kernel init." },
];

export function ActivityLog() {
    return (
        <section id="activity-log" className="py-12 px-4 md:px-0 mb-20">
            <div className="flex items-center gap-2 mb-8 border-b border-zinc-900 pb-4">
                <span className="text-zinc-600 font-mono">::</span>
                <h2 className="text-lg font-bold tracking-tight">SYSTEM_LOG</h2>
            </div>

            <div className="border border-zinc-900 bg-black rounded-sm p-4 font-mono text-xs md:text-sm h-[300px] overflow-y-auto custom-scrollbar">
                <div className="flex flex-col gap-3">
                    {logs.map((log) => (
                        <div key={log.id} className="flex gap-4 items-start hover:bg-zinc-900/30 p-1 rounded transition-colors group">
                            <span className="text-zinc-600 min-w-[140px] shrink-0">[{log.timestamp}]</span>
                            <div className="flex items-center gap-2 text-zinc-400 group-hover:text-zinc-200">
                                <StatusIcon status={log.status} />
                                <span className="font-bold">{log.event}</span>
                                {log.details && <span className="text-zinc-600 hidden md:inline">- {log.details}</span>}
                            </div>
                        </div>
                    ))}
                    <div className="animate-pulse text-zinc-700 pt-2">_</div>
                </div>
            </div>
        </section>
    );
}

function StatusIcon({ status }: { status: LogEntry['status'] }) {
    switch (status) {
        case "SUCCESS": return <CheckCircle2 size={14} className="text-emerald-500" />;
        case "WARNING": return <AlertCircle size={14} className="text-yellow-500" />;
        case "ERROR": return <AlertCircle size={14} className="text-red-500" />;
        default: return <Circle size={14} className="text-blue-500" />;
    }
}
