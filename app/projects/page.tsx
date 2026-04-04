"use client";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

interface GitHubOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  type: string;
  site_admin: boolean;
}

interface Repository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GitHubOwner;
  html_url: string;
  description: string | null; // काही रिपोमध्ये हे 'null' असू शकते
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  } | null;
  topics: string[];
  visibility: string;
  default_branch: string;
}

const projects: Repository[] = [];

// const projects = [
//   {
//     title: "Portfolio Website",
//     tag: "WEB_APPLICATION",
//     description:
//       "A personal portfolio built with Next.js and Tailwind CSS, showcasing projects, skills, and a hacker-inspired dark aesthetic.",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS"],
//     github: "https://github.com",
//     live: "",
//     placeholder: "PORTFOLIO_SYS",
//   },
//   {
//     title: "CTF Challenge Tracker",
//     tag: "SECURITY_TOOL",
//     description:
//       "A web app to track and document Capture The Flag challenges, write-ups, and progress across various cybersecurity competitions.",
//     tech: ["React", "Node.js", "SQLite"],
//     github: "https://github.com",
//     live: "",
//     placeholder: "CTF_TRACKER",
//   },
//   {
//     title: "Network Scanner",
//     tag: "OFFENSIVE_SECURITY",
//     description:
//       "A lightweight Python-based tool for local network enumeration and host discovery, built for lab environments and learning.",
//     tech: ["Python", "Scapy", "CLI"],
//     github: "https://github.com",
//     live: "",
//     placeholder: "NET_SCAN_v1",
//   },
//   {
//     title: "REST API Boilerplate",
//     tag: "BACKEND_SYSTEMS",
//     description:
//       "A production-ready Express.js API starter with JWT auth, rate limiting, and clean route structure for rapid backend development.",
//     tech: ["Express.js", "JWT", "MongoDB"],
//     github: "https://github.com",
//     live: "",
//     placeholder: "API_CORE",
//   },
//   {
//     title: "Linux Dotfiles",
//     tag: "DEV_ENVIRONMENT",
//     description:
//       "A curated collection of dotfiles for a minimal, keyboard-driven development environment on Arch Linux with custom shell aliases.",
//     tech: ["Bash", "Neovim", "tmux"],
//     github: "https://github.com",
//     live: "",
//     placeholder: "DOTFILES_CFG",
//   },
//   {
//     title: "Vulnerability Notes DB",
//     tag: "KNOWLEDGE_BASE",
//     description:
//       "A structured Markdown-based knowledge base documenting common CVEs, exploitation techniques, and mitigation strategies for study.",
//     tech: ["Markdown", "Obsidian", "Git"],
//     github: "https://github.com",
//     live: "",
//     placeholder: "VULN_DB",
//   },
// ];

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative w-full h-44 bg-[#0d1117] border border-[#2d3a3d] rounded-t-lg overflow-hidden flex items-center justify-center">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#00ff44 1px, transparent 1px), linear-gradient(90deg, #00ff44 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Corner accents */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#00ff44]/60" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#00ff44]/60" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#00ff44]/60" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#00ff44]/60" />

      {/* Glow blob */}
      <div className="absolute w-28 h-28 rounded-full bg-[#00ff44]/5 blur-2xl" />

      {/* Center label */}
      <div className="relative flex flex-col items-center gap-2">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="block w-1 h-1 rounded-full bg-[#00ff44]/60"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <span className="text-[10px] text-[#00ff44]/70 font-mono uppercase tracking-widest px-3 py-1 border border-[#00ff44]/30 rounded bg-[#00ff44]/5">
          {label}
        </span>
        <span className="text-[9px] text-[#58667a] font-mono uppercase tracking-wider">
          img_placeholder
        </span>
      </div>

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #00ff44 2px, #00ff44 3px)",
        }}
      />
    </div>
  );
}

export default function ProjectsPage() {
  // साधा व्हेरिएबल ऐवजी State वापर
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const myownprojects = projects.filter((repo) => !repo.fork);

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await axios.get(
          "https://api.github.com/users/codedloki/repos",
        );

        // डेटा सॉर्ट करून (recent first) स्टेटमध्ये सेट कर
        const sortedData = response.data.sort(
          (a: any, b: any) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
        );

        setProjects(sortedData);
        setLoading(false);
        console.log(myownprojects);
      } catch (error) {
        console.error("Error fetching repos:", error);
        setLoading(false);
      }
    }
    getRepos();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-start min-h-screen bg-[#10141a] font-mono text-zinc-100">
      <main className="flex flex-col flex-1 w-full max-w-6xl px-6 md:px-12 py-20">
        {/* ... Header Section ... */}

        <div className="flex items-center gap-2 mb-10">
          <span className="text-xs text-[#00ff44] border border-[#00ff44]/40 bg-[#00ff44]/5 px-3 py-1 rounded font-mono">
            {loading ? "LOADING..." : `${projects.length} MODULES LOADED`}
          </span>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myownprojects.map((project) => (
            <div key={project.id} className="...">
              {/* GitHub डेटानुसार मॅपिंग बदलले आहे */}
              <ImagePlaceholder label={project.language || "SOURCE_CODE"} />

              <div className="flex flex-col flex-1 p-5 gap-4">
                <span className="text-[10px] text-[#00ff44] uppercase font-mono tracking-widest">
                  {project.language || "Unknown Tech"}
                </span>

                <h3 className="text-base font-bold text-zinc-100 group-hover:text-[#00ff44] transition-colors duration-200">
                  {project.name}
                </h3>

                <p className="text-[#a0afba] text-xs leading-relaxed flex-1">
                  {project.description ||
                    "Cybersecurity project in development. Full documentation available on GitHub."}
                </p>

                <div className="flex gap-3 pt-2 border-t border-[#1e2d2f]">
                  <a
                    href={project.html_url}
                    target="_blank"
                    className="text-[10px] text-[#00ff44] uppercase tracking-wider hover:underline"
                  >
                    {">"} GitHub
                  </a>
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      className="text-[10px] text-[#a0afba] uppercase tracking-wider hover:text-[#00ff44] hover:underline"
                    >
                      {">"} Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ... Footer ... */}
      </main>
    </div>
  );
}
