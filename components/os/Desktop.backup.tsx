"use client";

import { useEffect, useState } from "react";
import ProjectsWindow from "./ProjectsWindow";
import TerminalWindow from "./TerminalWindow";

type SystemPanel =
  | "overview"
  | "hardware"
  | "network"
  | "runtime"
  | "software";

export default function Desktop() {
  const [time, setTime] = useState("");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [systemOpen, setSystemOpen] = useState(false);

  const [systemPanel, setSystemPanel] =
    useState<SystemPanel>("overview");

  const [cpuUsage, setCpuUsage] = useState(42);
  const [memoryUsage, setMemoryUsage] = useState(58);
  const [networkStatus, setNetworkStatus] = useState("Connected");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const refreshSystem = () => {
    setCpuUsage(Math.floor(Math.random() * 45) + 20);
    setMemoryUsage(Math.floor(Math.random() * 25) + 45);

    setNetworkStatus((current) =>
      current === "Connected" ? "Connected" : "Connected",
    );
  };

  const closeSystem = () => {
    setSystemOpen(false);
    setSystemPanel("overview");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] text-white">
      <div className="relative flex min-h-screen flex-col">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.08),transparent_30%)]" />

        {/* Desktop */}
        <div className="relative flex-1 p-8">
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
              onClick={() => {
                setSystemOpen(true);
                setSystemPanel("overview");
              }}
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

          {/* SYSTEM WINDOW */}
          {systemOpen && (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md sm:p-8">
              <section className="flex h-[min(760px,90vh)] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0d12] shadow-[0_25px_100px_rgba(0,0,0,0.7)]">

                {/* Window Header */}
                <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-[#0d1118] px-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10">
                      ⚙
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        System Settings
                      </p>

                      <p className="text-[11px] text-zinc-500">
                        Monjur OS
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={refreshSystem}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 transition hover:bg-white/10 hover:text-white"
                    >
                      ↻ Refresh
                    </button>

                    <button
                      type="button"
                      onClick={closeSystem}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-400/10 bg-red-500/5 text-zinc-400 transition hover:bg-red-500/20 hover:text-red-300"
                      aria-label="Close System"
                    >
                      ×
                    </button>
                  </div>
                </header>

                {/* Main Settings Layout */}
                <div className="flex min-h-0 flex-1">

                  {/* Sidebar */}
                  <aside className="hidden w-56 shrink-0 border-r border-white/10 bg-[#080b10] p-3 sm:block">
                    <div className="mb-4 px-3 pt-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                        System
                      </p>
                    </div>

                    <nav className="space-y-1">
                      <SystemNavButton
                        active={systemPanel === "overview"}
                        icon="▦"
                        label="Overview"
                        onClick={() =>
                          setSystemPanel("overview")
                        }
                      />

                      <SystemNavButton
                        active={systemPanel === "hardware"}
                        icon="▣"
                        label="Hardware"
                        onClick={() =>
                          setSystemPanel("hardware")
                        }
                      />

                      <SystemNavButton
                        active={systemPanel === "network"}
                        icon="⌁"
                        label="Network"
                        onClick={() =>
                          setSystemPanel("network")
                        }
                      />

                      <SystemNavButton
                        active={systemPanel === "runtime"}
                        icon="›_"
                        label="Runtime"
                        onClick={() =>
                          setSystemPanel("runtime")
                        }
                      />

                      <SystemNavButton
                        active={systemPanel === "software"}
                        icon="◈"
                        label="Software"
                        onClick={() =>
                          setSystemPanel("software")
                        }
                      />
                    </nav>

                    <div className="mt-8 border-t border-white/5 pt-4">
                      <div className="rounded-xl border border-emerald-400/10 bg-emerald-400/5 p-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                          <span className="text-xs font-medium text-emerald-400">
                            System Online
                          </span>
                        </div>

                        <p className="mt-2 text-[10px] leading-4 text-zinc-600">
                          Monjur OS is running normally.
                        </p>
                      </div>
                    </div>
                  </aside>

                  {/* Content */}
                  <div className="min-w-0 flex-1 overflow-y-auto">

                    {/* Mobile Navigation */}
                    <div className="flex gap-2 overflow-x-auto border-b border-white/10 bg-[#080b10] p-3 sm:hidden">
                      <MobileNavButton
                        active={systemPanel === "overview"}
                        label="Overview"
                        onClick={() =>
                          setSystemPanel("overview")
                        }
                      />

                      <MobileNavButton
                        active={systemPanel === "hardware"}
                        label="Hardware"
                        onClick={() =>
                          setSystemPanel("hardware")
                        }
                      />

                      <MobileNavButton
                        active={systemPanel === "network"}
                        label="Network"
                        onClick={() =>
                          setSystemPanel("network")
                        }
                      />

                      <MobileNavButton
                        active={systemPanel === "runtime"}
                        label="Runtime"
                        onClick={() =>
                          setSystemPanel("runtime")
                        }
                      />

                      <MobileNavButton
                        active={systemPanel === "software"}
                        label="Software"
                        onClick={() =>
                          setSystemPanel("software")
                        }
                      />
                    </div>

                    <div className="p-5 sm:p-8">

                      {/* OVERVIEW */}
                      {systemPanel === "overview" && (
                        <div>
                          <PageHeading
                            title="About this system"
                            description="View system information and current status."
                          />

                          {/* OS Hero */}
                          <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/5 p-6">
                            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-400/5 blur-3xl" />

                            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-3xl">
                                M
                              </div>

                              <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-emerald-400/70">
                                  Operating System
                                </p>

                                <h2 className="mt-1 text-2xl font-bold">
                                  Monjur OS
                                </h2>

                                <p className="mt-1 text-sm text-zinc-500">
                                  Developer Command Center
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Information Grid */}
                          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            <InfoCard
                              label="Status"
                              value="Online"
                              accent="text-emerald-400"
                            />

                            <InfoCard
                              label="Platform"
                              value="Web"
                            />

                            <InfoCard
                              label="Local Time"
                              value={time}
                            />

                            <InfoCard
                              label="Architecture"
                              value="64-bit"
                            />
                          </div>

                          {/* System Summary */}
                          <div className="mt-7">
                            <SectionTitle title="System resources" />

                            <div className="mt-3 grid gap-3 sm:grid-cols-2">

                              <ResourceCard
                                title="CPU"
                                value={`${cpuUsage}%`}
                                description="Current processor usage"
                                progress={cpuUsage}
                                onClick={() =>
                                  setSystemPanel("hardware")
                                }
                              />

                              <ResourceCard
                                title="Memory"
                                value={`${memoryUsage}%`}
                                description="Current memory usage"
                                progress={memoryUsage}
                                onClick={() =>
                                  setSystemPanel("hardware")
                                }
                              />

                              <ResourceCard
                                title="Network"
                                value={networkStatus}
                                description="Network connection"
                                onClick={() =>
                                  setSystemPanel("network")
                                }
                              />

                              <ResourceCard
                                title="Runtime"
                                value="Next.js"
                                description="React + TypeScript"
                                onClick={() =>
                                  setSystemPanel("runtime")
                                }
                              />

                            </div>
                          </div>
                        </div>
                      )}

                      {/* HARDWARE */}
                      {systemPanel === "hardware" && (
                        <div>
                          <PageHeading
                            title="Hardware"
                            description="Processor and memory information."
                          />

                          <div className="mt-7 space-y-4">

                            <DetailCard
                              icon="▣"
                              title="Processor"
                              subtitle="CPU"
                            >
                              <DetailRow
                                label="Status"
                                value="Active"
                              />

                              <DetailRow
                                label="Current usage"
                                value={`${cpuUsage}%`}
                              />

                              <DetailRow
                                label="Architecture"
                                value="64-bit"
                              />

                              <DetailRow
                                label="Cores"
                                value="8 logical processors"
                              />

                              <ProgressBar
                                value={cpuUsage}
                              />
                            </DetailCard>

                            <DetailCard
                              icon="▤"
                              title="Memory"
                              subtitle="RAM"
                            >
                              <DetailRow
                                label="Usage"
                                value={`${memoryUsage}%`}
                              />

                              <DetailRow
                                label="Used"
                                value="6.2 GB"
                              />

                              <DetailRow
                                label="Available"
                                value="4.5 GB"
                              />

                              <DetailRow
                                label="Total"
                                value="10.7 GB"
                              />

                              <ProgressBar
                                value={memoryUsage}
                              />
                            </DetailCard>

                          </div>
                        </div>
                      )}

                      {/* NETWORK */}
                      {systemPanel === "network" && (
                        <div>
                          <PageHeading
                            title="Network"
                            description="Connection and network interface information."
                          />

                          <div className="mt-7">
                            <div className="rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-6">
                              <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-xl">
                                  ⌁
                                </div>

                                <div>
                                  <p className="text-xs text-zinc-500">
                                    Connection status
                                  </p>

                                  <p className="mt-1 text-xl font-semibold text-emerald-400">
                                    {networkStatus}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                              <DetailRow
                                label="Interface"
                                value="Ethernet / Wi-Fi"
                              />

                              <DetailRow
                                label="IP Address"
                                value="Local Network"
                              />

                              <DetailRow
                                label="Connection"
                                value="Active"
                              />

                              <DetailRow
                                label="Latency"
                                value="12 ms"
                              />

                              <DetailRow
                                label="Protocol"
                                value="IPv4 / IPv6"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* RUNTIME */}
                      {systemPanel === "runtime" && (
                        <div>
                          <PageHeading
                            title="Runtime"
                            description="Application runtime and framework information."
                          />

                          <div className="mt-7 grid gap-3 sm:grid-cols-2">

                            <RuntimeCard
                              title="Next.js"
                              value="16.x"
                            />

                            <RuntimeCard
                              title="React"
                              value="19.x"
                            />

                            <RuntimeCard
                              title="TypeScript"
                              value="Enabled"
                            />

                            <RuntimeCard
                              title="Environment"
                              value="Production Ready"
                            />

                          </div>

                          <div className="mt-5 rounded-2xl border border-white/10 bg-[#080b10] p-5">
                            <p className="text-xs uppercase tracking-wider text-zinc-600">
                              Runtime stack
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <StackBadge label="Next.js" />
                              <StackBadge label="React" />
                              <StackBadge label="TypeScript" />
                              <StackBadge label="Tailwind CSS" />
                              <StackBadge label="App Router" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SOFTWARE */}
                      {systemPanel === "software" && (
                        <div>
                          <PageHeading
                            title="Software"
                            description="Monjur OS application information."
                          />

                          <div className="mt-7 space-y-3">

                            <SoftwareRow
                              name="Monjur OS"
                              description="Developer desktop environment"
                              version="1.0.0"
                            />

                            <SoftwareRow
                              name="Desktop Shell"
                              description="Monjur OS graphical shell"
                              version="1.0"
                            />

                            <SoftwareRow
                              name="System UI"
                              description="System settings interface"
                              version="1.0"
                            />

                          </div>

                          <div className="mt-7 rounded-2xl border border-white/10 bg-[#080b10] p-6">
                            <p className="text-xs uppercase tracking-wider text-zinc-600">
                              About
                            </p>

                            <p className="mt-3 text-sm leading-6 text-zinc-400">
                              Monjur OS is a web-based desktop environment
                              designed as a personal developer operating
                              system interface.
                            </p>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

                {/* Footer */}
                <footer className="flex shrink-0 items-center justify-between border-t border-white/10 bg-[#080b10] px-5 py-3">
                  <span className="text-[11px] text-zinc-600">
                    Monjur OS • System Settings
                  </span>

                  <span className="font-mono text-[11px] text-zinc-600">
                    {time}
                  </span>
                </footer>
              </section>
            </div>
          )}
        </div>

        {/* Desktop Footer */}
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

/* -------------------------------------------------------
   SYSTEM COMPONENTS
------------------------------------------------------- */

function SystemNavButton({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
        active
          ? "border border-white/10 bg-white/10 text-white"
          : "text-zinc-500 hover:bg-white/5 hover:text-zinc-200"
      }`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs ${
          active
            ? "bg-emerald-400/10 text-emerald-400"
            : "bg-white/5 text-zinc-600"
        }`}
      >
        {icon}
      </span>

      <span>{label}</span>
    </button>
  );
}

function MobileNavButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs transition ${
        active
          ? "bg-white/10 text-white"
          : "text-zinc-500 hover:bg-white/5 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function PageHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mt-1 text-sm text-zinc-500">
        {description}
      </p>
    </div>
  );
}

function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">
      {title}
    </h3>
  );
}

