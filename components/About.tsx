export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-200 bg-white text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Developer focused on learning and building.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-600 dark:text-zinc-400">
            <p className="leading-8">
              I&apos;m Monjur Elahi, a developer who enjoys building software
              projects and exploring modern technologies.
            </p>

            <p className="leading-8">
              I enjoy solving technical problems and turning ideas into
              working software.
            </p>

            <p className="leading-8">
              My current focus includes web development, Python, networking,
              software architecture, and modern development tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}