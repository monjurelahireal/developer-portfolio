const skills = [
  {
    category: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Python", "Flask", "REST APIs"],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "VS Code", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Technologies I work with.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="text-xl font-semibold">
                {skill.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}