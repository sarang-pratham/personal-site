"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Connection {
    label: string;
    href: string;
    connectCmd: string;
}

const connections: Connection[] = [
    { label: "[MAIL]", href: "mailto:sarangpratham720@gmail.com", connectCmd: "smtp connect@secure-relay" },
    { label: "[LINKEDIN]", href: "https://linkedin.com/in/sarang-pratham", connectCmd: "ssh user@linkedin-corp" },
    { label: "[X-CORP]", href: "https://x.com/sarangpratham_", connectCmd: "telnet x-server:443" },
];

export function SystemFooter() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-900 bg-black/80 backdrop-blur-md pb-safe">
            <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between font-mono text-xs">

                {/* Status Indicator */}
                <div className="flex items-center gap-3">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </div>
                    <span className="text-zinc-500 tracking-wider hidden md:inline">SYSTEM_LINKS_ACTIVE</span>
                    <span className="text-zinc-500 tracking-wider md:hidden">SYS_ACTIVE</span>
                </div>

                <div className="flex gap-4 md:gap-8">
                    <AnimatePresence>
                        {connections.map((conn) => (
                            <ConnectionLink key={conn.label} conn={conn} />
                        ))}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}

function ConnectionLink({ conn }: { conn: Connection }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative flex items-center justify-center">
            <a
                href={conn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                    {conn.label}
                </span>
            </a>

            {/* Connection String Popup */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute bottom-full mb-4 pointer-events-none whitespace-nowrap z-50"
                    >
                        <div className="bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-400 px-3 py-1.5 rounded-sm shadow-2xl flex items-center gap-2">
                            <span className="text-emerald-500 animate-pulse">●</span>
                            <span className="text-pumpkin-500">$</span> {conn.connectCmd}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
