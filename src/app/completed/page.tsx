import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Completed",
};

const completedProjects = [
  {
    href: "/completed/obsidian-meridian",
    eyebrow: "Palworld · Python",
    title: "The Obsidian Meridian",
    description: "A giant Palworld mural built from a Python-generated grid.",
    kind: "image" as const,
    image: "/completed/obsidian-meridian/hero.jpg",
    alt: "The Obsidian Meridian Palworld mural",
  },
  {
    href: "/completed/calendar",
    eyebrow: "React · Firebase · Household System",
    title: "Calendar Project",
    description:
      "A shared household board that replaced a whiteboard with calendar, timers, meds, shifts, and live state.",
    kind: "board" as const,
  },
];

export default function CompletedPage() {
  return (
    <main className="px-4 py-8 md:px-6 md:py-10">
      <section className="mx-auto max-w-7xl border border-white/10 bg-[#171A1F] p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#96A0B3]">
          Completed
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Stuff that survived.
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#B8BFCD]">
          Finished enough to count. These are the projects that made it out of
          the lab, the graveyard, or the weird middle place where everything is
          still fighting back.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {completedProjects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group relative min-h-[260px] overflow-hidden border border-white/10 bg-black transition hover:-translate-y-1 hover:border-white/25"
            >
              {project.kind === "image" ? (
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 bg-[#dfe8f2] text-[#10161d]">
                  <div
                    className="absolute inset-0 opacity-100"
                    style={{
                      background: `
                        radial-gradient(circle at 18% 18%, rgba(0,229,255,0.18), transparent 0 25%),
                        radial-gradient(circle at 82% 18%, rgba(255,46,136,0.14), transparent 0 22%),
                        radial-gradient(circle at 28% 78%, rgba(116,255,179,0.12), transparent 0 24%)
                      `,
                    }}
                  />

                  <div className="absolute inset-6 grid grid-cols-[1.25fr_0.75fr] gap-3">
                    <div className="rounded-sm border border-[#142235]/20 bg-white/70 p-3 shadow-[8px_8px_0_rgba(20,34,53,0.10)]">
                      <div className="mb-3 flex items-center justify-between border-b border-[#142235]/10 pb-2 text-xs uppercase tracking-[0.18em] text-[#35506a]">
                        <span>Calendar</span>
                        <span>Today</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-[#64748b]">
                        {Array.from({ length: 35 }).map((_, index) => (
                          <div
                            key={index}
                            className={`aspect-square rounded-sm border border-[#142235]/10 bg-white/60 ${
                              index === 17
                                ? "bg-[#eefbff] ring-2 ring-[#00e5ff]"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-sm border border-[#ff2e88]/25 bg-[#fff2f8]/85 p-3 shadow-[6px_6px_0_rgba(255,46,136,0.08)]">
                        <div className="text-xs uppercase tracking-[0.18em] text-[#ad245f]">
                          PERSON 1
                        </div>
                        <div className="mt-3 h-2 w-3/4 rounded bg-[#ff2e88]/35" />
                        <div className="mt-2 h-2 w-1/2 rounded bg-[#142235]/18" />
                      </div>

                      <div className="rounded-sm border border-[#00e5ff]/35 bg-[#eefbff]/90 p-3 shadow-[6px_6px_0_rgba(0,229,255,0.10)]">
                        <div className="text-xs uppercase tracking-[0.18em] text-[#2f6f86]">
                          PERSON 2
                        </div>
                        <div className="mt-3 h-2 w-2/3 rounded bg-[#00e5ff]/35" />
                        <div className="mt-2 h-2 w-1/2 rounded bg-[#142235]/18" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#E1A84A]">
                  {project.eyebrow}
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-white">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-[#C9D0DD]">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
