"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldAlert,
  Activity,
  Users,
  Database,
  Gavel,
  Terminal,
  FileWarning,
  Menu,
  X,
  Eye,
  Server
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navGroups = [
    {
      label: "The Incident",
      links: [
        { name: "Master Timeline", href: "/timeline", icon: Activity },
        { name: "Sally Bagshaw (Assault)", href: "/sallybagshaw", icon: Users },
        { name: "The Steno (The Watcher)", href: "/steno-profile", icon: Eye },
      ]
    },
    {
      label: "Digital Forensics",
      links: [
        { name: "VPS2 Storage (Files)", href: "/evidence", icon: Server },
        { name: "FFMPEG / VideoHandle", href: "/forensics", icon: Terminal },
        { name: "3D Tampering Proof", href: "/forgery", icon: ShieldAlert },
      ]
    },
    {
      label: "Judicial Corruption",
      links: [
        { name: "Sean Estworthy (Counsel)", href: "/collusion", icon: Users },
        { name: "Judge Jordan (Mockery)", href: "/judicial-misconduct", icon: Gavel },
        { name: "Motion Blockade", href: "/forensic-blockade", icon: ShieldAlert },
      ]
    }
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-red-900 bg-slate-950/95 backdrop-blur-md">
      {/* Top Status Bar */}
      <div className="w-full bg-red-600 text-white text-[10px] font-mono py-1 px-4 flex justify-between uppercase">
        <span>Public Disclosure: Case 24-1-00253-04</span>
        <span className="animate-pulse flex gap-2 text-white font-black">
          <span className="hidden sm:inline">Forensic Markers Active:</span>
          SHERIFF_TERROR_DOCUMENTED
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-black text-xl tracking-tighter text-white uppercase italic">
            EVIDENCE<span className="text-red-600">PORTAL</span>
          </Link>

          {/* Desktop Layout: Grouped Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navGroups.map((group) => (
              <div key={group.label} className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                  {group.label}
                </span>
                <div className="flex space-x-4">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-xs font-bold uppercase transition-colors hover:text-red-500 ${pathname === link.href ? "text-red-500 underline underline-offset-4" : "text-slate-300"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-red-900 p-6 space-y-8 animate-in slide-in-from-top">
          {navGroups.map((group) => (
            <div key={group.label} className="space-y-4">
              <h3 className="text-xs font-black text-red-500 uppercase tracking-widest">{group.label}</h3>
              <div className="grid grid-cols-1 gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 text-sm font-bold text-slate-200"
                  >
                    <link.icon size={18} className="text-red-600" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}