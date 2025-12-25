import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background">
      <div className="w-full max-w-4xl px-6 py-12 flex flex-col gap-10">
        {/* Header */}
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Sammy Fairways ⛳️
          </h1>
          <p className="text-muted-foreground">
            A personal log of golf courses I’ve played and every round at each one.
          </p>
        </header>

        {/* Actions */}
        <section className="flex gap-4">
          <button className="px-4 py-2 rounded-md bg-foreground text-background text-sm font-medium">
            Add Course
          </button>
          <button className="px-4 py-2 rounded-md border text-sm font-medium">
            Add Round
          </button>
        </section>

        {/* Courses list (placeholder) */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Courses Played</h2>

          <div className="border rounded-lg p-4 flex flex-col gap-2">
            <h3 className="font-medium">Pebble Beach Golf Links</h3>
            <p className="text-sm text-muted-foreground">
              Rounds played: 3
            </p>
          </div>

          <div className="border rounded-lg p-4 flex flex-col gap-2">
            <h3 className="font-medium">Augusta National</h3>
            <p className="text-sm text-muted-foreground">
              Rounds played: 1
            </p>
          </div>

          <p className="text-sm text-muted-foreground italic">
            Courses will load from Supabase soon.
          </p>
        </section>
      </div>
    </main>
  );
}
