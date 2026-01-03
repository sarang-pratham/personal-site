"use client";

import { Terminal, FileCode, FileJson, Clock, Layers } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-40% 0px -45% 0px", // Detect when element is in the middle 15% of screen
        threshold: 0
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-zinc-950/90 border-r border-zinc-900 pt-16 hidden md:flex flex-col font-mono z-40">
      <div className="px-6 mb-8">
        <h2 className="text-zinc-600 text-xs mb-4 uppercase tracking-wider select-none">Explorer</h2>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-zinc-500 mb-2 px-2">
            <span className="text-xs">portfolio</span>
          </div>
          <NavItem 
            href="/" 
            icon={Terminal} 
            label="home.py" 
            active={activeSection === "" || activeSection === "hero"} 
            onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <NavItem 
            href="#operational-history" 
            icon={Clock} 
            label="history.log" 
            active={activeSection === "operational-history"} 
            onClick={(e) => scrollToSection(e, "operational-history")}
          />
          <NavItem 
            href="#system-showcase" 
            icon={Layers} 
            label="showcase.tsx" 
            active={activeSection === "system-showcase"} 
            onClick={(e) => scrollToSection(e, "system-showcase")}
          />
          <NavItem 
            href="#activity-log" 
            icon={FileJson} 
            label="system_log.json" 
            active={activeSection === "activity-log"} 
            onClick={(e) => scrollToSection(e, "activity-log")}
          />
        </div>
      </div>

      <div className="mt-auto px-6 pb-6">
        <div className="flex items-center gap-2 text-zinc-600 text-xs">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Status: Online</span>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ href, icon: Icon, label, active, onClick }: { href: string, icon: any, label: string, active: boolean, onClick?: (e: any) => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-2 px-2 py-1.5 rounded text-sm transition-all
        ${active
          ? 'bg-zinc-900 text-pumpkin-500 border-l-2 border-pumpkin-500'
          : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 border-l-2 border-transparent'
        }
      `}
    >
      <Icon size={14} strokeWidth={1.5} />
      <span>{label}</span>
    </Link>
  )
}
