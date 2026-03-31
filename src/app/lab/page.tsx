export default function LabPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-[#EAEAF0] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">The Lab</h1>
        <p className="text-[#9A9AB0] mb-8">
          Active experiments. Results may vary.
        </p>

        <ul className="space-y-3">
          <li>AI Co-Pilot</li>
          <li>Household Board / Calendar</li>
          <li>This Site</li>
        </ul>
      </div>
    </main>
  );
}