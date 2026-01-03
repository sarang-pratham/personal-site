"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TerminalHero() {
    const [text, setText] = useState("");
    const fullText = `> Initializing system...
> Loading user_profile...
> [SUCCESS] User authenticated.
>
> Hey, I'm Pratham.
> At the intersection of Data, AI, and Automation.`;

    useEffect(() => {
        let index = 0;
        // Faster typing speed
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="min-h-[50vh] flex flex-col justify-center pt-20 px-4 md:px-0">
            <div className="w-full max-w-3xl border border-zinc-800 bg-black/50 rounded-lg overflow-hidden backdrop-blur-sm shadow-2xl">
                {/* Terminal Header */}
                <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    <div className="ml-auto text-[10px] text-zinc-500 font-mono">user@sarang-pratham:~</div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm md:text-base leading-relaxed text-zinc-300 min-h-[200px]">
                    <div className="whitespace-pre-wrap">
                        {text}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2.5 h-5 bg-pumpkin-500 ml-1 translate-y-[2px] align-middle"
                        />
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.5 }}
                className="mt-8 flex gap-4 font-mono text-xs"
            >
                <div className="px-3 py-1.5 border border-zinc-800 rounded text-zinc-400 bg-zinc-900/30">
                    <span className="text-emerald-500">●</span> Status: Available
                </div>
                <div className="px-3 py-1.5 border border-zinc-800 rounded text-zinc-400 bg-zinc-900/30">
                    Latency: 12ms
                </div>
            </motion.div>
        </section>
    );
}
