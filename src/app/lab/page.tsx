export const metadata = {
  title: "Lab",
};

const activeProjects = [
  {
    name: "AI Co-Pilot",
    status: "being pushed until it breaks",
    note: "Trying to make natural language control real without it getting weird.",
  },
  {
    name: "Household Board / Calendar",
    status: "fighting the UI",
    note: "Making edit states make sense and not feel like a different system every time.",
  },
  {
    name: "This Site",
    status: "built in public",
    note: "No hiding the mess. The site itself is one of the experiments.",
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

export default function LabPage() {
  return (
    <main className="px-4 py-8 md:px-6 md:py-10">
      <section className="mx-auto max-w-7xl border border-white/10 bg-[#171A1F]/95">
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
              {labNotes.map((note, index) => (
                <div
                  key={note}
                  className={`border border-white/10 bg-[#12161A] px-4 py-3 text-sm text-[#D5DBE6] ${
                    index === 1 ? "rotate-[0.45deg]" : "rotate-[-0.35deg]"
                  }`}
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
              <div className="mt-6 space-y-3 border border-white/10 bg-[#13171B] p-4 text-[#98A0B0]">
                {benchNotes.map((note) => (
                  <div key={note}>{note}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-5 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="border border-white/10 bg-[#171A1F] p-5 rotate-[-0.18deg]">
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
            {activeProjects.map((project, index) => (
              <div
                key={project.name}
                className={`border border-white/10 bg-[#12161A] p-5 transition hover:border-[#7A5CFF]/40 hover:bg-[#171C21] ${
                  index % 2 === 0 ? "rotate-[0.12deg]" : "rotate-[-0.12deg]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#B3BBCB]">
                      {project.note}
                    </p>
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
          <div className="border border-white/10 bg-[#171A1F] p-5 rotate-[0.18deg]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#96A0B3]">
              Broken Right Now
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              This was working earlier.
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-[#B8BFCD]">
              {brokenRightNow.map((item) => (
                <li
                  key={item}
                  className="border border-[#FF8A00]/25 bg-[#FF8A00]/6 p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 bg-[#171A1F] p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#96A0B3]">
              Current state of things
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              What’s going on right now
            </h2>

            <div className="mt-5 space-y-3 text-sm text-[#B3BBCB]">
              <div>still pushing toward “messy workbench” instead of “clean website”</div>
              <div>needs more notes, more artifacts, less polish</div>
              <div>invites poking around more than it currently invites reading</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-7xl border border-white/10 bg-[#171A1F] p-6 md:p-8">
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
          {testingGround.map((item, index) => (
            <div
              key={item.label}
              className={`border border-white/10 bg-[#12161A] p-5 ${
                index % 2 === 0 ? "rotate-[0.1deg]" : "rotate-[-0.1deg]"
              }`}
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