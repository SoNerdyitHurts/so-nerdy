import Link from "next/link";

export const metadata = {
  title: "Calendar Project",
};

const artifacts = [
  {
    title: "V1",
    note: "rough working board",
    href: "/completed/calendar/v1",
    label: "playable artifact",
    body: "The version that made the idea real. It was packed, rough, and doing too many jobs at once, but it proved the whiteboard replacement could work.",
    className:
      "rotate-[-0.5deg] border-[#142235]/20 bg-white/75 text-[#334155] hover:border-[#ff2e88] hover:bg-[#fff2f8]",
  },
  {
    title: "abandoned bridge",
    note: "wrong foundation",
    href: "#abandoned-bridge",
    label: "not playable",
    body: "The terrible middle attempt. Mostly backend and foundation work, not a clean product version. It was dumped instead of preserved as V1.5.",
    className:
      "rotate-[0.65deg] border-[#ff2e88]/35 bg-[#fff2f8]/85 text-[#6e314c] hover:border-[#ff2e88] hover:bg-[#ffe6f1]",
  },
  {
    title: "V2",
    note: "finished board",
    href: "#v2-finished",
    label: "final system",
    body: "The completed household appliance: calendar, reminders, timers, meds, shifts, live updates, phone inputs, and display behavior working together.",
    className:
      "rotate-[-0.2deg] border-[#00e5ff]/45 bg-[#eefbff]/90 text-[#245064] hover:border-[#00e5ff] hover:bg-[#ddf8ff]",
  },
];

const calendarDecisions = [
  {
    title: "decision 01",
    tag: "whiteboard replacement",
    body: "The goal was never just to make a nicer calendar view. The calendar had to replace the whiteboard job: one visible place where the house could understand the day without opening another app.",
    className:
      "rotate-[-0.35deg] border-[#142235]/15 bg-white/65 text-[#334155]",
  },
  {
    title: "decision 02",
    tag: "events had to be real",
    body: "Events and reminders could not stay as loose text forever. They needed real structure because the board had to save, edit, remind, and stay consistent across devices.",
    className:
      "rotate-[0.4deg] border-[#00e5ff]/35 bg-[#eefbff]/80 text-[#245064]",
  },
  {
    title: "decision 03",
    tag: "status belongs beside the calendar",
    body: "Timers, meds, and shifts were not side decorations. They were part of the reason this needed to exist at all: the calendar shows the schedule, but the board shows the household state.",
    className:
      "rotate-[0.25deg] border-[#ff2e88]/30 bg-[#fff2f8]/80 text-[#6e314c]",
  },
  {
    title: "decision 04",
    tag: "the display gets a vote",
    body: "The board had to work where it actually lived. Desktop previews were not enough. The iPad, the wall display, date rollover, and real household use all became part of the test.",
    className:
      "rotate-[-0.2deg] border-[#142235]/15 bg-white/70 text-[#334155]",
  },
];

const v2Solved = [
  "structured calendar days instead of loose display text",
  "real reminders instead of visual-only dates",
  "status cards that belong beside the calendar",
  "phone-triggered break, lunch, and meds updates",
  "shared display behavior that works without babysitting",
];

const bridgeLessons = [
  "the board needed live state, not just a prettier screen",
  "backend shape matters once the board becomes an appliance",
  "the bridge was mostly foundation work, so faking it as a playable version would be dishonest",
  "skipping straight to V2 was cleaner than dragging the bad middle forward",
];

