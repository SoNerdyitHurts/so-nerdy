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
      {/* energized system surface */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* base surface: cool, alive, not black void */}
        <div className="absolute inset-0 bg-[#070b12]" />

        {/* energy bleed */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: `
              radial-gradient(circle at 14% 18%, rgba(0,255,156,0.10), transparent 0 24%),
              radial-gradient(circle at 82% 16%, rgba(255,46,136,0.11), transparent 0 22%),
              radial-gradient(circle at 65% 70%, rgba(0,229,255,0.10), transparent 0 20%),
              radial-gradient(circle at 18% 82%, rgba(157,78,221,0.10), transparent 0 18%)
            `,
          }}
        />

        {/* subtle horizontal system bands */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
            backgroundSize: "100% 24px",
          }}
        />

        {/* faint vertical segmentation, not a neat grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "72px 100%",
          }}
        />

        {/* signal haze */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,255,156,0.02) 0%, rgba(0,0,0,0) 28%, rgba(255,46,136,0.02) 62%, rgba(0,229,255,0.03) 100%)",
          }}
        />

        {/* edge falloff */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 42%, rgba(4,6,10,0.26) 72%, rgba(2,3,5,0.52) 100%)",
          }}
        />
      </div>

      {/* persistent environment warning */}
      <div className="mb-6 inline-block border border-[#ff2e88]/35 bg-[#ff2e88]/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#ff93c3] shadow-[0_0_24px_rgba(255,46,136,0.08)]">
        ⚠ live environment — changes happening without warning
      </div>

      {/* floating system notes */}
      <div className="pointer-events-none absolute right-6 top-28 border border-[#00e5ff]/20 bg-[#0c121b]/90 px-3 py-2 text-xs text-[#9fdff1] shadow-[0_0_20px_rgba(0,229,255,0.06)]">
        check this later
      </div>

      <div className="pointer-events-none absolute left-6 top-[35rem] border border-[#00ff9c]/20 bg-[#0b1415]/90 px-3 py-2 text-xs text-[#a5f4d0] shadow-[0_0_20px_rgba(0,255,156,0.06)]">
        this broke something else
      </div>

      <section className="mx-auto max-w-7xl border border-white/10 bg-[#0b1017]/82 backdrop-blur-[1px]">
        <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="border-b border-white/10 p-6 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs uppercase tracking-[0.36em] text-[#8bb7c7]">
              The Lab
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Active experiments.
              <span className="mt-1 block text-[#b6c6d1]">Results may vary.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#c5d0d8]">
              This is what I’m actively working on. Current builds, weird
              behavior, working notes, and the environment this stuff actually
              gets tested in.
            </p>

            <div className="mt-7 border-l-2 border-[#00e5ff] pl-4 text-sm text-[#97d7e9]">
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
                  className={`border px-4 py-3 text-sm ${
                    index === 0
                      ? "border-[#00ff9c]/20 bg-[#09130f]/88 text-[#c7f8df]"
                      : index === 1
                        ? "border-[#ff2e88]/20 bg-[#150a11]/88 text-[#ffd0e5]"
                        : "border-[#00e5ff]/20 bg-[#091118]/88 text-[#caeef7]"
                  }`}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8bb7c7]">
              Notes while I’m working
            </p>

            <div className="mt-5 space-y-4 text-sm leading-7 text-[#c5d0d8]">
              <p>
                This page is a snapshot of what I’m actively working on, not a
                polished representation of it.
              </p>

              <p>
                The goal is that it feels like you’re ruffling through my notes
                and poking at the experiments instead of looking at a finished
                display.
              </p>

              <div className="mt-6 space-y-3 border border-[#00e5ff]/14 bg-[#0a1218]/90 p-4 text-[#9fb2c0]">
                {benchNotes.map((note) => (
                  <div key={note}>{note}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-5 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="border border-white/10 bg-[#0b1017]/82 p-5 backdrop-blur-[1px]">
          <div className="mb-6 border border-[#00ff9c]/14 bg-[#09130f]/88 p-4 text-xs text-[#9fd2ba]">
            <div className="mb-2 uppercase tracking-[0.25em] text-[#72a289]">
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
              <p className="text-xs uppercase tracking-[0.3em] text-[#8bb7c7]">
                Current Projects
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                Things currently being messed with
              </h2>
            </div>

            <div className="border border-[#ff2e88]/30 bg-[#ff2e88]/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#ff8fbe] shadow-[0_0_20px_rgba(255,46,136,0.08)]">
              live
            </div>
          </div>

          <div className="space-y-4">
            {activeProjects.map((project, index) => (
              <div
                key={project.name}
                className={`border p-5 transition ${
                  index === 0
                    ? "border-[#00ff9c]/16 bg-[#09130f]/88 hover:border-[#00ff9c]/30 hover:bg-[#0b1712]"
                    : index === 1
                      ? "border-[#ff2e88]/16 bg-[#140a11]/88 hover:border-[#ff2e88]/30 hover:bg-[#170b13]"
                      : "border-[#00e5ff]/16 bg-[#091118]/88 hover:border-[#00e5ff]/30 hover:bg-[#0b141b]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c1ccd4]">
                      {project.note}
                    </p>

                    <div className="mt-4 text-xs italic text-[#7e98a8]">
                      {project.comment}
                    </div>
                  </div>

                  <span className="border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-[#d6e0e8]">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="border border-[#ff2e88]/28 bg-[rgba(32,8,20,0.76)] p-5 backdrop-blur-[1px] shadow-[0_0_30px_rgba(255,46,136,0.05)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#ffb1d3]">
              Broken Right Now
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              This was working earlier.
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-[#f2d8e4]">
              {brokenRightNow.map((item) => (
                <li
                  key={item}
                  className="border border-[#ff2e88]/18 bg-[#190b13]/70 p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-white/10 bg-[#0b1017]/82 p-5 backdrop-blur-[1px]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8bb7c7]">
              Current state of things
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              What’s going on right now
            </h2>

            <div className="mt-5 space-y-3 text-sm text-[#c1ccd4]">
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

      <section className="mx-auto mt-8 max-w-7xl border border-white/10 bg-[#0b1017]/82 p-6 md:p-8 backdrop-blur-[1px]">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8bb7c7]">
            Testing Ground
          </p>

          <h2 className="mt-2 text-3xl font-semibold">Current environment</h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#c1ccd4]">
            Not a full spec dump. Just the parts that actually matter to how
            this stuff gets built, tested, and occasionally abused.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testingGround.map((item, index) => (
            <div
              key={item.label}
              className={`border p-5 ${
                index % 3 === 0
                  ? "border-[#00ff9c]/14 bg-[#09130f]/88"
                  : index % 3 === 1
                    ? "border-[#00e5ff]/14 bg-[#091118]/88"
                    : "border-[#9d4edd]/14 bg-[#100b16]/88"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#8fa6b4]">
                {item.label}
              </p>

              <p className="mt-3 text-base font-medium text-[#edf4f7]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}