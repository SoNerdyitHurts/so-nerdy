export const metadata = {
  title: "This Site",
};

const siteNotes = [
  "The site itself is part of the project log.",
  "If something looks unfinished, it probably is.",
  "The mess is part of the evidence.",
];

export default function ThisSitePage() {
  return (
    <main className="px-4 py-8 md:px-6 md:py-10">
      <section className="mx-auto max-w-7xl border border-white/10 bg-[#171A1F] p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#96A0B3]">
          This Site
        </p>

        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Built live. Left messy on purpose.
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#B8BFCD]">
          This website is one of the projects. It is being built in public, and
          the rough edges are part of the point.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteNotes.map((note, index) => (
            <div
              key={note}
              className={`border border-white/10 bg-[#12161A] p-4 text-sm text-[#D5DBE6] ${
                index === 1 ? "rotate-[0.25deg]" : "rotate-[-0.2deg]"
              }`}
            >
              {note}
            </div>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-[#FF8A00] pl-4 text-sm text-[#9EA7B8]">
          current condition: alive
          <br />
          polish level: low
          <br />
          honesty level: high
        </div>
      </section>
    </main>
  );
}