export default function CalendarProjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#dfe8f2] text-[#10161d]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#dfe8f2]" />
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: `
              radial-gradient(circle at 14% 12%, rgba(0,229,255,0.12), transparent 0 24%),
              radial-gradient(circle at 84% 10%, rgba(255,46,136,0.10), transparent 0 20%),
              radial-gradient(circle at 18% 72%, rgba(116,255,179,0.10), transparent 0 20%),
              radial-gradient(circle at 72% 64%, rgba(130,97,255,0.08), transparent 0 18%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(15,23,42,0.9) 1px, transparent 1px)",
            backgroundSize: "100% 26px",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.85) 1px, transparent 1px)",
            backgroundSize: "84px 100%",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pb-24 pt-10 md:px-8 lg:px-12">
        <Link
          href="/completed"
          className="inline-block border border-[#142235]/15 bg-white/65 px-4 py-3 text-sm leading-6 text-[#334155] transition hover:border-[#00e5ff]/45 hover:bg-[#eefbff] hover:text-[#16445c]"
        >
          ← back to completed projects
        </Link>

        <div className="mt-10 inline-block border border-[#00e5ff]/35 bg-[#eefbff]/80 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#2f6f86]">
          completed project · household board
        </div>

        <section className="mt-10 max-w-[780px]">
          <div className="text-[12px] uppercase tracking-[0.3em] text-[#35506a]">
            calendar project
          </div>

          <h1 className="mt-4 text-5xl font-semibold leading-[0.95] md:text-7xl">
            This is not a
            <br />
            calendar app
          </h1>

          <div className="ml-6 mt-4 text-xl text-[#1f3347] md:text-2xl">
            it is replacing a whiteboard
          </div>

          <p className="mt-8 max-w-[720px] text-lg leading-10 text-[#26384a]">
            That assumption changed the whole project. A calendar can be a view.
            A household board has to be useful from across the room, accept quick
            updates from phones, survive real routines, and show the state of the
            house without asking anyone to open another app.
          </p>

          <div className="mt-8 max-w-3xl border-l-4 border-[#00e5ff] bg-white/55 px-5 py-4 text-base leading-8 text-[#243447] shadow-[0_14px_35px_rgba(20,34,53,0.06)]">
            <p>
              The project path was not a clean V1 → V1.5 → V2 ladder. It was a
              rough working board, a bad backend bridge, and then the finished
              appliance.
            </p>
          </div>
        </section>

        <section className="mt-14 max-w-5xl rotate-[0.25deg] border-2 border-[#142235] bg-[#f8fbff]/85 p-5 shadow-[12px_12px_0_rgba(20,34,53,0.12)] md:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#ff2e88]">
                touch the artifacts first
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-none tracking-[-0.05em] text-[#142235] md:text-5xl">
                the honest version path
              </h2>
            </div>

            <div className="max-w-sm border border-[#00e5ff]/40 bg-[#eefbff] px-4 py-3 text-sm leading-6 text-[#16445c]">
              V1 is playable. The bridge is a failure note. V2 is the finished
              system this page is about.
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {artifacts.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group block min-h-[210px] border p-5 transition hover:-translate-y-1 ${item.className}`}
              >
                <p className="text-xs uppercase tracking-[0.24em] opacity-70">
                  {item.label}
                </p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#142235]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xl font-black tracking-[-0.04em] text-[#142235]">
                  {item.note}
                </p>
                <p className="mt-4 text-sm leading-7">{item.body}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#ff2e88]">
            calendar decisions
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.06em] text-[#142235] md:text-6xl">
            the board had to do more than hold dates
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {calendarDecisions.map((decision) => (
              <div
                key={decision.title}
                className={`border p-5 text-sm leading-7 ${decision.className}`}
              >
                <p className="font-black uppercase tracking-[0.18em] text-[#142235]">
                  {decision.title}
                </p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#64748b]">
                  {decision.tag}
                </p>
                <p className="mt-3">{decision.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rotate-[-0.25deg] border-2 border-[#00e5ff]/45 bg-[#eefbff]/85 p-6 shadow-[10px_10px_0_rgba(0,229,255,0.12)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#2f6f86]">
              project status
            </p>

            <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.06em] text-[#142235] md:text-5xl">
              the actual calendar project is done
            </h2>

            <p className="mt-5 text-base leading-8 text-[#245064]">
              The system this page is about is complete, deployed, operational,
              and being used. It handles events, reminders, timers, meds, shifts,
              live updates, and the shared display job it was built for.
            </p>
          </div>

          <div className="rotate-[0.3deg] border-2 border-[#ff2e88]/35 bg-[#fff2f8]/85 p-6 shadow-[10px_10px_0_rgba(255,46,136,0.10)]">
            <p className="text-xs uppercase tracking-[0.3em] text-[#ad245f]">
              what survived
            </p>

            <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.06em] text-[#142235] md:text-5xl">
              V1 was not wrong about the need
            </h2>

            <p className="mt-5 text-base leading-8 text-[#6e314c]">
              V1 was rough, but it proved the household wanted one visible board.
              The bad bridge was about foundation, not the usefulness of the idea.
            </p>
          </div>
        </section>

        <section className="mt-20 space-y-20">
          <div id="v1" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#35506a]">
                V1
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] text-[#142235] md:text-6xl">
                rough,
                <br />
                alive,
                <br />
                too crowded
              </h2>

              <p className="mt-6 max-w-md text-lg leading-9 text-[#26384a]">
                V1 was the first version that made the idea visible. It had the
                calendar, household status, grocery, shared board, and meal prep
                all sitting together. That was messy, but it made the board feel
                real.
              </p>

              <Link
                href="/completed/calendar/v1"
                className="mt-7 inline-block border border-[#142235] bg-white/75 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-[#142235] shadow-[6px_6px_0_rgba(20,34,53,0.12)] transition hover:-translate-y-1 hover:bg-[#fff2f8]"
              >
                open playable V1
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:pt-10">
              <div className="bg-white/70 px-5 py-4 text-lg text-[#334155] shadow-[0_8px_20px_rgba(16,22,29,0.06)]">
                worked at a glance
              </div>
              <div className="bg-[#eefbff]/85 px-5 py-4 text-lg text-[#12364e] shadow-[0_8px_20px_rgba(16,22,29,0.06)]">
                proved the whiteboard idea
              </div>
              <div className="bg-[#fff4f8]/85 px-5 py-4 text-lg text-[#5e1637] shadow-[0_8px_20px_rgba(16,22,29,0.06)]">
                too many jobs in one surface
              </div>
              <div className="bg-[#f7f1ff]/85 px-5 py-4 text-lg text-[#3b2267] shadow-[0_8px_20px_rgba(16,22,29,0.06)]">
                needed a stronger foundation
              </div>
            </div>
          </div>

          <div
            id="abandoned-bridge"
            className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8e2a57]">
                abandoned bridge
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-[0.95] text-[#761743] md:text-6xl">
                this was not a version worth pretending survived
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-9 text-[#5d2840]">
                The bridge was mostly backend and foundation work. It did not
                become a useful public-facing version of the board. It taught the
                project what the foundation needed to do, then got thrown out.
              </p>
            </div>

            <div className="space-y-4 lg:pt-8">
              {bridgeLessons.map((item, index) => (
                <div
                  key={item}
                  className={`px-5 py-4 text-lg leading-8 shadow-[0_8px_20px_rgba(16,22,29,0.06)] ${
                    index % 2 === 0
                      ? "bg-[#fff4f8] text-[#5a1735]"
                      : "ml-6 bg-[#eef8ff] text-[#12364e]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="v2-finished" className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#2f6f86]">
                V2
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] text-[#16344f] md:text-6xl">
                finished
                <br />
                household
                <br />
                appliance
              </h2>

              <p className="mt-6 max-w-md text-lg leading-9 text-[#245064]">
                V2 is where the project stopped being a crowded demo and became
                the real board: structured data, live household state, phone
                inputs, reminders, display behavior, and enough reliability to
                use every day.
              </p>
            </div>

            <div className="space-y-4 lg:pt-8">
              {v2Solved.map((item, index) => (
                <div
                  key={item}
                  className={`px-5 py-4 text-lg leading-8 shadow-[0_8px_20px_rgba(16,22,29,0.06)] ${
                    index % 2 === 0
                      ? "bg-[#eefbff] text-[#12364e]"
                      : "ml-6 bg-[#f3fff9] text-[#10402a]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 max-w-4xl border-l-4 border-[#00e5ff] bg-white/55 px-6 py-5 text-lg leading-9 text-[#243447] shadow-[0_14px_35px_rgba(20,34,53,0.06)]">
          <p>
            The final story is simple: V1 proved the idea, the bridge proved the
            foundation was wrong, and V2 became the thing the house actually
            needed.
          </p>
        </section>
      </div>
    </main>
  );
}
