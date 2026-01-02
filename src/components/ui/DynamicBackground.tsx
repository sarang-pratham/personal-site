"use client";

import { useEffect, useRef } from "react";

export function DynamicBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const x = clientX;
            const y = clientY;
            containerRef.current.style.setProperty("--mouse-x", `${x}px`);
            containerRef.current.style.setProperty("--mouse-y", `${y}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
                background: `
          radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(254, 117, 14, 0.06), transparent 40%),
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), 
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
                backgroundSize: '100% 100%, 40px 40px, 40px 40px'
            }}
        />
    );
}
