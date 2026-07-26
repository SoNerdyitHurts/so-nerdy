import TextBlueprint from "./TextBlueprint";

export const metadata = {
  title: "The Obsidian Meridian",
  description:
    "A massive Palworld mural planned with a Python-generated, spreadsheet-style blueprint.",
};

const stats = [
  { label: "Location", value: "Forgotten Island" },
  { label: "Coordinates", value: "-449, -44" },
  { label: "Full mural", value: "134×29 blocks" },
  { label: "Title panel", value: "49×29 blocks" },
];

const earlierBuilds = [
  {
    src: "/completed/obsidian-meridian/earlier-build-1.jpg",
    alt: "Earlier giant painted-wall build in Palworld",
  },
  {
    src: "/completed/obsidian-meridian/earlier-build-2.jpg",
    alt: "Earlier painted-wall structure built into the Palworld landscape",
  },
  {
    src: "/completed/obsidian-meridian/earlier-build-3.jpg",
    alt: "Earlier large-scale painted-wall experiment in Palworld",
  },
  {
    src: "/completed/obsidian-meridian/earlier-build-4.jpg",
    alt: "Another earlier painted-wall build in Palworld",
  },
];

export default function ObsidianMeridianPage() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl">
          <img
            src="/completed/obsidian-meridian/hero.jpg"
            alt="The Obsidian Meridian mural built in Palworld"
            className="h-auto w-full object-cover"
          />

          <div className="space-y-8 p-6 md:p-10">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-[#E1A84A]">
                Palworld Build · Python Grid Project
              </p>

              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                The Obsidian Meridian
              </h1>

              <p className="max-w-3xl text-lg leading-8 text-slate-300">
                A massive Palworld mural built on Forgotten Island using painted
                wall pieces, a spreadsheet-style blueprint, and a Python grid to
                keep the text from turning into a disaster.
              </p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-black/20 p-4"
                >
                  <dt className="text-sm text-slate-400">{stat.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-100">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-[#E1A84A]">
              What Sparked It
            </p>

            <h2 className="text-3xl font-bold">Walls as pixels</h2>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                Before The Obsidian Meridian, I had already been messing around
                with giant painted-wall builds in Palworld. The wall-painting
                update made me realize I could treat walls like pixels, so I
                started putting huge images out in the world just to see how far
                I could push it.
              </p>

              <p>
                At first it was just fun builds and random ideas. Then it turned
                into, “wait, I can make these big enough to become actual
                landmarks on the map.”
              </p>

              <p>
                The Obsidian Meridian came from that same idea, but the text was
                too big to wing it by eye. That is where the Python grid came in.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {earlierBuilds.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="aspect-video rounded-xl border border-white/10 object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[#E1A84A]">
                One Wall Piece = One Pixel
              </p>

              <h2 className="text-3xl font-bold">The simple rule</h2>

              <div className="space-y-5 text-base leading-8 text-slate-300">
                <p>
                  The main idea was simple: one wall piece in Palworld equals one
                  pixel in the design.
                </p>

                <p>
                  That meant the mural could be planned like a grid. If a square
                  in the blueprint said a certain color, that wall piece in-game
                  needed to be painted that color.
                </p>

                <p>
                  Once I had that relationship figured out, the build stopped
                  being one huge guessing game and became something I could
                  follow row by row.
                </p>
              </div>
            </div>

            <img
              src="/completed/obsidian-meridian/grid-closeup.png"
              alt="Close-up showing individual painted wall pieces in the Palworld mural"
              className="rounded-xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-[#E1A84A]">
              Python Grid / Blueprint
            </p>

            <h2 className="text-3xl font-bold">Taking the guesswork out</h2>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>I used Python to turn the title into a block-by-block blueprint.</p>

              <p>
                The script generated the layout for the 49×29 title panel, with
                each square in the blueprint matching one painted wall piece in
                Palworld. The letters were built from a reusable pixel-style
                font, then exported into a spreadsheet I could follow row by row.
              </p>

              <p>
                The script gave me a blueprint that took the guesswork out of
                placing tiles.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
            <img
              src="/completed/obsidian-meridian/blueprint-v10.svg"
              alt="Generated 49 by 29 title panel blueprint for The Obsidian Meridian"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <img
            src="/completed/obsidian-meridian/spreadsheet-blueprint.jpg"
            alt="Original spreadsheet blueprint used to build The Obsidian Meridian title panel"
            className="rounded-2xl border border-white/10 object-cover"
          />

          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.25em] text-[#E1A84A]">
              The Actual Blueprint
            </p>

            <h2 className="text-3xl font-bold">The build artifact</h2>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                This is the actual blueprint that was generated and followed to
                build the mural in-game.
              </p>

              <p>
                Each square represents one wall piece. Each letter in the square
                represents the color that wall piece needed to be painted. It is
                not a mockup or a recreated example; this was the working layout
                used during the build.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5 font-mono text-sm leading-7 text-slate-300">
              <p>Panel size: 49×29</p>
              <p>Letter height: 7 blocks</p>
              <p>Letter spacing: 1 block</p>
              <br />
              <p>THE: rows 3–9</p>
              <p>OBSIDIAN: rows 12–18</p>
              <p>MERIDIAN: rows 21–27</p>
            </div>
          </div>
        </div>
      </section>

            <TextBlueprint />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="space-y-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-[#E1A84A]">
              Final Palworld Build
            </p>

            <h2 className="text-3xl font-bold">Building it for real</h2>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>The final build took several hours across planning, building, and painting.</p>

              <p>
                I had to plan the dimensions for the artwork next to the title,
                build the full wall structure in Palworld, and then paint each
                wall piece based on the blueprint. The grid did not make that
                part instant, but it made the work possible to follow without
                constantly guessing where everything belonged.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <img
              src="/completed/obsidian-meridian/final-build-1.webp"
              alt="Finished Obsidian Meridian mural in Palworld"
              className="rounded-xl border border-white/10 object-cover"
            />
            <img
              src="/completed/obsidian-meridian/final-build-2.webp"
              alt="Angled view of The Obsidian Meridian mural in Palworld"
              className="rounded-xl border border-white/10 object-cover"
            />
          </div>

          <video
            src="/completed/obsidian-meridian/flythrough.mp4"
            controls
            className="w-full rounded-2xl border border-white/10"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 pb-20">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-[#E1A84A]">
              What I Like About It
            </p>

            <h2 className="text-3xl font-bold">Dumb, useful, and very me</h2>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                This is the kind of project I like because it sits right between
                being dumb and being useful.
              </p>

              <p>
                It is a giant mural in Palworld, which is ridiculous. But the way
                I got there used real planning: grid logic, reusable letters,
                color symbols, coordinates, and a script that turned an idea into
                something I could actually build.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}