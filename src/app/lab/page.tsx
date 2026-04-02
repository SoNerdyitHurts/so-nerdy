export const metadata = {
  title: "Lab",
};

const activeProjects = [
  {
    name: "AI Co-Pilot",
    status: "being pushed until it breaks",
    note: "Trying to make natural language control real without it getting weird.",
    comment: "// this keeps getting smarter and weirder at the same time",
  },
  {
    name: "Household Board / Calendar",
    status: "fighting the UI",
    note: "Making edit states make sense and not feel like a different system every time.",
    comment: "// this one keeps pretending it is done when it is not",
  },
  {
    name: "This Site",
    status: "built in public",
    note: "No hiding the mess. The site itself is one of the experiments.",
    comment: "// still too clean, still not chaotic enough",
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
  {
    label: "Use Case",
    value: "Automation, UI testing, voice testing, and general tinkering",
  },
  {
    label: "Philosophy",
    value: "Stability > pretending everything works",
  },
];

const labNotes = [
  "This worked before I changed something.",
  "Still deciding if this is a feature or a mistake.",
  "Behavior may vary depending on what I broke.",
];

const benchNotes = [
  "// adjusted this twice already",
  "// not convinced this layout stays",
  "// might scrap this section later",
];

const recentActivity = [
  "[just now] touched layout again",
  "[2m ago] broke something in edit flow",
  "[5m ago] reverted a change that made sense earlier",
  "[??] something still feels off",
];

export default function LabPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 md:px-6 md:py-10">
      {/* hybrid surface background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* base surface */}
        <div className="absolute inset-0 bg-[#171b20]" />

        {/* softened grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* irregular lighting so it stops feeling perfectly digital */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(circle at 18% 22%, rgba(65, 78, 97, 0.22), transparent 0 26%),
              radial-gradient(circle at 76% 16%, rgba(35, 79, 96, 0.16), transparent 0 22%),
              radial-gradient(circle at 64% 68%, rgba(68, 51, 34, 0.10), transparent 0 24%),
              radial-gradient(circle at 12% 82%, rgba(95, 58, 36, 0.08), transparent 0 18%)
            `,
          }}
        />

        {/* subtle grain / paper-ish surface */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              radial-gradient(rgba(255,255,255,0.9) 0.6px, transparent 0.8px),
              radial-gradient(rgba(255,255,255,0.35) 0.5px, transparent 0.7px)
            `,
            backgroundSize: "7px 7px, 11px 11px",
            backgroundPosition: "0 0, 3px 4px",
            mixBlendMode: "soft-light",
          }}
        />

        {/* vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 38%, rgba(7,9,12,0.28) 72%, rgba(4,5,7,0.55) 100%)",
          }}
        />
      </div>

      <div className="mb-6 border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#FFB067]">
        ⚠ live environment — changes happening without warning
      </div>

      <div className="pointer-events-none absolute right-6 top-28 border border-white/10 bg-[#20262D]/90 px-3 py-2 text-xs text-[#9AA3B5] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        check this later
      </div>

      <div className="pointer-events-none absolute left-6 top-[35rem] border border-white/10 bg-[#20262D]/90 px-3 py-2 text-xs text-[#9AA3B5] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        this broke something else
      </div>

      <section className="mx-auto max-w-7xl border border-white/10 bg-[#1D2229]/90 backdrop-blur-[1px]">
        <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs uppercase tracking-[0.36em] text-[#96A0B3]">
              The Lab
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Active experiments.
              <span className="mt-1 block text-[#AAB2C2]">Results may vary.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#B8BFCD]">
              This is what I’m actively working on. Current builds, weird
              behavior, working notes, and the environment this stuff actually
              gets tested in.
            </p>

            <div className="mt-7 border-l-2 border-[#00E5FF] pl-4 text-sm text-[#9EA7B8]">
              last touched: just now
              <br />
              state: active
              <br />
              stability: questionable
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {labNotes.map((note) => (
                <div
                  key={note}
                  className="border border-white/10 bg-[#151A1F]/95 px-4 py-3 text-sm text-[#D5DBE6]"
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#96A0B3]">
              Notes while I’m working
            </p>

            <div className="mt-5 space-y-4 text-sm leading-7 text-[#B8BFCD]">
              <p>
                This page is a snapshot of what I’m actively working on, not a
                polished representation of it.
              </p>

              <p>
                The goal is that it feels like you’re ruffling through my notes
                and poking at the experiments instead of looking at a finished
                display.
              </p>

              <div className="mt-6 space-y-3 border border-white/10 bg-[#151A1F]/95 p-4 text-[#98A0B0]">
                {benchNotes.map((note) => (
                  <div key={note}>{note}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-5 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="border border-white/10 bg-[#1D2229]/90 p-5 backdrop-blur-[1px]">
          <div className="mb-6 border border-white/10 bg-[#151A1F]/95 p-4 text-xs text-[#9AA3B5]">
            <div className="mb-2 uppercase tracking-[0.25em] text-[#6F7686]">
              recent activity
            </div>

            <div className="space-y-1 font-mono">
              {recentActivity.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#96A0B3]">
                Current Projects
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Things currently being messed with
              </h2>
            </div>

            <div className="border border-[#FF2E88]/30 bg-[#FF2E88]/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#FF83BC]">
              live
            </div>
          </div>

          <div className="space-y-4">
            {activeProjects.map((project) => (
              <div
                key={project.name}
                className="border border-white/10 bg-[#151A1F]/95 p-5 transition hover:border-[#7A5CFF]/40 hover:bg-[#181E24]"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#B3BBCB]">
                      {project.note}
                    </p>

                    <div className="mt-4 text-xs italic text-[#7E8698]">
                      {project.comment}
                    </div>
                  </div>

                  <span className="border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-[#CCD3E0]">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="border border-[#FF2E88]/30 bg-[rgba(72,12,36,0.55)] p-5 backdrop-blur-[1px]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#FFB0D1]">
              Broken Right Now
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              This was working earlier.
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-[#F0D7E2]">
              {brokenRightNow.map((item) => (
                <li
                  key={item}
                  className="border border-[#FF8A00]/25 bg-[#FF8A00]/10 p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 bg-[#1D2229]/90 p-5 backdrop-blur-[1px]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#96A0B3]">
              Current state of things
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              What’s going on right now
            </h2>

            <div className="mt-5 space-y-3 text-sm text-[#B3BBCB]">
              <div>
                still pushing toward “messy workbench” instead of “clean website”
              </div>
              <div>needs more notes, more artifacts, less polish</div>
              <div>
                invites poking around more than it currently invites reading
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl border border-white/10 bg-[#1D2229]/90 p-6 md:p-8 backdrop-blur-[1px]">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#96A0B3]">
            Testing Ground
          </p>

          <h2 className="mt-2 text-3xl font-semibold">Current environment</h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#B3BBCB]">
            Not a full spec dump. Just the parts that actually matter to how
            this stuff gets built, tested, and occasionally abused.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testingGround.map((item) => (
            <div
              key={item.label}
              className="border border-white/10 bg-[#151A1F]/95 p-5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#8F98AA]">
                {item.label}
              </p>

              <p className="mt-3 text-base font-medium text-[#ECEFF4]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}