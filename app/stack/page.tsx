// Sample Data Structure for the Arsenal
const stackItems = [
  // CATEGORY: Languages
  {
    category: "Languages",
    tag: "CORE_DEV",
    title: "Rust",
    level: 90,
    icon: "/icons/rust.svg",
    desc: "System-level security & concurrency focus.",
  },
  {
    category: "Languages",
    tag: "CORE_DEV",
    title: "Python",
    level: 95,
    icon: "/icons/python.svg",
    desc: "Scripting, exploit dev, automation.",
  },
  {
    category: "Languages",
    tag: "CORE_DEV",
    title: "Go (Golang)",
    level: 75,
    icon: "/icons/golang.svg",
    desc: "Network tools & fast server-side logic.",
  },

  // CATEGORY: OS & Architecture
  {
    category: "OS & Arch",
    tag: "ENVIRON",
    title: "Arch Linux",
    level: 100,
    icon: "/icons/arch.svg",
    desc: "Primary dev OS, customized for minimal footprint.",
  },
  {
    category: "OS & Arch",
    tag: "ENVIRON",
    title: "Kali Linux",
    level: 85,
    icon: "/icons/kali.svg",
    desc: "For security assessment & offensive labs.",
  },

  // CATEGORY: Cybersecurity
  {
    category: "Security",
    tag: "CYBER_ARSE",
    title: "Burp Suite Pro",
    level: 90,
    icon: "/icons/burp.svg",
    desc: "Advanced web application security testing.",
  },
  {
    category: "Security",
    tag: "CYBER_ARSE",
    title: "Metasploit",
    level: 70,
    icon: "/icons/metasploit.svg",
    desc: "Exploitation framework & payload generation.",
  },
  {
    category: "Security",
    tag: "CYBER_ARSE",
    title: "Wireshark",
    level: 80,
    icon: "/icons/wireshark.svg",
    desc: "Deep packet analysis & network protocols.",
  },

  // CATEGORY: Development & Tools
  {
    category: "Dev Tools",
    tag: "TOOLS",
    title: "Next.js + React",
    level: 85,
    icon: "/icons/nextjs.svg",
    desc: "Highly customizable UI/UX development.",
  },
  {
    category: "Dev Tools",
    tag: "TOOLS",
    title: "Neovim",
    level: 100,
    icon: "/icons/neovim.svg",
    desc: "Optimized development environment.",
  },
  {
    category: "Dev Tools",
    tag: "TOOLS",
    title: "Docker",
    level: 80,
    icon: "/icons/docker.svg",
    desc: "Isolated environments for labs & deployment.",
  },
];

export default function StackPage() {
  return (
    // Outer Container: Unified Dark Background + Radial Glows
    <div className="flex flex-col flex-1 items-center justify-start min-h-screen bg-background bg-radial-pattern font-mono text-zinc-100 dark:bg-background">
      {/* 1. Header (Same as Home, but Highlights STACK) */}

      {/* 2. Main Stack Content Area */}
      <main className="flex flex-col flex-1 w-full max-w-350 px-12 py-20 bg-transparent">
        {/* Top Accent/Breadcrumb Style Title */}
        <div className="flex items-center gap-4 text-xs text-[#00fe40]/70 uppercase mb-8">
          <span>
            {"//"} LOADOUT: TECH_ARSENAL {"//"} STATUS: CONFIGURED
          </span>
          <span className="w-full h-10 bg-[#00fe40]/20"></span>
        </div>

        {/* Hero Section of the Stack Page */}
        <section className="flex flex-col mb-24 max-w-2xl">
          <h1 className="text-[52px] font-bold leading-[1.1] mb-6 tracking-tight">
            The <span className="text-[#00fe40]">Arsenal.</span>
          </h1>
          <p className="text-zinc-dim text-sm leading-relaxed mb-12">
            A curated collection of technologies, frameworks, operating systems,
            and security tools I employ in daily operations, development, and
            research. Rigorously tested, constantly updated.
          </p>
        </section>

        {/* 3. The Grid Layout - Grouped by Category */}
        <section className="flex flex-col gap-16">
          {
            // Group the stack items by category
            Object.entries(
              stackItems.reduce(
                (acc: Record<string, typeof stackItems>, item) => {
                  (acc[item.category] = acc[item.category] || []).push(item);
                  return acc;
                },
                {} as Record<string, typeof stackItems>,
              ),
            ).map(([categoryName, items]) => (
              <div key={categoryName} className="flex flex-col gap-6">
                {/* Category Title/Header */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-sm font-bold text-[#00fe40] uppercase tracking-widest">
                    {categoryName}
                  </span>
                  <div className="flex-1 h-px bg-dark-accent"></div>
                  <span className="text-xs text-zinc-dim">
                    {items.length} MODULES
                  </span>
                </div>

                {/* Sub-grid of items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col p-6 gap-6 bg-[#00fe40]/60 border border-dark-accent rounded-lg shadow-xl relative hover:border-[#00fe40] hover:bg-stack-item-glow transition-all duration-300 overflow-hidden"
                    >
                      {/* Glow Overlay on hover */}
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-radial-gradient(circle at 50% 100%, rgba(29, 242, 0, 0.08) 0%, transparent 60%) opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      {/* Icon, Tag & Title Row */}
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 flex items-center justify-center border border-dark-accent bg-background rounded-lg p-2.5">
                          {/* Use image for actual logos, sample with simple div */}
                          {/* <Image src={item.icon} alt={item.title} width={30} height={30} className="filter-core-green" /> */}
                          <div className="w-full h-full bg-[#00fe40]/30 rounded"></div>
                        </div>
                        <div className="flex flex-col flex-1">
                          <span className="text-[10px] text-[#00fe40] font-mono tracking-wider mb-1 uppercase opacity-70 group-hover:opacity-100">
                            {item.tag}
                          </span>
                          <h3 className="text-md font-bold text-zinc-100 group-hover:text-[#00fe40] transition">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description & Proficiency Bar Row */}
                      <div className="flex flex-col gap-5 relative z-10">
                        <p className="text-zinc-dim text-xs leading-relaxed min-h-20">
                          {item.desc}
                        </p>

                        {/* Custom Proficiency Bar */}
                        <div className="flex items-center gap-3">
                          <div className="w-full h-1 bg-dark-accent rounded-full relative">
                            <div
                              className="absolute left-0 top-0 h-full bg-[#00fe40] rounded-full shadow-lg group-hover:brightness-110"
                              style={{ width: `${item.level}%` }}
                            ></div>
                          </div>
                          <span className="text-[10px] text-zinc-dim w-8 text-right">
                            {item.level}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </section>
      </main>

      {/* 4. Footer (Same as Home, keeps the layout continuous) */}
    </div>
  );
}
