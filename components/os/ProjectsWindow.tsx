"use client";

import { useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  github: string | null;
};

type ProjectsWindowProps = {
  onClose: () => void;
};

const projects: Project[] = [
  {
    title: "MyVPN",
    description:
      "A Python-based VPN application project focused on networking, backend development, and application architecture.",
    technologies: [
      "Python",
      "Flask",
      "PySide6",
      "Networking",
    ],
    status: "In Development",
    github: null,
  },
  {
    title: "Developer Portfolio",
    description:
      "An interactive developer portfolio designed as a desktop-style operating system experience.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    status: "Active",
    github:
      "https://github.com/monjurelahireal/developer-portfolio",
  },
];

export default function ProjectsWindow({
  onClose,
}: ProjectsWindowProps) {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const closeDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section className="flex h-[min(700px,90vh)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-[#0b0d12] text-white shadow-2xl">

      {/* Header */}

      <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Monjur OS
            </p>

            <h2 className="text-sm font-semibold text-zinc-200">
              Projects
            </h2>
          </div>

        </div>

        <div className="flex items-center gap-3">

          <span className="hidden rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-xs text-zinc-400 sm:block">
            {projects.length} Projects
          </span>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
          >
            Close
          </button>

        </div>
      </div>

      {/* Main Content */}

      <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-7">

        {!selectedProject ? (

          <div>

            <div className="mb-6">

              <p className="text-sm text-blue-400">
                Developer Workspace
              </p>

              <h1 className="mt-2 text-3xl font-bold">
                Projects
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                Explore projects, technologies, development status,
                and source code.
              </p>

            </div>

            {/* Project Cards */}

            <div className="grid gap-4 md:grid-cols-2">

              {projects.map((project) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-zinc-600 hover:bg-zinc-900"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="text-xs uppercase tracking-widest text-zinc-500">
                        Project
                      </p>

                      <h2 className="mt-2 text-xl font-semibold text-white">
                        {project.title}
                      </h2>
                    </div>

                    <span className="shrink-0 rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-400">
                      {project.status}
                    </span>

                  </div>

                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-zinc-800 px-2.5 py-1.5 text-xs text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  <p className="mt-5 text-xs text-zinc-600 transition group-hover:text-zinc-300">
                    Click to view project details →
                  </p>

                </button>
              ))}

            </div>

          </div>

        ) : (

          /* Project Details */

          <div>

            <button
              type="button"
              onClick={closeDetails}
              className="mb-6 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              ← Back to Projects
            </button>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div>

                  <p className="text-xs uppercase tracking-widest text-blue-400">
                    Project Details
                  </p>

                  <h1 className="mt-2 text-3xl font-bold">
                    {selectedProject.title}
                  </h1>

                </div>

                <span className="w-fit rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-400">
                  {selectedProject.status}
                </span>

              </div>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400">
                {selectedProject.description}
              </p>

              {/* Technologies */}

              <div className="mt-8">

                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Technologies
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  {selectedProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300"
                      >
                        {technology}
                      </span>
                    ),
                  )}

                </div>

              </div>

              {/* Project Information */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">

                  <p className="text-xs text-zinc-500">
                    Status
                  </p>

                  <p className="mt-2 font-medium text-white">
                    {selectedProject.status}
                  </p>

                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">

                  <p className="text-xs text-zinc-500">
                    Source Code
                  </p>

                  <p className="mt-2 font-medium text-white">
                    {selectedProject.github
                      ? "Available on GitHub"
                      : "Repository not added yet"}
                  </p>

                </div>

              </div>

              {/* GitHub */}

              {selectedProject.github ? (

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  View on GitHub →
                </a>

              ) : (

                <div className="mt-8 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/40 p-4">

                  <p className="text-sm font-medium text-zinc-300">
                    GitHub repository not available yet.
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    The project is currently under development.
                  </p>

                </div>

              )}

            </div>

          </div>

        )}

      </div>
    </section>
  );
}