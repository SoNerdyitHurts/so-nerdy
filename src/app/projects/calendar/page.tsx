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
    note: "still not stable",
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
  "partially working",
  "still fighting itself",
  "not stable",
  "looks finished → isn’t",
];

const futureThreads = [
  "iphone integrations for status cards",
  "status syncing after visual direction is locked",
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
        </div>

        {/* primary action block */}
        <section className="mt-14 max-w-[1080px]">
          <div className="inline-block bg-[#10161d] px-5 py-4 text-[#f6fbff] shadow-[0_12px_32px_rgba(16,22,29,0.14)]">
            <div className="text-sm uppercase tracking-[0.24em] text-[#9cdcff]">
              touch the broken versions first
            </div>
            <div className="mt-3 text-sm leading-7 text-[#d9f3ff]">
              these are safe recreations — nothing here will break your system
              <br />
              click around, then come back and read what went wrong
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {pokeVersions.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group block px-5 py-5 transition ${
                  index === 0
                    ? "bg-[#eafaf3] text-[#0d3b23] hover:bg-[#ddf7ea]"
                    : index === 1
                      ? "bg-[#fff0f7] text-[#5a1435] hover:bg-[#ffe6f2]"
                      : "bg-[#eef8ff] text-[#10364c] hover:bg-[#e2f3ff]"
                }`}
              >
                <div className="text-2xl font-semibold">{item.title}</div>
                <div className="mt-2 text-sm leading-7 opacity-90">{item.note}</div>
              </Link>
            ))}
          </div>

          <div className="mt-4 ml-2 text-sm text-[#456178]">
            ↓ read what broke below
          </div>
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
                don’t trust this yet
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