"use client";

import { Menu, X, Terminal, SquareTerminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Geist } from "next/font/google";

interface navbaritem {
  name: string;
  href: string;
}

const geist = Geist({ subsets: ["latin"] });

const navItems: navbaritem[] = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "ACHIEVEMENTS", href: "/achievements" },
  { name: "STACK", href: "/stack" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[#0b0e19]/90 backdrop-blur-md border-b border-white/10 ${geist.className}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo section */}
            <Link href="/" className="flex items-center group">
              <Terminal
                className="text-[#00ff44] mr-2 group-hover:scale-110 transition-transform"
                size={24}
              />
              <span className="text-[#00ff44] font-bold tracking-tighter">
                codedloki
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-8 font-mono text-sm">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative pb-1 transition-colors duration-300 uppercase tracking-widest ${
                          isActive
                            ? "text-[#00ff44] font-semibold"
                            : "text-zinc-400 hover:text-[#00ff44]"
                        }`}
                      >
                        {item.name}
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff44]"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <SquareTerminal
                  className="text-[#00ff44]/50 hover:text-[#00ff44] transition-colors cursor-help"
                  size={22}
                />
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-[#00ff44] p-1 hover:bg-[#00ff44]/10 rounded-md transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-[#0b0e19] border-t border-white/5"
            >
              <ul className="flex flex-col p-6 space-y-6 font-mono">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg block transition-colors duration-300 ${
                          isActive
                            ? "text-[#00ff44] font-bold"
                            : "text-zinc-400"
                        }`}
                      >
                        <span className="text-[#00ff44]/30 mr-2 text-sm">
                          {"//"}
                        </span>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer to prevent content from going under the fixed nav */}
      <div className="h-[73px]" />
    </>
  );
}
