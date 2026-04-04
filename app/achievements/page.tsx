"use client";

import { ShieldCheck, Target, Award } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon Finalist",
    category: "CYBER_SECURITY",
    organization: "Ministry of Education, Govt. of India",
    date: "2024",
    description:
      "National-level finalist in the Cybersecurity category. Developed a solution for real-world security challenges under intense competition.",
    icon: <ShieldCheck className="w-5 h-5 text-[#00ff44]" />,
  },
  {
    title: "Vulnerability Research & Bug Hunting",
    category: "OFFENSIVE_SECURITY",
    organization: "Independent Research",
    date: "Ongoing",
    description:
      "Actively identifying and documenting vulnerabilities. Specialized in web application penetration testing and network reconnaissance.",
    icon: <Target className="w-5 h-5 text-[#00ff44]" />,
  },
  {
    title: "Open Source Contributor",
    category: "DEV_RESOURCES",
    organization: "GitHub Community",
    date: "Present",
    description:
      "Building and maintaining high-performance CLI tools in Rust and Python for the developer and security community.",
    icon: <Award className="w-5 h-5 text-[#00ff44]" />,
  },
];

export default function AchievementsPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start min-h-screen bg-[#10141a] font-mono text-zinc-100">
      <main className="flex flex-col flex-1 w-full max-w-6xl px-6 md:px-12 py-20">
        {/* Page header */}
        <div className="flex items-center gap-4 text-xs text-[#00ff44]/70 uppercase mb-8">
          <span>{"//"} MILESTONES & ACHIEVEMENTS</span>
          <span className="flex-1 h-px bg-[#00ff44]/20" />
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Mission <span className="text-[#00ff44]">Success</span>
          </h1>
          <p className="text-[#a0afba] text-sm leading-relaxed max-w-xl">
            Tracing my journey through national hackathons, security research,
            and technical milestones in the field of IT and Cybersecurity.
          </p>
        </div>

        {/* Achievements Timeline/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg border border-[#1e2d2f] bg-[#0d1117] hover:border-[#00ff44]/50 transition-all duration-300 group"
            >
              {/* Corner Accent */}
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00ff44]/0 group-hover:border-[#00ff44]/30 transition-all duration-300" />

              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-[#00ff44]/5 border border-[#00ff44]/20">
                  {achievement.icon}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] text-[#00ff44] uppercase tracking-widest font-bold">
                      {achievement.category}
                    </span>
                    <span className="text-[10px] text-[#58667a]">
                      {achievement.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-[#00ff44] transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-[#58667a] text-xs mb-3 font-semibold uppercase">
                    {">"} {achievement.organization}
                  </p>

                  <p className="text-[#a0afba] text-xs leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Terminal Note */}
      </main>
    </div>
  );
}
