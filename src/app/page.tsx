export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-[#EAEAF0] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.35em] text-[#9A9AB0] mb-4">
          so-nerdy.dev
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          The lab is always running.
        </h1>

        <p className="text-xl md:text-2xl text-[#9A9AB0] mb-10 italic">
          Stability not guaranteed.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/lab"
            className="block rounded-2xl border border-[#1A1A24] bg-[#111118] p-6 hover:border-[#FF2E88] transition"
          >
            <h2 className="text-2xl font-semibold mb-2">The Lab</h2>
            <p className="text-[#9A9AB0]">
              Active builds, unstable experiments, and whatever is currently in progress.
            </p>
          </a>

          <a
            href="/completed"
            className="block rounded-2xl border border-[#1A1A24] bg-[#111118] p-6 hover:border-[#7A5CFF] transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Completed</h2>
            <p className="text-[#9A9AB0]">
              Stuff that works well enough to count.
            </p>
          </a>

          <a
            href="/graveyard"
            className="block rounded-2xl border border-[#1A1A24] bg-[#111118] p-6 hover:border-[#FF8A00] transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Graveyard</h2>
            <p className="text-[#9A9AB0]">
              Abandoned ideas, dead ends, and projects not worth fixing. For now.
            </p>
          </a>

          <a
            href="/this-site"
            className="block rounded-2xl border border-[#1A1A24] bg-[#111118] p-6 hover:border-[#00E5FF] transition"
          >
            <h2 className="text-2xl font-semibold mb-2">This Site</h2>
            <p className="text-[#9A9AB0]">
              The site itself is part of the experiment.
            </p>
          </a>
        </div>

        <div className="mt-12 rounded-2xl border border-[#1A1A24] bg-[#111118] p-6">
          <h3 className="text-lg font-semibold mb-3">Broken Right Now</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#9A9AB0]">
            <li>Most pages are still empty</li>
            <li>Styling is basic</li>
            <li>Some routes exist only because I wanted them live</li>
          </ul>
        </div>
      </div>
    </main>
  );
}