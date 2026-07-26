import Link from "next/link";

export const metadata = {
  title: "Calendar Project",
};

const artifacts = [
  {
    label: "V1",
    title: "rough working board",
    href: "/completed/calendar/v1",
    body: "The first version that made the whiteboard replacement feel real. Too crowded, rough around the edges, but alive enough to prove the idea.",
    tone: "gold",
  },
  {
    label: "abandoned bridge",
    title: "wrong foundation",
    href: null,
    body: "Mostly backend work. It was the terrible middle attempt that taught the real lesson: the project did not need a bridge. It needed a better foundation.",
    tone: "pink",
  },
  {
    label: "V2",
    title: "finished board",
    href: "/completed/calendar/v2",
    body: "The polished endpoint: structured events, reminders, timers, meds, shifts, notifications, and a household display that can actually be trusted.",
    tone: "teal",
  },
];

const solved = [
  "Calendar data became structured instead of loose text.",
  "Events and reminders could be saved, edited, and shown consistently.",
  "Status cards became part of the system instead of decorations.",
  "The wall display, iPad behavior, and real household use became acceptance tests.",
];

const palette = {
  tanzanite: "#3C4B7E",
  caribbean: "#006D6F",
  raspberry: "#87516A",
  plantain: "#D6A550",
};

function ArtifactCard({ artifact }: { artifact: (typeof artifacts)[number] }) {
  const toneClasses =
    artifact.tone === "gold"
      ? "border-[#D6A550]/55 bg-[#161b2f] text-[#f6e3bd]"
      : artifact.tone === "pink"
        ? "border-[#87516A]/60 bg-[#1c1729] text-[#e0b9c8]"
        : "border-[#1ba1a4]/60 bg-[#10202e] text-[#bde9e9]";

  const content = (
    <div className={`h-full border p-5 transition duration-300 ${toneClasses} ${artifact.href ? "hover:-translate-y-1 hover:bg-white/[0.08]" : "opacity-90"}`}>
      <p className="text-xs uppercase tracking-[0.28em] text-white/55">
        {artifact.label}
      </p>
      <h3 className="mt-4 text-3xl font-black leading-none tracking-[-0.05em] text-white">
        {artifact.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-current/85">{artifact.body}</p>
      <p className="mt-5 text-xs uppercase tracking-[0.22em] text-white/50">
        {artifact.href ? "open artifact →" : "archived as a failure note"}
      </p>
    </div>
  );

  if (!artifact.href) return content;

  return <Link href={artifact.href}>{content}</Link>;
}

export default function CompletedCalendarPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07111f] text-[#edf8f8]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(0,109,111,0.45),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(135,81,106,0.36),transparent_31%),radial-gradient(circle_at_70%_78%,rgba(214,165,80,0.20),transparent_30%),linear-gradient(135deg,#07111f,#121a31_45%,#062426)]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 lg:px-12">
        <Link
          href="/completed"
          className="inline-flex border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#c6d9dc] transition hover:border-[#D6A550]/70 hover:text-white"
        >
          ← completed projects
        </Link>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="border border-white/10 bg-[#0c1426]/90 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-8">
            <p className="text-xs uppercase tracking-[0.34em] text-[#D6A550]">
              Calendar Project
            </p>
            <h1 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
              This is not a calendar app.
            </h1>
            <p className="mt-5 text-2xl text-[#c9dce0]">
              It replaced a whiteboard.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#b7c9d0]">
              The finished system became a household command board: one shared place for events, reminders, timers, meds, shifts, and live status without needing to open five different apps.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="border border-[#D6A550]/40 bg-[#D6A550]/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D6A550]">status</p>
                <p className="mt-2 text-xl font-semibold text-white">complete</p>
              </div>
              <div className="border border-[#1ba1a4]/40 bg-[#006D6F]/18 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#83d7d7]">endpoint</p>
                <p className="mt-2 text-xl font-semibold text-white">V2</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <img
              src="/completed/calendar/hero.svg"
              alt="Stylized preview of the Calendar Project household board"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </section>

        <section className="mt-10 border border-white/10 bg-white/[0.035] p-5 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#D6A550]">
                project artifacts
              </p>
              <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.06em] md:text-5xl">
                V1 → dumped bridge → V2
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#b7c9d0]">
              The history is not three clean versions. It is one rough working board, one bad foundation attempt, and then the finished system.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {artifacts.map((artifact) => (
              <ArtifactCard key={artifact.label} artifact={artifact} />
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-[#87516A]/45 bg-[#1c1729]/80 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8a9bc]">
              abandoned bridge
            </p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] text-white">
              the middle version was not worth saving as a fake app
            </h2>
            <p className="mt-5 text-base leading-8 text-[#e0c1ce]">
              The bridge was mostly backend direction. It existed to teach what not to keep. Turning it into a playable exhibit would be dishonest, so this page keeps it as a failure note instead of pretending it was a real user-facing version.
            </p>
          </div>

          <div className="border border-[#1ba1a4]/40 bg-[#0c1426]/90 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#83d7d7]">
              what V2 solved
            </p>
            <div className="mt-5 grid gap-3">
              {solved.map((item) => (
                <div key={item} className="border border-white/10 bg-white/[0.04] p-4 text-base leading-7 text-[#d6e8eb]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 border border-[#D6A550]/40 bg-[#D6A550]/10 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D6A550]">
            final note
          </p>
          <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.06em] text-white md:text-5xl">
            V2 is the finished product.
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-[#f0dfbd]">
            After V2 there is no next version for this page to chase. The rest is retrospective: what survived from V1, what the abandoned bridge exposed, and how the final board became a daily household appliance instead of another calendar app.
          </p>
        </section>
      </div>
    </main>
  );
}
