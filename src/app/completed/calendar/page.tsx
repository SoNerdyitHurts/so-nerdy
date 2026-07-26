import Link from "next/link";

export const metadata = {
  title: "Calendar Project",
};

const pokeVersions = [
  {
    title: "before",
    note: "looked fine at a glance",
    href: "/projects/calendar/exhibits/early",
  },
  {
    title: "during the mess",
    note: "this is where things got weird",
    href: "/projects/calendar/exhibits/edit-mode-chaos",
  },
  {
    title: "current",
    note: "the working direction",
    href: "/projects/calendar/exhibits/current",
  },
];

const failurePile = [
  "edit button disappeared",
  "modal cut off on mobile",
  "layout started clipping content",
  "calendar stopped behaving like a card",
];

const stressTests = [
  {
    name: "glance test",
    result: "failed",
    note: "eye did not know where to go first",
  },
  {
    name: "edit test",
    result: "messy",
    note: "where you click depends on which system you're in",
  },
  {
    name: "mobile test",
    result: "revealing",
    note: "this looked like a mobile issue until it exposed architecture problems",
  },
];

const currentState = [
  "the calendar project is complete",
  "the website page is still being built",
  "broken versions are becoming playable artifacts",
  "final museum page comes after this archive pass",
];

const futureThreads = [
  "archive this messy in-progress page",
  "add reset logic for playable versions",
  "build the finished project presentation",
];

