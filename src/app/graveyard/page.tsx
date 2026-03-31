export const metadata = {
  title: "Graveyard",
};

export default function GraveyardPage() {
  return (
    <main className="px-4 py-8 md:px-6 md:py-10">
      <section className="mx-auto max-w-7xl border border-white/10 bg-[#171A1F] p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#96A0B3]">
          Graveyard
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Not worth fixing. For now.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#B8BFCD]">
          Dead ends, abandoned builds, experiments that got weird, and things
          that probably taught me something before they died.
        </p>
      </section>
    </main>
  );
}