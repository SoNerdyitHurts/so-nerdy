export const metadata = {
  title: "Completed",
};

export default function CompletedPage() {
  return (
    <main className="px-4 py-8 md:px-6 md:py-10">
      <section className="mx-auto max-w-7xl border border-white/10 bg-[#171A1F] p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#96A0B3]">
          Completed
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
          Stuff that survived.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#B8BFCD]">
          Finished enough to count. This section will get the cleaner project
          entries once they earn it.
        </p>
      </section>
    </main>
  );
}