const archiveDecisions = [
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

export default function CalendarProjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#dfe8f2] text-[#10161d]">
      {/* bright energized surface */}
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

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.03) 24%, rgba(0,0,0,0.02) 58%, rgba(255,255,255,0.08) 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 pb-24 pt-10 md:px-8 lg:px-12">
        <Link
          href="/this-site"
          className="mb-5 block max-w-[760px] rotate-[-0.25deg] border border-[#00e5ff]/35 bg-[#eefbff]/80 px-4 py-3 text-sm leading-7 text-[#16445c] shadow-[0_10px_28px_rgba(0,229,255,0.08)] transition hover:rotate-0 hover:border-[#ff2e88]/40 hover:bg-[#fff2f8]/80 hover:text-[#7a1b46]"
        >
          <span className="block text-[11px] uppercase tracking-[0.24em] text-[#2f6f86]">
            website build artifact
          </span>
          <span className="mt-1 block">
            this page is also part of the website project — see the site being built →
          </span>
        </Link>

        <div className="inline-block border border-[#ff2e88]/25 bg-[#fff2f8]/70 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#ad245f]">
          ⚠ live environment — changes happening without warning
        </div>

        <div className="mt-14 max-w-[760px]">
          <div className="text-[12px] uppercase tracking-[0.3em] text-[#35506a]">
            calendar project
          </div>

          <h1 className="mt-4 text-5xl font-semibold leading-[0.95] md:text-7xl">
            This is not a
            <br />
            calendar app
          </h1>

          <div className="mt-4 ml-6 text-xl text-[#1f3347] md:text-2xl">
            it is replacing a whiteboard
          </div>

          <p className="mt-8 max-w-[720px] text-lg leading-10 text-[#26384a]">
            That assumption is where most of the weirdness starts. The moment the
            calendar stopped being just a component, everything around it had to
            answer for it.
          </p>

          <div className="mt-6 ml-10 max-w-[340px] border-l-4 border-[#00e5ff] pl-4 text-base leading-8 text-[#22425a]">
            now there are two systems pretending to be one
          </div>

          <div className="mt-8 max-w-3xl border-l-4 border-[#00e5ff] bg-white/50 px-5 py-4 text-base leading-8 text-[#243447] shadow-[0_14px_35px_rgba(20,34,53,0.06)]">
            <p>
              This page is being captured while the site is still being built. It
              is not the final museum version yet.
            </p>
            <p className="mt-3">
              Right now this is the messy in-progress artifact: early decisions,
              broken versions, layout experiments, and the part where the
              calendar project started turning into something bigger than a
              calendar.
            </p>
          </div>
        </div>

        {/* primary action block */}
        <section className="mt-14 max-w-5xl rotate-[0.25deg] border-2 border-[#142235] bg-[#f8fbff]/85 p-5 shadow-[12px_12px_0_rgba(20,34,53,0.12)] md:p-7">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#ff2e88]">
                touch the broken versions first
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-none tracking-[-0.05em] text-[#142235] md:text-5xl">
                click around before you read the explanation
              </h2>
            </div>

            <div className="max-w-sm border border-[#00e5ff]/40 bg-[#eefbff] px-4 py-3 text-sm leading-6 text-[#16445c]">
              safe recreations. nothing here will break your system. poke
              around, then come back and read what went wrong.
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {pokeVersions.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group block min-h-[180px] p-5 transition hover:-translate-y-1 ${
                  index === 0
                    ? "rotate-[-0.5deg] border border-[#142235]/20 bg-white/75 hover:border-[#ff2e88] hover:bg-[#fff2f8]"
                    : index === 1
                      ? "rotate-[0.65deg] border border-[#ff2e88]/35 bg-[#fff2f8]/85 hover:border-[#ff2e88] hover:bg-[#ffe6f1]"
                      : "rotate-[-0.2deg] border border-[#00e5ff]/45 bg-[#eefbff]/90 hover:border-[#00e5ff] hover:bg-[#ddf8ff]"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.24em] ${
                    index === 0
                      ? "text-[#6d7786]"
                      : index === 1
                        ? "text-[#ad245f]"
                        : "text-[#2f6f86]"
                  }`}
                >
                  {item.title}
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#142235]">
                  {item.note}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 0
                      ? "text-[#506173]"
                      : index === 1
                        ? "text-[#6e314c]"
                        : "text-[#245064]"
                  }`}
                >
                  {index === 0
                    ? "the version that made the idea visible before the real problems showed up."
                    : index === 1
                      ? "the part where the project started fighting back and teaching me what it actually needed."
                      : "not the final museum page yet, but the project is no longer pretending to be just a calendar."}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-7 text-center text-sm font-black uppercase tracking-[0.28em] text-[#142235]">
            ↓ read what broke below
          </div>
        </section>

        <section className="mt-16 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#ff2e88]">
            early decisions that shaped the calendar
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-[0.92] tracking-[-0.06em] text-[#142235] md:text-6xl">
            the board had to do more than hold dates
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#334155]">
            These are calendar-project decisions, not website decisions. The page itself is part of the larger site experiment, but this section is about the system I actually built for the house.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {archiveDecisions.map((decision) => (
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

        <section className="mt-16 max-w-4xl rotate-[-0.25deg] border-2 border-[#00e5ff]/45 bg-[#eefbff]/85 p-6 shadow-[10px_10px_0_rgba(0,229,255,0.12)]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#2f6f86]">
            project status
          </p>

          <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.06em] text-[#142235] md:text-6xl">
            the actual calendar project is done
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#245064]">
            The system this page is about is complete, deployed, operational,
            and being used. It handles the household needs it was built for: events, reminders, timers, meds, shifts, live updates, and a shared display that can stay useful without being babysat.
          </p>
        </section>

        {/* story flow */}
        <section className="mt-20 space-y-24">
          {/* where it started going wrong */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#35506a]">
                where it started going wrong
              </div>

              <div className="mt-6 space-y-3 text-xl leading-10 text-[#12202d]">
                <div>calendar became dominant</div>
                <div className="ml-8 text-[#5f86a8]">↓</div>
                <div className="ml-3">stopped behaving like a card</div>
                <div className="ml-12 text-[#5f86a8]">↓</div>
                <div>now the system has two rules</div>
                <div className="ml-9 text-[#5f86a8]">↓</div>
                <div className="ml-4">global edit vs local edit</div>
              </div>

              <div className="mt-6 inline-block bg-[#f4f8fc] px-4 py-3 text-sm text-[#385168] shadow-[0_8px_22px_rgba(34,66,90,0.08)]">
                this felt fine at first
              </div>
            </div>

            <div className="lg:pt-10">
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#8e2a57]">
                most frustrating
              </div>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] text-[#761743] md:text-6xl">
                layout is
                <br />
                breaking
              </h2>

              <div className="mt-5 ml-10 text-3xl text-[#4aa3cf]">←</div>

              <div className="mt-2 max-w-[320px] text-lg leading-8 text-[#264764]">
                because this isn’t just a calendar
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="bg-[#fff4f8] px-4 py-4 text-lg text-[#5e1637]">
                  clipping
                </div>
                <div className="bg-[#eef8ff] px-4 py-4 text-lg text-[#12364e]">
                  overflow issues
                </div>
                <div className="bg-[#f3fff9] px-4 py-4 text-lg text-[#10402a]">
                  disappearing edit button
                </div>
                <div className="bg-[#f7f1ff] px-4 py-4 text-lg text-[#3b2267]">
                  wrapper conflicts
                </div>
              </div>
            </div>
          </div>

          {/* stress tests + failure pile */}
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#35506a]">
                stress tests
              </div>

              <div className="mt-6 space-y-10">
                {stressTests.map((test, index) => (
                  <div key={test.name} className={index === 1 ? "ml-4" : ""}>
                    <div className="text-3xl font-semibold text-[#121d29]">
                      {test.name}
                    </div>
                    <div
                      className={`mt-1 text-lg uppercase tracking-[0.24em] ${
                        index === 0
                          ? "text-[#a25b1d]"
                          : index === 1
                            ? "text-[#8e2a57]"
                            : "text-[#156b63]"
                      }`}
                    >
                      {test.result}
                    </div>
                    <div className="mt-3 max-w-[320px] text-lg leading-9 text-[#2c3f52]">
                      {test.note}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 max-w-[260px] border-l-4 border-[#ff2e88] pl-4 text-base text-[#5d2840]">
                this should have been obvious earlier
              </div>
            </div>

            <div>
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#35506a]">
                failure pile
              </div>

              <div className="mt-6 space-y-4">
                {failurePile.map((item, idx) => (
                  <div
                    key={item}
                    className={`max-w-[620px] px-5 py-4 text-xl shadow-[0_8px_20px_rgba(16,22,29,0.06)] ${
                      idx === 0
                        ? "bg-[#fff4f8] text-[#5a1735]"
                        : idx === 1
                          ? "ml-8 bg-[#eef8ff] text-[#12364e]"
                          : idx === 2
                            ? "ml-2 bg-[#f3fff9] text-[#10402a]"
                            : "ml-10 bg-[#f7f1ff] text-[#3b2267]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-[-1rem] ml-[12rem] inline-block bg-[#10161d] px-4 py-3 text-lg text-[#ffe6f2] shadow-[0_10px_26px_rgba(16,22,29,0.16)]">
                kept fixing symptoms instead of cause
              </div>
            </div>
          </div>

          {/* mobile reveal + lesson */}
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#35506a]">
                mobile reveal
              </div>

              <h3 className="mt-4 max-w-[460px] text-4xl font-semibold leading-tight text-[#16344f] md:text-5xl">
                mobile exposed everything
              </h3>

              <div className="mt-6 space-y-3 text-xl leading-10 text-[#23384c]">
                <div>no horizontal scroll</div>
                <div>modal broken</div>
              </div>

              <div className="mt-6 text-3xl text-[#4aa3cf]">↓</div>

              <div className="mt-3 max-w-[280px] text-lg leading-8 text-[#2d4860]">
                this wasn’t a mobile issue
              </div>

              <div className="mt-3 ml-10 text-3xl text-[#4aa3cf]">→</div>

              <div className="mt-3 ml-20 inline-block bg-[#10161d] px-4 py-3 text-lg text-[#f4fbff] shadow-[0_10px_24px_rgba(16,22,29,0.14)]">
                this was architecture
              </div>
            </div>

            <div>
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#35506a]">
                what this actually revealed
              </div>

              <div className="mt-6 space-y-5 text-lg leading-9 text-[#22384a]">
                <div>
                  replacing a whiteboard is not the same as building a calendar app
                </div>
                <div>
                  calendar stopped behaving like a normal component
                </div>
                <div>
                  the visual bugs were symptoms of architectural confusion
                </div>
              </div>
            </div>
          </div>

          {/* current state + future */}
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#35506a]">
                current state
              </div>

              <div className="mt-6 space-y-3 text-xl leading-10 text-[#1d2d3d]">
                {currentState.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>

              <div className="mt-7 inline-block bg-[#fff0f7] px-4 py-3 text-lg text-[#7a1b46] shadow-[0_8px_22px_rgba(122,27,70,0.08)]">
                trust the calendar, archive this page
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="text-[12px] uppercase tracking-[0.28em] text-[#35506a]">
                not built yet
              </div>

              <div className="mt-6 space-y-3 text-xl leading-10 text-[#22384a]">
                {futureThreads.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>

              <div className="mt-6 max-w-[260px] border-l-4 border-[#00e5ff] pl-4 text-base leading-8 text-[#285676]">
                this adds another system layer
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
