import Link from "next/link";
export default function Home() {
  return (
    // Outer Container: Yahan par primary dark background hai poori screen ke liye.
    // background: '#10141a' and soft radial glows applied to the entire viewport.
    <div className="flex flex-col flex-1 items-center justify-start min-h-screen bg-[#10141a] bg-radial-gradient-core font-mono text-zinc-100 dark:bg-[#10141a]">
      {/* Header (Simplified based on image) */}

      {/* Main Content Area */}
      <main className="flex flex-col flex-1 w-full max-w-350 px-12 py-20 bg-transparent scroll-y-auto">
        {/* Top Accent/Text */}
        <div className="flex items-center gap-4 text-xs text-core-green/70 uppercase mb-8">
          <span className="flex flex-wrap items-center ">
            {" "}
            {"//"} STATUS: ACTIVE
          </span>
          <span className="w-full h-1 bg-core-green/20"></span>
        </div>

        {/* Hero Section */}
        <section className="flex flex-row items-center justify-between gap-16 mb-24">
          <div className="flex-col max-w-[50%]">
            <h1 className="text-[52px] font-bold leading-[1.1] mb-6 tracking-tight">
              Aspiring Dev.
              <br />
              <span className="text-core-green">Security Student.</span>
              <br />
              Tech Explorer.
            </h1>
            <p className="text-[#a0afba] text-sm leading-relaxed mb-12 max-w-[90%]">
              Building, Learning, and Securing. I'm a passionate student diving
              deep into web development and cybersecurity, turning curiosity
              into functional code and defensive strategies.
            </p>
            <div className="flex gap-4">
              <Link
                href="/projects"
                className="px-6 py-2.5 bg-[#00ff44] text-background font-semibold rounded-md text-xs uppercase hover:brightness-110 transition"
              >
                View Projects
              </Link>
              <Link href="https://blog.codedloki.is-a.dev">
                <button className="px-6 py-2.5 bg-transparent border border-[#00ff44] text-[#00ff44] rounded-md text-xs uppercase hover:bg-core-green/10 transition">
                  Read the Blog
                </button>
              </Link>
            </div>
          </div>

          {/* Cyber GFX Placeholder */}
          <div className="w-[45%] h-100 relative border border-[#2d3a3d] rounded-xl flex items-center justify-center">
            {/* ... Complex SVG/CANVAS GFX pattern would go here ... */}
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="url(#paint0_radial)"
                fillOpacity="0.1"
              />

              <path
                d="M200 50L330 125V275L200 350L70 275V125L200 50Z"
                stroke="#00ff44"
                strokeWidth="1"
                strokeDasharray="10 5"
                opacity="0.3"
              />

              <circle
                cx="200"
                cy="200"
                r="80"
                stroke="#00ff44"
                strokeWidth="2"
                opacity="0.8"
              />
              <circle
                cx="200"
                cy="200"
                r="90"
                stroke="#00ff44"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />

              <path
                d="M200 120V100M200 300V280M280 200H300M100 200H120"
                stroke="#00ff44"
                strokeWidth="2"
              />

              <path
                d="M200 160L235 180V220L200 240L165 220V180L200 160Z"
                fill="#00ff44"
                fillOpacity="0.2"
                stroke="#00ff44"
                strokeWidth="2"
              />

              <line
                x1="200"
                y1="50"
                x2="200"
                y2="100"
                stroke="#00ff44"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="330"
                y1="125"
                x2="280"
                y2="160"
                stroke="#00ff44"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="70"
                y1="125"
                x2="120"
                y2="160"
                stroke="#00ff44"
                strokeWidth="1"
                opacity="0.5"
              />

              <defs>
                <radialGradient
                  id="paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(200 200) rotate(90) scale(150)"
                >
                  <stop stopColor="#00ff44" />
                  <stop offset="1" stopColor="#00ff44" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <div className="text-core-green/50 text-[10px] uppercase font-bold px-4 py-2 border border-core-green/30 rounded absolute bottom-6 text-[#00ff44] left-6">
              SYSTEM: CYBER_LAB
            </div>
          </div>
        </section>

        {/* Attribute List */}
        <div className="flex gap-20 text-sm text-[#a0afba] mb-12 border-b border-[#2d3a3d] pb-8">
          <div>
            <div className="text-[#58667a]">Path</div>
            <div className="text-[#dcdfe7]">Self-Taught</div>
          </div>
          <div>
            <div className="text-[#58667a]">COMMUNITY</div>
            <div className="text-[#dcdfe7]">Open Source</div>
          </div>
          <div>
            <div className="text-[#58667a]">Testing</div>
            <div className="text-[#dcdfe7]">Lab Enthusiast</div>
          </div>
        </div>

        {/* Feature Cards Section (Matching image cards exactly) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              tag: "WEB_APPLICATIONS",
              title: "Frontend Exploration",
              desc: "Learning the ways of modern web development with React and Tailwind CSS to make responsive and attractive user experiences.",
            },
            {
              tag: "OFFENSIVE_SECURITY",
              title: "Security Labs",
              desc: "Practicing penetration testing basics and network security methodologies in safe, controlled environments and CTF challenges.",
            },
            {
              tag: "BACKEND_SYSTEMS",
              title: "Backend & APIs",
              desc: "Learning core server-side logic and database management to understand how data flows through the entire stack.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-soft-green p-8 rounded-lg border border-[#00ff44]  shadow-2xl"
            >
              <span className="text-xs text-[#00ff44] uppercase font-mono tracking-wider">
                {card.tag}
              </span>
              <h3 className="text-lg font-bold mt-3 mb-5 text-zinc-100">
                {card.title}
              </h3>
              <p className="text-[#a0afba] text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer (Simplified based on image) */}
    </div>
  );
}
