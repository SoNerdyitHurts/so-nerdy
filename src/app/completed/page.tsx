import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Completed",
};

const projects = [
  {
    href: "/completed/obsidian-meridian",
    image: "/completed/obsidian-meridian/hero.jpg",
    alt: "The Obsidian Meridian Palworld mural",
    kicker: "Palworld · Python",
    title: "The Obsidian Meridian",
    body: "A massive Palworld mural built with a Python-generated grid and a lot of painted wall pieces.",
    useImageComponent: true,
  },
  {
    href: "/completed/calendar",
    image: "/completed/calendar/hero.svg",
    alt: "Stylized preview of the Calendar Project household board",
    kicker: "React · Firebase · Household System",
    title: "Calendar Project",
    body: "A shared household command board that replaced the whiteboard: calendar, reminders, timers, meds, shifts, and status in one place.",
    useImageComponent: false,
  },
];

export default function CompletedPage() {
  return (
    <main className="min-h-screen bg-[#08111f] px-4 py-8 text-[#eef7f8] md:px-6 md:py-10">
      <section className="mx-auto max-w-7xl overflow-hidden border border-white/10 bg-[#10192d] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(214,165,80,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(0,109,111,0.22),transparent_38%),linear-gradient(135deg,#111a34,#0b1324)] p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-[#D6A550]">
            Completed
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Stuff that survived.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c7d7dc]">
            Finished enough to count. These are the projects that made it out of the lab and earned a cleaner project page.
          </p>
        </div>

        <div className="grid gap-6 p-6 md:grid-cols-2 md:p-10">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group overflow-hidden border border-white/10 bg-[#0c1426] transition duration-300 hover:-translate-y-1 hover:border-[#D6A550]/70 hover:bg-[#111b31]"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                {project.useImageComponent ? (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              <div className="p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D6A550]">
                  {project.kicker}
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-[#b9c9cf]">
                  {project.body}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
