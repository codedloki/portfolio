"use client";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Terminal, SquareTerminal } from "lucide-react";
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0b0e19]/80 backdrop-blur-md border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          {/*Logo section*/}
          <div className="flex items-center">
            <Terminal className="text-[#00ff44] mr-2" size={24} />
            <span className="text-[#00ff44] font-bold">codedloki</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8 font-mono text-white">
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
                      className={`relative pb-1 transition-colors duration-300 ${
                        isActive
                          ? "text-[#00ff44] font-semibold"
                          : "text-white hover:text-[#00ff44]"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff44]"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#00ff44]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right Icon */}
          <button>
            <div className="hidden md:block">
              <SquareTerminal className="text-[#00ff44]" size={24} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 border-t border-white/10 pt-4"
          >
            <ul className="flex flex-col space-y-4 font-mono text-white">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-[#00ff44] font-semibold"
                          : "text-white hover:text-[#00ff44]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>

      {/* Top padding for fixed navbar */}
      <div className="h-16" />
    </>
  );
}
