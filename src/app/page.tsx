import Link from "next/link";

const entryPoints = [
  {
    href: "/lab",
    title: "The Lab",
    note: "Active work, strange behavior, and things currently being messed with.",
    status: "open on the bench",
  },
  {
    href: "/completed",
    title: "Completed",
    note: "Stuff that works well enough to count as finished.",
    status: "mostly stable",
  },
  {
    href: "/graveyard",
    title: "Graveyard",
    note: "Ideas, experiments, and side paths that died somewhere in the process.",
    status: "buried but not forgotten",
  },
  {
    href: "/this-site",
    title: "This Site",
    note: "The site itself is one of the projects. It stays messy on purpose.",
    status: "actively mutating",
  },
];

const deskNotes = [
  "If something is broken, I probably touched it.",
  "This is a snapshot, not a polished representation.",
  "There is absolutely a wire somewhere you can trip over.",
];

export default function Home() {
  return (
    <main className="px-4 py-8 md:px-6 md:py-10">
      <section className="mx-auto max-w-7xl border border-white/10 bg-[#171A1F]/92">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs uppercase tracking-[0.36em] text-[#96A0B3]">
              Home
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              The lab is always running.
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-[#B6BCC9] md:text-xl">
              Stability not guaranteed.
            </p>

            <div className="mt-8 border-l-2 border-[#7A5CFF] pl-4 text-sm text-[#9DA5B5]">
              current state: live
              <br />
              last touched: recently
              <br />
              risk level: acceptable
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {deskNotes.map((note) => (
                <div
                  key={note}
                  className="rotate-[-0.35deg] border border-[#00E5FF]/20 bg-[#12161A] px-4 py-3 text-sm text-[#CCD3DF]"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#96A0B3]">
              What this is
            </p>
            <div className="mt-4 space-y-4 text-sm leading-7 text-[#B6BCC9]">
              <p>
                A public project tracker, lab notebook, and workbench for the
                things I build, test, break, revisit, and occasionally abandon.
              </p>
              <p>
                It is supposed to feel in-progress. If something feels a little
                unstable, that is probably accurate.
              </p>
              <p className="text-[#8E94A3]">
                You are not looking at a polished portfolio. You are poking
                around in the room where the work is happening.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#96A0B3]">
              Open Areas
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Poke around</h2>
          </div>
          <div className="text-right text-[11px] uppercase tracking-[0.24em] text-[#8E94A3]">
            build in public
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {entryPoints.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block border border-white/10 bg-[#171A1F] p-5 transition hover:border-[#7A5CFF]/40 hover:bg-[#1A1E24] ${
                index % 2 === 0 ? "rotate-[-0.18deg]" : "rotate-[0.18deg]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#B6BCC9]">
                    {item.note}
                  </p>
                </div>
                <span className="border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-[#C6CDDA]">
                  {item.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}