function InfoCard({
  label,
  value,
  accent = "text-white",
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#080b10] p-4">
      <p className="text-[10px] uppercase tracking-wider text-zinc-600">
        {label}
      </p>

      <p className={`mt-2 text-sm font-semibold ${accent}`}>
        {value}
      </p>
    </div>
  );
}

function ResourceCard({
  title,
  value,
  description,
  progress,
  onClick,
}: {
  title: string;
  value: string;
  description: string;
  progress?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-2xl border border-white/10 bg-[#080b10] p-5 text-left transition hover:border-white/20 hover:bg-[#0d1118]"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-zinc-600">
            {title}
          </p>

          <p className="mt-1 text-lg font-semibold">
            {value}
          </p>
        </div>

        <span className="text-xs text-zinc-700 transition group-hover:text-zinc-400">
          →
        </span>
      </div>

      {progress !== undefined && (
        <div className="mt-4">
          <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-emerald-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <p className="mt-3 text-xs text-zinc-600">
        {description}
      </p>
    </button>
  );
}

function DetailCard({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#080b10] p-5">
      <div className="flex items-center gap-3 border-b border-white/5 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-400">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="text-xs text-zinc-600">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        {children}
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 px-1 py-3 last:border-0">
      <span className="text-xs text-zinc-600">
        {label}
      </span>

      <span className="text-right text-xs font-medium text-zinc-300">
        {value}
      </span>
    </div>
  );
}

function ProgressBar({
  value,
}: {
  value: number;
}) {
  return (
    <div className="mt-4">
      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function RuntimeCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#080b10] p-5">
      <p className="text-xs text-zinc-600">
        {title}
      </p>

      <p className="mt-2 text-lg font-semibold">
        {value}
      </p>

      <div className="mt-4 h-1 rounded-full bg-emerald-400/20">
        <div className="h-full w-full rounded-full bg-emerald-400/60" />
      </div>
    </div>
  );
}

function StackBadge({
  label,
}: {
  label: string;
}) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">
      {label}
    </span>
  );
}

function SoftwareRow({
  name,
  description,
  version,
}: {
  name: string;
  description: string;
  version: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#080b10] p-5">
      <div className="min-w-0">
        <p className="font-medium">
          {name}
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          {description}
        </p>
      </div>

      <span className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-zinc-500">
        v{version}
      </span>
    </div>
  );
}