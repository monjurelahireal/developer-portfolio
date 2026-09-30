"use client";

import { useEffect, useState } from "react";
import ProjectsWindow from "./ProjectsWindow";
import TerminalWindow from "./TerminalWindow";

type SystemPanel =
  | "overview"
  | "about"
  | "skills"
  | "stack"
  | "environment"
  | "contact";

type AboutDetail = "role" | "focus" | "portfolio" | null;

export default function Desktop() {
  const [time, setTime] = useState("");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);
  const [systemPanel, setSystemPanel] =
    useState<SystemPanel>("overview");

  const [aboutDetail, setAboutDetail] =
    useState<AboutDetail>(null);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const openSystemPanel = (panel: SystemPanel) => {
    setSystemPanel(panel);

    if (panel !== "about") {
      setAboutDetail(null);
    }

    setSystemOpen(true);
  };

  const openAbout = () => {
    setSystemPanel("about");
    setAboutDetail(null);
    setSystemOpen(true);
  };

  const closeSystem = () => {
    setSystemOpen(false);
    setSystemPanel("overview");
    setAboutDetail(null);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] text-white">
      <div className="relative flex min-h-screen flex-col">

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),transparent_30%)]" />

        <div className="relative flex-1 p-8">

          {/* Desktop Icons */}

          <div className="flex flex-col gap-4">

            {/* Projects */}

            <button
              type="button"
              onClick={() => setProjectsOpen(true)}
              className="group flex w-28 flex-col items-center gap-2 rounded-2xl p-3 transition hover:bg-white/5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/15 text-2xl transition group-hover:scale-105 group-hover:bg-blue-500/25">
                📁
              </div>

              <span className="text-sm text-zinc-400 group-hover:text-white">
                Projects
              </span>
            </button>

            {/* Terminal */}

            <button
              type="button"
              onClick={() => setTerminalOpen(true)}
              className="group flex w-28 flex-col items-center gap-2 rounded-2xl p-3 transition hover:bg-white/5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/15 font-mono text-lg transition group-hover:scale-105 group-hover:bg-purple-500/25">
                &gt;_
              </div>

              <span className="text-sm text-zinc-400 group-hover:text-white">
                Terminal
              </span>
            </button>

            {/* System */}

            <button
              type="button"
              onClick={() => openSystemPanel("overview")}
              className="group flex w-28 flex-col items-center gap-2 rounded-2xl p-3 transition hover:bg-white/5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-500/15 text-2xl transition group-hover:scale-105 group-hover:bg-emerald-500/25">
                ⚙
              </div>

              <span className="text-sm text-zinc-400 group-hover:text-white">
                System
              </span>
            </button>
          </div>

          {/* Projects Window */}

          {projectsOpen && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 p-8 backdrop-blur-sm">
              <ProjectsWindow
                onClose={() => setProjectsOpen(false)}
              />
            </div>
          )}

          {/* Terminal Window */}

          {terminalOpen && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
              <TerminalWindow
                onClose={() => setTerminalOpen(false)}
              />
            </div>
          )}

          {/* System Window */}

          {systemOpen && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

              <section className="flex h-[min(700px,90vh)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-[#0b0d12] shadow-2xl">

                {/* Header */}

                <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-5 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex gap-1.5">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>

                    <span className="text-sm text-zinc-300">
                      System
                    </span>

                  </div>

                  <button
                    type="button"
                    onClick={closeSystem}
                    className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                  >
                    Close
                  </button>

                </div>

                {/* Content */}

                <div className="flex min-h-0 flex-1 flex-col md:flex-row">

                  {/* Sidebar */}

                  <aside className="w-full shrink-0 border-b border-zinc-800 bg-zinc-950/70 p-3 md:w-56 md:border-b-0 md:border-r">

                    <div className="mb-3 px-3 py-2">
                      <p className="text-xs uppercase tracking-widest text-zinc-500">
                        Monjur OS
                      </p>

                      <p className="mt-1 text-sm text-zinc-300">
                        Developer Portfolio
                      </p>
                    </div>

                    <nav className="flex gap-1 overflow-x-auto md:flex-col">

                      {/* Overview */}

                      <button
                        type="button"
                        onClick={() =>
                          openSystemPanel("overview")
                        }
                        className={
                          systemPanel === "overview"
                            ? "whitespace-nowrap rounded-lg bg-white/10 px-3 py-2 text-left text-sm text-white"
                            : "whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
                        }
                      >
                        Overview
                      </button>

                      {/* About */}

                      <button
                        type="button"
                        onClick={openAbout}
                        className={
                          systemPanel === "about"
                            ? "whitespace-nowrap rounded-lg bg-white/10 px-3 py-2 text-left text-sm text-white"
                            : "whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
                        }
                      >
                        About
                      </button>

                      {/* Skills */}

                      <button
                        type="button"
                        onClick={() =>
                          openSystemPanel("skills")
                        }
                        className={
                          systemPanel === "skills"
                            ? "whitespace-nowrap rounded-lg bg-white/10 px-3 py-2 text-left text-sm text-white"
                            : "whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
                        }
                      >
                        Skills
                      </button>

                      {/* Tech Stack */}

                      <button
                        type="button"
                        onClick={() =>
                          openSystemPanel("stack")
                        }
                        className={
                          systemPanel === "stack"
                            ? "whitespace-nowrap rounded-lg bg-white/10 px-3 py-2 text-left text-sm text-white"
                            : "whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
                        }
                      >
                        Tech Stack
                      </button>

                      {/* Environment */}

                      <button
                        type="button"
                        onClick={() =>
                          openSystemPanel("environment")
                        }
                        className={
                          systemPanel === "environment"
                            ? "whitespace-nowrap rounded-lg bg-white/10 px-3 py-2 text-left text-sm text-white"
                            : "whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
                        }
                      >
                        Environment
                      </button>

                      {/* Contact */}

                      <button
                        type="button"
                        onClick={() =>
                          openSystemPanel("contact")
                        }
                        className={
                          systemPanel === "contact"
                            ? "whitespace-nowrap rounded-lg bg-white/10 px-3 py-2 text-left text-sm text-white"
                            : "whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
                        }
                      >
                        Contact
                      </button>

                    </nav>
                  </aside>

                  {/* Main Panel */}

                  <div className="min-h-0 flex-1 overflow-y-auto p-5 md:p-7">

                    {/* OVERVIEW */}

                    {systemPanel === "overview" && (
                      <div>

                        <div className="mb-7">

                          <p className="text-sm text-emerald-400">
                            System Online
                          </p>

                          <h1 className="mt-2 text-3xl font-bold tracking-tight">
                            Monjur OS
                          </h1>

                          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                            An interactive developer portfolio
                            interface designed to present projects,
                            skills, technologies, and development
                            information in a desktop-style experience.
                          </p>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                          <button
                            type="button"
                            onClick={openAbout}
                            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-zinc-600 hover:bg-zinc-900"
                          >
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Profile
                            </p>

                            <h2 className="mt-2 text-lg font-semibold">
                              About Me
                            </h2>

                            <p className="mt-2 text-sm leading-5 text-zinc-500">
                              Developer profile and current focus.
                            </p>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              openSystemPanel("skills")
                            }
                            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-zinc-600 hover:bg-zinc-900"
                          >
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Expertise
                            </p>

                            <h2 className="mt-2 text-lg font-semibold">
                              Skills
                            </h2>

                            <p className="mt-2 text-sm leading-5 text-zinc-500">
                              Development areas and capabilities.
                            </p>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              openSystemPanel("stack")
                            }
                            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-zinc-600 hover:bg-zinc-900"
                          >
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Technologies
                            </p>

                            <h2 className="mt-2 text-lg font-semibold">
                              Tech Stack
                            </h2>

                            <p className="mt-2 text-sm leading-5 text-zinc-500">
                              Frameworks, languages, and tools.
                            </p>
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              openSystemPanel("environment")
                            }
                            className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-zinc-600 hover:bg-zinc-900"
                          >
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Workspace
                            </p>

                            <h2 className="mt-2 text-lg font-semibold">
                              Environment
                            </h2>

                            <p className="mt-2 text-sm leading-5 text-zinc-500">
                              Development setup and workflow.
                            </p>
                          </button>

                        </div>
                      </div>
                    )}

                    {/* ABOUT */}

                    {systemPanel === "about" && (
                      <div>

                        <p className="text-sm text-emerald-400">
                          Profile
                        </p>

                        <h1 className="mt-2 text-3xl font-bold">
                          About Me
                        </h1>

                        <p className="mt-3 text-sm text-zinc-400">
                          Explore my developer profile and current focus.
                        </p>

                        {aboutDetail === null ? (

                          <div className="mt-6 grid gap-4">

                            {/* Role */}

                            <button
                              type="button"
                              onClick={() =>
                                setAboutDetail("role")
                              }
                              className="group rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-emerald-500/50 hover:bg-zinc-900"
                            >
                              <p className="text-xs uppercase tracking-wider text-zinc-500">
                                Role
                              </p>

                              <p className="mt-2 text-lg font-semibold">
                                Web Developer
                              </p>

                              <p className="mt-2 text-xs text-zinc-500 group-hover:text-emerald-400">
                                Click to view details →
                              </p>
                            </button>

                            {/* Focus */}

                            <button
                              type="button"
                              onClick={() =>
                                setAboutDetail("focus")
                              }
                              className="group rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-blue-500/50 hover:bg-zinc-900"
                            >
                              <p className="text-xs uppercase tracking-wider text-zinc-500">
                                Focus
                              </p>

                              <p className="mt-2 text-lg font-semibold">
                                Web Applications
                              </p>

                              <p className="mt-2 text-xs text-zinc-500 group-hover:text-blue-400">
                                Click to view details →
                              </p>
                            </button>

                            {/* Portfolio */}

                            <button
                              type="button"
                              onClick={() =>
                                setAboutDetail("portfolio")
                              }
                              className="group rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-left transition hover:border-purple-500/50 hover:bg-zinc-900"
                            >
                              <p className="text-xs uppercase tracking-wider text-zinc-500">
                                Portfolio
                              </p>

                              <p className="mt-2 text-lg font-semibold">
                                Monjur OS
                              </p>

                              <p className="mt-2 text-xs text-zinc-500 group-hover:text-purple-400">
                                Click to view details →
                              </p>
                            </button>

                          </div>

                        ) : (

                          <div className="mt-6 rounded-2xl border border-zinc-700 bg-zinc-950 p-6">

                            <button
                              type="button"
                              onClick={() =>
                                setAboutDetail(null)
                              }
                              className="mb-6 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                            >
                              ← Back
                            </button>

                            {/* ROLE DETAIL */}

                            {aboutDetail === "role" && (
                              <div>

                                <p className="text-xs uppercase tracking-widest text-emerald-400">
                                  Role
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                  Web Developer
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                                  Focused on building modern web
                                  applications and interactive user
                                  interfaces. The goal is to create
                                  practical, responsive, and useful
                                  digital experiences.
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                                    <p className="text-xs text-zinc-500">
                                      Primary Area
                                    </p>

                                    <p className="mt-1 font-medium">
                                      Web Development
                                    </p>
                                  </div>

                                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                                    <p className="text-xs text-zinc-500">
                                      Interface
                                    </p>

                                    <p className="mt-1 font-medium">
                                      Interactive UI
                                    </p>
                                  </div>

                                </div>
                              </div>
                            )}

                            {/* FOCUS DETAIL */}

                            {aboutDetail === "focus" && (
                              <div>

                                <p className="text-xs uppercase tracking-widest text-blue-400">
                                  Focus
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                  Web Applications
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                                  Building modern web applications,
                                  interactive interfaces, and practical
                                  developer tools. The focus is on
                                  creating projects that are useful,
                                  responsive, and easy to explore.
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-3">

                                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                                    <p className="text-xs text-zinc-500">
                                      Development
                                    </p>

                                    <p className="mt-1 font-medium">
                                      Web Apps
                                    </p>
                                  </div>

                                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                                    <p className="text-xs text-zinc-500">
                                      Interface
                                    </p>

                                    <p className="mt-1 font-medium">
                                      UI / UX
                                    </p>
                                  </div>

                                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                                    <p className="text-xs text-zinc-500">
                                      Projects
                                    </p>

                                    <p className="mt-1 font-medium">
                                      Developer Tools
                                    </p>
                                  </div>

                                </div>
                              </div>
                            )}

                            {/* PORTFOLIO DETAIL */}

                            {aboutDetail === "portfolio" && (
                              <div>

                                <p className="text-xs uppercase tracking-widest text-purple-400">
                                  Portfolio
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                  Monjur OS
                                </h2>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                                  Monjur OS is an interactive developer
                                  portfolio interface designed as a
                                  desktop-style experience. It provides
                                  a different way to explore projects,
                                  skills, technologies, development
                                  environment, and contact information.
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                                    <p className="text-xs text-zinc-500">
                                      Interface
                                    </p>

                                    <p className="mt-1 font-medium">
                                      Desktop Style
                                    </p>
                                  </div>

                                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                                    <p className="text-xs text-zinc-500">
                                      Technology
                                    </p>

                                    <p className="mt-1 font-medium">
                                      Next.js + React
                                    </p>
                                  </div>

                                </div>
                              </div>
                            )}

                          </div>
                        )}

                      </div>
                    )}

                    {/* SKILLS */}

                    {systemPanel === "skills" && (
                      <div>

                        <p className="text-sm text-emerald-400">
                          Expertise
                        </p>

                        <h1 className="mt-2 text-3xl font-bold">
                          Skills
                        </h1>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">

                          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">

                            <h2 className="font-semibold">
                              Frontend
                            </h2>

                            <div className="mt-4 flex flex-wrap gap-2">

                              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                                React
                              </span>

                              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                                Next.js
                              </span>

                              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                                TypeScript
                              </span>

                              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                                Tailwind CSS
                              </span>

                            </div>
                          </div>

                          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">

                            <h2 className="font-semibold">
                              Development
                            </h2>

                            <div className="mt-4 flex flex-wrap gap-2">

                              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                                Python
                              </span>

                              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                                Git
                              </span>

                              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                                GitHub
                              </span>

                              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
                                REST APIs
                              </span>

                            </div>
                          </div>

                        </div>
                      </div>
                    )}

                    {/* TECH STACK */}

                    {systemPanel === "stack" && (
                      <div>

                        <p className="text-sm text-emerald-400">
                          Technologies
                        </p>

                        <h1 className="mt-2 text-3xl font-bold">
                          Tech Stack
                        </h1>

                        <div className="mt-6 space-y-3">

                          {[
                            ["Framework", "Next.js"],
                            ["UI Library", "React"],
                            ["Language", "TypeScript"],
                            ["Styling", "Tailwind CSS"],
                            ["Programming", "Python"],
                            ["Version Control", "Git / GitHub"],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-4"
                            >
                              <span className="text-sm text-zinc-500">
                                {label}
                              </span>

                              <span className="text-sm font-medium text-zinc-200">
                                {value}
                              </span>
                            </div>
                          ))}

                        </div>
                      </div>
                    )}

                    {/* ENVIRONMENT */}

                    {systemPanel === "environment" && (
                      <div>

                        <p className="text-sm text-emerald-400">
                          Workspace
                        </p>

                        <h1 className="mt-2 text-3xl font-bold">
                          Development Environment
                        </h1>

                        <div className="mt-6 grid gap-4 sm:grid-cols-2">

                          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Operating System
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                              Windows
                            </p>
                          </div>

                          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Editor
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                              VS Code
                            </p>
                          </div>

                          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Runtime
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                              Node.js
                            </p>
                          </div>

                          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Package Manager
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                              npm
                            </p>
                          </div>

                        </div>
                      </div>
                    )}

                    {/* CONTACT */}

                    {systemPanel === "contact" && (
                      <div>

                        <p className="text-sm text-emerald-400">
                          Communication
                        </p>

                        <h1 className="mt-2 text-3xl font-bold">
                          Contact
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                          Connect with me through email or professional
                          platforms.
                        </p>

                        <div className="mt-6 grid gap-4 sm:grid-cols-3">

                          {/* Email */}

                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=elahireal3@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-emerald-500/50 hover:bg-zinc-900"
                          >
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              Email
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                              Email Me
                            </p>

                            <p className="mt-2 break-all text-xs text-zinc-500 group-hover:text-emerald-400">
                              elahireal3@gmail.com
                            </p>

                            <p className="mt-2 text-xs text-zinc-600">
                              Click to open Gmail
                            </p>
                          </a>

                          {/* GitHub */}

                          <a
                            href="https://github.com/monjurelahireal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-blue-500/50 hover:bg-zinc-900"
                          >
                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              GitHub
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                              GitHub Profile
                            </p>

                            <p className="mt-2 break-all text-xs text-zinc-500 group-hover:text-blue-400">
                              github.com/monjurelahireal
                            </p>

                            <p className="mt-2 text-xs text-zinc-600">
                              Click to open GitHub
                            </p>
                          </a>

                          {/* LinkedIn */}

                          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">

                            <p className="text-xs uppercase tracking-wider text-zinc-500">
                              LinkedIn
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                              LinkedIn Profile
                            </p>

                            <p className="mt-2 text-xs text-zinc-500">
                              LinkedIn URL not added yet
                            </p>

                          </div>

                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </section>
            </div>
          )}

        </div>

        {/* Bottom Bar */}

        <footer className="relative flex h-16 items-center justify-between border-t border-white/10 bg-zinc-950/90 px-6 backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 font-bold">
              M
            </div>

            <span className="text-sm font-semibold">
              Monjur OS
            </span>

          </div>

          <span className="text-sm text-zinc-400">
            {time}
          </span>

        </footer>

      </div>
    </main>
  );
}