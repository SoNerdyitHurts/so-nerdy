export const metadata = {
  title: "Calendar Project",
};

const failures = [
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
];

const futureThreads = [
  "iphone integrations for status cards",
  "status syncing after visual direction is locked",
];

export default function CalendarProjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1a1713] text-[#f3eadb]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,245,220,0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,245,220,0.28) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(circle at 16% 18%, rgba(255,190,120,0.10), transparent 0 22%), radial-gradient(circle at 78% 14%, rgba(120,170,255,0.08), transparent 0 18%), radial-gradient(circle at 68% 72%, rgba(255,120,120,0.08), transparent 0 16%), radial-gradient(circle at 12% 88%, rgba(255,255,255,0.05), transparent 0 14%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.9) 0.65px, transparent 0.8px),
            radial-gradient(rgba(255,255,255,0.35) 0.5px, transparent 0.75px)
          `,
          backgroundSize: "8px 8px, 13px 13px",
          backgroundPosition: "0 0, 4px 5px",
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 34%, rgba(8,6,5,0.22) 68%, rgba(6,5,4,0.50) 100%)",
        }}
      />

      <div className="relative mx-auto min-h-screen max-w-[1500px] px-6 py-10 md:px-10">
        <div className="absolute left-[4%] top-6 border border-[#a0612a]/60 bg-[#5b2f12]/35 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#ffbd7b]">
          ⚠ live environment — changes happening without warning
        </div>

        <div className="absolute right-[6%] top-20 text-[11px] uppercase tracking-[0.22em] text-[#d6c3a8]">
          calendar project
        </div>

        <div className="absolute left-[9%] top-[13rem] max-w-[560px]">
          <div className="text-[12px] uppercase tracking-[0.28em] text-[#d7c2a4]">
            main issue
          </div>

          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
            This is not a calendar app
          </h1>

          <div className="ml-8 mt-3 max-w-[360px] text-lg leading-8 text-[#dbcbb4]">
            it is replacing a whiteboard
          </div>

          <div className="mt-6 ml-3 max-w-[460px] text-sm leading-7 text-[#cbbba4]">
            That assumption is where most of the weirdness starts. The moment the
            calendar stopped being just a component, everything around it had to
            answer for it.
          </div>
        </div>

        <div className="absolute left-[43%] top-[11.5rem] max-w-[340px] border border-[#d0b58d]/20 bg-[#211b16]/70 px-4 py-3 text-sm text-[#e3d4bf]">
          this assumption caused most of the problems
        </div>

        <div className="absolute left-[47%] top-[15rem] text-[#b9986e] text-3xl">
          ↘
        </div>

        <div className="absolute right-[8%] top-[12rem] max-w-[360px]">
          <div className="text-[12px] uppercase tracking-[0.28em] text-[#e7b1b1]">
            most frustrating
          </div>

          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#ffe4e4] md:text-5xl">
            layout is breaking
          </h2>

          <div className="mt-5 space-y-2 text-sm leading-7 text-[#f0d3d3]">
            <div>clipping</div>
            <div>overflow issues</div>
            <div>disappearing edit button</div>
            <div>wrapper conflicts</div>
          </div>
        </div>

        <div className="absolute right-[28%] top-[16.5rem] text-[#b9986e] text-3xl">
          ⟵
        </div>

        <div className="absolute right-[26%] top-[20rem] max-w-[220px] text-sm text-[#d6c3a8]">
          because this isn’t just a calendar
        </div>

        <div className="absolute right-[10%] top-[27rem] max-w-[380px]">
          <div className="mb-3 text-[12px] uppercase tracking-[0.26em] text-[#d7c2a4]">
            system failure chain
          </div>

          <div className="space-y-3 text-sm leading-7 text-[#ebdcc8]">
            <div>calendar became dominant</div>
            <div className="ml-5 text-[#b9986e]">↓</div>
            <div className="ml-3">stopped behaving like a card</div>
            <div className="ml-8 text-[#b9986e]">↓</div>
            <div className="ml-1">now the system has two rules</div>
            <div className="ml-6 text-[#b9986e]">↓</div>
            <div className="ml-4">global edit vs local edit</div>
            <div className="ml-9 text-[#b9986e]">↓</div>
            <div className="ml-2">everything starts conflicting</div>
          </div>

          <div className="mt-4 ml-8 max-w-[180px] border border-[#d0b58d]/20 bg-[#211b16]/75 px-3 py-2 text-xs text-[#d7c2a4]">
            this felt fine at first
          </div>
        </div>

        <div className="absolute left-[8%] top-[34rem] max-w-[380px]">
          <div className="text-[12px] uppercase tracking-[0.26em] text-[#d7c2a4]">
            stress tests
          </div>

          <div className="mt-4 space-y-5">
            {stressTests.map((test) => (
              <div key={test.name}>
                <div className="text-xl font-semibold">{test.name}</div>
                <div className="mt-1 text-sm uppercase tracking-[0.2em] text-[#f7b87f]">
                  {test.result}
                </div>
                <div className="mt-2 max-w-[320px] text-sm leading-7 text-[#d0c0aa]">
                  {test.note}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 max-w-[240px] text-sm text-[#d6c3a8]">
            this should have been obvious earlier
          </div>
        </div>

        <div className="absolute left-[39%] top-[33rem] max-w-[420px]">
          <div className="text-[12px] uppercase tracking-[0.26em] text-[#e8c6aa]">
            failure pile
          </div>

          <div className="mt-4 space-y-2 text-sm leading-7 text-[#f3e0cf]">
            {failures.map((item, idx) => (
              <div
                key={item}
                className={`max-w-[320px] border border-[#d0b58d]/18 bg-[#211b16]/78 px-4 py-3 ${
                  idx % 2 === 0 ? "ml-0" : "ml-6"
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-[-1.2rem] ml-[11rem] max-w-[250px] border border-[#a0612a]/35 bg-[#4b2712]/55 px-4 py-3 text-sm text-[#ffc98b]">
            kept fixing symptoms instead of cause
          </div>
        </div>

        <div className="absolute right-[7%] top-[47rem] max-w-[340px]">
          <div className="text-[12px] uppercase tracking-[0.26em] text-[#d7c2a4]">
            mobile reveal
          </div>

          <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
            mobile exposed everything
          </h3>

          <div className="mt-4 space-y-2 text-sm leading-7 text-[#e7d7c1]">
            <div>no horizontal scroll</div>
            <div>modal broken</div>
          </div>

          <div className="mt-5 text-[#b9986e] text-2xl">↓</div>

          <div className="mt-3 max-w-[240px] text-sm text-[#d6c3a8]">
            this wasn’t a mobile issue
          </div>

          <div className="mt-2 ml-6 text-[#b9986e] text-2xl">→</div>

          <div className="mt-2 ml-16 max-w-[200px] border border-[#d0b58d]/20 bg-[#211b16]/72 px-3 py-2 text-sm text-[#ead9c3]">
            this was architecture
          </div>
        </div>

        <div className="absolute left-[12%] top-[58rem] max-w-[340px]">
          <div className="text-[12px] uppercase tracking-[0.26em] text-[#d7c2a4]">
            current state
          </div>

          <div className="mt-4 space-y-2 text-sm leading-7 text-[#e6d7c1]">
            <div>partially working</div>
            <div>still fighting itself</div>
            <div>not stable</div>
            <div>looks finished → isn’t</div>
          </div>

          <div className="mt-5 border border-[#a0612a]/35 bg-[#4b2712]/45 px-4 py-3 text-sm text-[#ffc98b]">
            don’t trust this yet
          </div>
        </div>

        <div className="absolute left-[58%] top-[57rem] max-w-[290px]">
          <div className="text-[12px] uppercase tracking-[0.26em] text-[#d7c2a4]">
            not built yet
          </div>

          <div className="mt-4 space-y-2 text-sm leading-7 text-[#e5d6c0]">
            {futureThreads.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>

          <div className="mt-4 max-w-[210px] text-sm text-[#d6c3a8]">
            this adds another system layer
          </div>
        </div>

        <div className="absolute left-[31%] top-[26rem] max-w-[220px] text-sm text-[#cdb99f]">
          now there are two systems pretending to be one
        </div>

        <div className="absolute left-[34%] top-[29rem] text-[#b9986e] text-2xl">
          ↘
        </div>

        <div className="absolute left-[29%] top-[42rem] text-[#b9986e] text-2xl">
          ↙
        </div>

        <div className="absolute left-[49%] top-[49rem] text-[#b9986e] text-2xl">
          ↘
        </div>

        <div className="min-h-[92rem]" />
      </div>
    </main>
  );
}