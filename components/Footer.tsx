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
    <footer className="w-full max-w-full flex items-center justify-between px-12 py-10 border-t border-[#2d3a3d] text-[#a0afba] text-xs bg-[#10141a]">
      {/*<span>&copy; 2024 TERMINAL SOPHISTICATE PROT</span>*/}
      <div className="flex gap-8 uppercase ">
        <Link href="https://github.com/codedloki/">
          <span className="flex items-center gap-2">
            <MdiGithub />
            GITHUB
          </span>
        </Link>
        <Link href="www.linkedin.com/in/prashikjadhav">
          <span className="flex items-center gap-2">
            <LineMdLinkedin />
            LINKEDIN
          </span>
        </Link>
        <Link href="https://x.com/prashikcodes/">
          <span className="flex items-center gap-2">
            <RiTwitterXFill />
            TWITTER
          </span>
        </Link>

        <a
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#00ff44] transition-colors bg-transparent border-none p-0 cursor-pointer outline-none uppercase"
        >
          <MaterialSymbolsArrowShapeUp />
          BACK TO TOP
        </a>
      </div>
    </footer>
  );
}
