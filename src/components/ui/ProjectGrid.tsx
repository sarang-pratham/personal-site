"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Box, Cpu, Layers } from "lucide-react";
import { useState } from "react";

interface Project {
    title: string;
    description: string;
    tech: string[];
    latency: string;
    status: "SUCCESS" | "RUNNING" | "STOPPED";
    link: string;
}

const projects: Project[] = [
    {
        title: "agentic-portfolio",
        description: "Experimental portfolio built with 'Stealth' aesthetic. Features terminal emulations, dynamic environments, and agentic workflows.",
        tech: ["Next.js 15", "Tailwind v4", "Framer Motion", "Lucide React", "TypeScript"],
        latency: "12ms",
        status: "RUNNING",
        link: "#"
    }
];

export function ProjectGrid() {
    return (
        <section id="projects" className="py-12 px-4 md:px-0">
            <div className="flex items-center gap-2 mb-8 border-b border-zinc-900 pb-4">
                <span className="text-pumpkin-500 font-mono">#</span>
                <h2 className="text-lg font-bold tracking-tight">OPERATIONAL_HISTORY</h2>
                <span className="text-zinc-600 text-xs font-mono ml-auto">Active: 1</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}

                {/* Placeholder for empty slots to maintain grid structure visually or just leave empty */}
                <div className="border border-zinc-900/50 bg-zinc-950/30 rounded-sm p-5 flex items-center justify-center text-zinc-800 font-mono text-xs">
                    [SLOT_EMPTY]
                </div>
                <div className="border border-zinc-900/50 bg-zinc-950/30 rounded-sm p-5 flex items-center justify-center text-zinc-800 font-mono text-xs hidden md:flex">
                    [SLOT_EMPTY]
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const [isStackHovered, setIsStackHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ borderColor: "var(--color-pumpkin-500-20)" }}
            className="group relative border border-zinc-800 bg-zinc-900/20 rounded-sm overflow-visible hover:bg-zinc-900/40 transition-colors h-64 flex flex-col"
        >
            {/* Scanning Effect */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pumpkin-500/50 to-transparent z-20 pointer-events-none"
                initial={{ top: "-10%" }}
                whileHover={{ top: "120%", transition: { duration: 1.5, repeat: Infinity, ease: "linear" } }}
            />

            <div className="p-5 h-full flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-zinc-100 group-hover:text-pumpkin-500 transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <StatusBadge status={project.status} />
                </div>

                <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs font-mono text-zinc-600 relative">
                    <div
                        className="flex items-center gap-1 cursor-help hover:text-zinc-300 transition-colors"
                        onMouseEnter={() => setIsStackHovered(true)}
                        onMouseLeave={() => setIsStackHovered(false)}
                    >
                        <Layers size={12} />
                        <span>[STACK_INFO]</span>
                    </div>

                    <AnimatePresence>
                        {isStackHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute left-0 bottom-full mb-2 w-48 bg-zinc-950 border border-zinc-800 rounded shadow-xl z-50 p-3"
                            >
                                <div className="text-[10px] text-zinc-500 mb-2 border-b border-zinc-900 pb-1">module_tree</div>
                                <div className="flex flex-col gap-1 text-xs text-zinc-400">
                                    {project.tech.map((t, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="text-zinc-700">├─</span>
                                            <span className="text-zinc-300">{t}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-2">
                                        <span className="text-zinc-700">└─</span>
                                        <span className="text-emerald-500">v1.0.0</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <span>lat: {project.latency}</span>
                </div>
            </div>
        </motion.div>
    );
}

function StatusBadge({ status }: { status: Project['status'] }) {
    const colors = {
        SUCCESS: "text-emerald-500",
        RUNNING: "text-yellow-500 animate-pulse",
        STOPPED: "text-zinc-500",
        FAILED: "text-red-500"
    };

    return (
        <span className={`text-[10px] font-mono tracking-wider ${colors[status]}`}>
            [{status}]
        </span>
    );
}
