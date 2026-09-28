const projects = [
  {
    title: "MyVPN",
    description:
      "A Python-based VPN application project focused on networking, backend development, and application architecture.",
    technologies: ["Python", "Flask", "PySide6", "Networking"],
    status: "In Development",
  },
  {
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Development",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Selected Work
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Projects I&apos;m building.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-zinc-600 hover:bg-zinc-900"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                  {project.status}
                </span>
              </div>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <span className="text-sm font-medium text-white transition group-hover:text-zinc-300">
                  View Project →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}