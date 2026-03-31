export const metadata = {
  title: "Lab",
};

const activeProjects = [
  {
    name: "AI Co-Pilot",
    status: "Being pushed until it breaks",
    note: "Trying to make natural language actually control things without it getting weird.",
  },
  {
    name: "Household Board / Calendar",
    status: "Fighting the UI",
    note: "Making edit states make sense and not feel like a different system every time.",
  },
  {
    name: "This Site",
    status: "Built in public",
    note: "No hiding the mess. This is the process, not just the result.",
  },
];

const brokenRightNow = [
  "Some pages look finished until you actually click into them.",
  "The visual system is still arguing with itself.",
  "There are decisions in here I will probably undo later.",
];

const testingGround = [
  { label: "GPU", value: "RTX 4070 Ti" },
  { label: "Display", value: "LG TV 4K HDR @ 60Hz" },
  { label: "Audio", value: "Shure SM7B + Cloudlifter + GoXLR" },
  { label: "Control", value: "Stream Deck + local tool workflows" },
  { label: "Use Case", value: "Automation, UI testing, voice testing, and general tinkering" },
  { label: "Philosophy", value: "Stability > pretending everything works" },
];

const labNotes = [
  "If something is broken, it’s because I touched it.",
  "This is not staged. This is just where it’s at.",
  "The goal is better, not finished.",
];

export default function LabPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-[#EAEAF0]">
      <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(122,92,255,0.18),_transparent_35%),radial-gradient(circle_at_right,_rgba(255,46,136,0.14),_transparent_30%),linear-gradient(to_bottom,_#111118,_#0B0B0F)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#9A9AB0]">
            The Lab
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Active experiments.
            <span className="block text-[#9A9AB0]">Results may vary.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[#B7B7C9] md:text-xl">
            This is the active zone. Current builds, unstable ideas, testing ground details,
            and whatever I am actively messing with right now.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {labNotes.map((note) => (
              <span
                key={note}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#CFCFE0]"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-[#1A1A24] bg-[#111118] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#9A9AB0]">
                Current Projects
              </p>
              <h2 className="mt-2 text-2xl font-semibold">Actively in motion</h2>
            </div>
            <div className="rounded-full border border-[#FF2E88]/30 bg-[#FF2E88]/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#FF77B3]">
              Live
            </div>
          </div>

          <div className="space-y-4">
            {activeProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl border border-white/8 bg-[#0D0D13] p-5 transition hover:border-[#7A5CFF]/40 hover:bg-[#12121A]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-[#A9A9BC]">
                      {project.note}
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#D7D7E6]">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-[#1A1A24] bg-[#111118] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9A9AB0]">
              Broken Right Now
            </p>
            <h2 className="mt-2 text-2xl font-semibold">This was working earlier.</h2>

            <ul className="mt-5 space-y-3 text-sm text-[#B6B6C7]">
              {brokenRightNow.map((item) => (
                <li key={item} className="rounded-2xl border border-[#FF8A00]/20 bg-[#FF8A00]/5 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#1A1A24] bg-[#111118] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9A9AB0]">
              Lab Mood
            </p>
            <h2 className="mt-2 text-2xl font-semibold">The testing ground</h2>
            <p className="mt-3 text-sm text-[#A9A9BC]">
              This is the environment a lot of the chaos gets tested in.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 md:px-8">
        <div className="rounded-3xl border border-[#1A1A24] bg-[#111118] p-6 md:p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9A9AB0]">
              Testing Ground
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Current environment</h2>
            <p className="mt-3 max-w-3xl text-sm text-[#A9A9BC]">
              Not a full spec dump. Just the parts that actually matter to how this stuff gets built,
              tested, and occasionally abused.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {testingGround.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/8 bg-[#0D0D13] p-5"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#8F8FA6]">
                  {item.label}
                </p>
                <p className="mt-3 text-base font-medium text-[#ECECF4]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}