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

const failurePile = [
  "edit button disappeared",
  "modal cut off on mobile",
  "layout started clipping content",
  "calendar stopped behaving like a card",
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
    <main className="relative min-h-screen overflow-hidden bg-[#12100d] text-[#f3eadb]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,244,220,0.65) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,244,220,0.50) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          background: `
            radial-gradient(circle at 14% 12%, rgba(255,195,120,0.10), transparent 0 22%),
            radial-gradient(circle at 78% 18%, rgba(255,120,120,0.08), transparent 0 18%),
            radial-gradient(circle at 30% 70%, rgba(255,245,220,0.06), transparent 0 20%)
          `,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.85) 0.7px, transparent 0.9px),
            radial-gradient(rgba(255,255,255,0.25) 0.5px, transparent 0.7px)
          `,
          backgroundSize: "9px 9px, 15px 15px",
          backgroundPosition: "0 0, 4px 5px",
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(8,7,5,0.22) 72%, rgba(5,4,3,0.52) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-10 md:px-10">
        <div className="mb-8 inline-block border border-[#a0612a]/60 bg-[#4b2712]/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#ffbd7b]">
          ⚠ live environment — changes happening without warning
        </div>

        <div className="absolute right-8 top-10 text-[11px] uppercase tracking-[0.26em] text-[#dcc9ad]">
          calendar project
        </div>

        <section className="relative max-w-[760px] pt-10">
          <div className="text-[12px] uppercase tracking-[0.30em] text-[#d8c3a6]">
            main issue
          </div>

          <h1 className="mt-4 max-w-[620px] text-5xl font-semibold leading-[0.95] md:text-7xl">
            This is not a
            <br />
            calendar app
          </h1>

          <div className="ml-7 mt-4 text-xl text-[#e4d2b9] md:text-2xl">
            it is replacing a whiteboard
          </div>

          <p className="mt-7 max-w-[700px] text-lg leading-10 text-[#d9c8b1]">
            That assumption is where most of the weirdness starts. The moment
            the calendar stopped being just a component, everything around it
            had to answer for it.
          </p>

          <div className="mt-6 ml-[24rem] max-w-[260px] text-base leading-8 text-[#e2cfb1] md:ml-[29rem]">
            now there are two systems pretending to be one
          </div>
        </section>

        <section className="relative mt-12 max-w-[1120px]">
          <div className="ml-3 inline-block border border-[#d9c3a3]/20 bg-[#1b1713]/82 px-4 py-3">
            <div className="text-sm uppercase tracking-[0.24em] text-[#f0ddc0]">
              touch the broken versions first
            </div>
            <div className="mt-3 text-sm leading-7 text-[#dbc9ae]">
              these are safe recreations — nothing here will break your system
              <br />
              click around, then come back and read what went wrong
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            {pokeVersions.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group block border border-[#d7c3a5]/22 bg-[#17130f]/85 px-5 py-4 transition hover:border-[#f0c48d]/45 hover:bg-[#1e1812] ${
                  index === 1
                    ? "md:mt-6 md:max-w-[340px]"
                    : "md:max-w-[280px]"
                }`}
              >
                <div className="text-2xl font-semibold text-[#f7edde] group-hover:text-white">
                  {item.title}
                </div>
                <div className="mt-2 text-sm leading-7 text-[#d6c4a9]">
                  {item.note}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 ml-2 text-sm text-[#cdb89a]">
            ↓ read what broke below
          </div>
        </section>

        <section className="relative mt-16 min-h-[1500px]">
          <div className="absolute left-[2%] top-0 max-w-[320px]">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[#d8c3a6]">
              where it started going wrong
            </div>

            <div className="mt-4 space-y-4 text-base leading-8 text-[#e3d4bf]">
              <div>calendar became dominant</div>
              <div className="ml-8 text-[#c3a274]">↓</div>
              <div className="ml-4">stopped behaving like a card</div>
              <div className="ml-12 text-[#c3a274]">↓</div>
              <div className="ml-1">now the system has two rules</div>
              <div className="ml-9 text-[#c3a274]">↓</div>
              <div className="ml-3">global edit vs local edit</div>
            </div>

            <div className="mt-5 ml-8 inline-block border border-[#d7c3a5]/18 bg-[#1b1713]/80 px-3 py-2 text-sm text-[#dac7a9]">
              this felt fine at first
            </div>
          </div>

          <div className="absolute right-[4%] top-6 max-w-[380px]">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[#efc3c3]">
              most frustrating
            </div>

            <h2 className="mt-3 max-w-[360px] text-4xl font-semibold leading-[0.95] text-[#ffe7e7] md:text-6xl">
              layout is
              <br />
              breaking
            </h2>

            <div className="mt-4 ml-16 text-3xl text-[#c3a274]">←</div>

            <div className="mt-2 max-w-[260px] text-base leading-8 text-[#e5d3b9]">
              because this isn’t just a calendar
            </div>

            <div className="mt-8 space-y-2 text-lg leading-9 text-[#eddcc9]">
              <div>clipping</div>
              <div>overflow issues</div>
              <div>disappearing edit button</div>
              <div>wrapper conflicts</div>
            </div>
          </div>

          <div className="absolute left-[5%] top-[23rem] max-w-[340px]">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[#d8c3a6]">
              stress tests
            </div>

            <div className="mt-4 space-y-10">
              {stressTests.map((test) => (
                <div key={test.name}>
                  <div className="text-3xl font-semibold text-[#f5ecde]">
                    {test.name}
                  </div>
                  <div className="mt-1 text-lg uppercase tracking-[0.24em] text-[#f1bb7f]">
                    {test.result}
                  </div>
                  <div className="mt-3 max-w-[300px] text-lg leading-9 text-[#d8c8b1]">
                    {test.note}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-[240px] text-base text-[#d4bf9f]">
              this should have been obvious earlier
            </div>
          </div>

          <div className="absolute left-[38%] top-[28rem] max-w-[460px]">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[#e2c8a8]">
              failure pile
            </div>

            <div className="mt-5 space-y-4">
              {failurePile.map((item, idx) => (
                <div
                  key={item}
                  className={`border border-[#d7c3a5]/18 bg-[#1b1713]/82 px-4 py-4 text-xl text-[#f1e3d0] ${
                    idx === 1 ? "ml-10" : ""
                  } ${idx === 2 ? "ml-2" : ""} ${idx === 3 ? "ml-12" : ""}`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-[-1.4rem] ml-[14rem] inline-block border border-[#a0612a]/35 bg-[#4b2712]/55 px-4 py-3 text-lg leading-8 text-[#ffc98b]">
              kept fixing symptoms instead of cause
            </div>
          </div>

          <div className="absolute right-[5%] top-[44rem] max-w-[360px]">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[#d8c3a6]">
              mobile reveal
            </div>

            <h3 className="mt-4 max-w-[320px] text-4xl font-semibold leading-tight md:text-5xl">
              mobile exposed everything
            </h3>

            <div className="mt-5 space-y-2 text-lg leading-9 text-[#e7d7c1]">
              <div>no horizontal scroll</div>
              <div>modal broken</div>
            </div>

            <div className="mt-6 text-3xl text-[#c3a274]">↓</div>

            <div className="mt-3 max-w-[240px] text-lg leading-8 text-[#d6c3a8]">
              this wasn’t a mobile issue
            </div>

            <div className="mt-3 ml-10 text-3xl text-[#c3a274]">→</div>

            <div className="mt-3 ml-20 inline-block border border-[#d7c3a5]/18 bg-[#1b1713]/82 px-4 py-3 text-lg text-[#ead9c3]">
              this was architecture
            </div>
          </div>

          <div className="absolute left-[7%] top-[68rem] max-w-[340px]">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[#d8c3a6]">
              what this actually revealed
            </div>

            <div className="mt-5 space-y-4 text-lg leading-9 text-[#e6d7c1]">
              <div>replacing a whiteboard is not the same as building a calendar app</div>
              <div>calendar stopped behaving like a normal component</div>
              <div>the visual bugs were symptoms of architectural confusion</div>
            </div>
          </div>

          <div className="absolute right-[11%] top-[73rem] max-w-[320px]">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[#d8c3a6]">
              current state
            </div>

            <div className="mt-4 space-y-3 text-lg leading-9 text-[#e6d7c1]">
              {currentState.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

            <div className="mt-6 inline-block border border-[#a0612a]/35 bg-[#4b2712]/45 px-4 py-3 text-lg text-[#ffc98b]">
              don’t trust this yet
            </div>
          </div>

          <div className="absolute left-[42%] top-[87rem] max-w-[330px]">
            <div className="text-[12px] uppercase tracking-[0.28em] text-[#d8c3a6]">
              not built yet
            </div>

            <div className="mt-5 space-y-3 text-lg leading-9 text-[#e5d6c0]">
              {futureThreads.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>

            <div className="mt-5 max-w-[230px] text-base leading-8 text-[#d6c3a8]">
              this adds another system layer
            </div>
          </div>

          <div className="absolute left-[31%] top-[15rem] text-3xl text-[#c3a274]">
            ↘
          </div>
          <div className="absolute left-[32%] top-[22rem] text-3xl text-[#c3a274]">
            ↙
          </div>
          <div className="absolute left-[61%] top-[38rem] text-3xl text-[#c3a274]">
            ↘
          </div>
          <div className="absolute right-[18%] top-[83rem] text-3xl text-[#c3a274]">
            ↙
          </div>
        </section>
      </div>
    </main>
  );
}