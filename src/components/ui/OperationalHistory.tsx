"use client";

import { motion } from "framer-motion";
import { Circle, GitCommit, GitPullRequest } from "lucide-react";

interface HistoryItem {
    role: string;
    company: string;
    period: string;
    description: string;
    tech: string[];
    type: "commit" | "merge";
}

const history: HistoryItem[] = [
    {
        role: "Software Engineer",
        company: "Forage AI",
        period: "2025 - PRESENT",
        description: "Developing data automations and web navigation intelligence.",
        tech: ["Python", "Pandas", "Playwright", "AI Agents (Browser Agents)"],
        type: "merge"
    },
    {
        role: "Software Engineer",
        company: "Abilitystack Inc.",
        period: "2022 - 2025",
        description: "Developed microservices, Data pipelines and AI Agents / Workflow focusing HRTech domain.",
        tech: ["Python", "LangGraph", "PostgreSQL", "DSPy", "Redis", "Apache Spark", "AI Integrations (OpenAI, Anthorpic, Gemini)"],
        type: "commit"
    }
];

export function OperationalHistory() {
    return (
        <section id="operational-history" className="py-12 px-4 md:px-0">
            <div className="flex items-center gap-2 mb-12 border-b border-zinc-900 pb-4">
                <span className="text-pumpkin-500 font-mono">#</span>
                <h2 className="text-lg font-bold tracking-tight">OPERATIONAL_HISTORY</h2>
                <span className="text-zinc-600 text-xs font-mono ml-auto">Log: {history.length} events</span>
            </div>

            <div className="relative border-l border-dashed border-zinc-800 ml-4 md:ml-12 space-y-12 pb-12">
                {history.map((item, index) => (
                    <TimelineItem key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
}

function TimelineItem({ item, index }: { item: HistoryItem; index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
        >
            {/* Connector Icon */}
            <div className="absolute -left-[9px] top-0 bg-zinc-950 text-zinc-600">
                {item.type === "merge" ? <GitPullRequest size={18} /> : <GitCommit size={18} />}
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 relative group">
                {/* Meta Column */}
                <div className="w-full md:w-48 flex-shrink-0 font-mono text-xs text-zinc-500 pt-1">
                    <div className="text-pumpkin-500 font-bold mb-1">{item.period}</div>
                    <div>{item.company}</div>
                </div>

                {/* Content Card */}
                <div className="flex-grow p-4 md:p-6 border border-zinc-900 bg-zinc-900/10 rounded-sm hover:border-pumpkin-500/30 hover:bg-zinc-900/20 transition-all duration-300">
                    <h3 className="text-zinc-200 font-bold mb-2 flex items-center gap-2">
                        {item.role}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                        {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {item.tech.map((t, i) => (
                            <span key={i} className="px-2 py-1 rounded-sm bg-zinc-900 text-zinc-500 text-xs font-mono border border-zinc-800">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
