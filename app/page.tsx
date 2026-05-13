export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-16">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Scaffold v1
        </p>
        <h1 className="font-serif text-5xl leading-[1.02] tracking-normal text-foreground md:text-7xl">
          AI first starter template for content focused websites.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-muted-foreground">
          This baseline will become a config driven, section based Next.js scaffold with
          typed MDX content and hosting neutral defaults.
        </p>
      </div>
    </main>
  );
}
