"use client";

import { Terminal, FileCode, FileJson, FileText } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-zinc-950/90 border-r border-zinc-900 pt-16 hidden md:flex flex-col font-mono z-40">
      <div className="px-6 mb-8">
        <h2 className="text-zinc-600 text-xs mb-4 uppercase tracking-wider select-none">Explorer</h2>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-zinc-500 mb-2 px-2">
            <span className="text-xs">portfolio</span>
          </div>
          <NavItem href="/" icon={Terminal} label="home.py" active={pathname === '/'} />
          <NavItem href="#projects" icon={FileCode} label="projects.tsx" active={false} />
          <NavItem href="#log" icon={FileJson} label="system_log.json" active={false} />
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

function NavItem({ href, icon: Icon, label, active }: { href: string, icon: any, label: string, active: boolean }) {
  return (
    <Link
      href={href}
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
