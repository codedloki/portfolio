"use client";

import { MdiGithub } from "@/components/GithubIco";
import { LineMdLinkedin } from "@/components/LinkedinIco";
import { RiTwitterXFill } from "@/components/TwitterIco";
import { MaterialSymbolsArrowShapeUp } from "@/components/Backtop";
import Link from "next/link";

export function Footer() {
  function scrollToTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 md:py-10 border-t border-[#2d3a3d] text-[#a0afba] text-[10px] md:text-xs bg-[#10141a] gap-6 md:gap-0">
      {/* Social Links Container */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 uppercase">
        <Link
          href="https://github.com/codedloki/"
          className="hover:text-[#00ff44] transition-colors"
        >
          <span className="flex items-center gap-2">
            <MdiGithub className="text-sm md:text-base" />
            GITHUB
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/prashikjadhav"
          className="hover:text-[#00ff44] transition-colors"
        >
          <span className="flex items-center gap-2">
            <LineMdLinkedin className="text-sm md:text-base" />
            LINKEDIN
          </span>
        </Link>
        <Link
          href="https://x.com/prashikcodes/"
          className="hover:text-[#00ff44] transition-colors"
        >
          <span className="flex items-center gap-2">
            <RiTwitterXFill className="text-sm md:text-base" />
            TWITTER
          </span>
        </Link>
      </div>

      {/* Back to Top */}
      <a
        onClick={scrollToTop}
        className="flex items-center gap-2 hover:text-[#00ff44] transition-colors bg-transparent border-none p-0 cursor-pointer outline-none uppercase text-[10px] md:text-xs"
      >
        <MaterialSymbolsArrowShapeUp className="text-sm md:text-base" />
        BACK TO TOP
      </a>
    </footer>
  );
}
