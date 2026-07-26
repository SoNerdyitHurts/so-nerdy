import Image from "next/image";
import Link from "next/link";

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

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/completed/obsidian-meridian"
            className="group relative aspect-video overflow-hidden border border-white/10 bg-black"
          >
            <Image
              src="/completed/obsidian-meridian/hero.jpg"
              alt="The Obsidian Meridian Palworld mural"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[#E1A84A]">
                Palworld · Python
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-white">
                The Obsidian Meridian
              </h2>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}