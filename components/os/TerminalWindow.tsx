"use client";

import { useState } from "react";

type TerminalWindowProps = {
  onClose: () => void;
};

export default function TerminalWindow({
  onClose,
}: TerminalWindowProps) {
  const [command, setCommand] = useState("");

  const [lines, setLines] = useState<string[]>([
    "Welcome to Monjur OS Terminal.",
    "Type 'help' to see available commands.",
    "",
  ]);

  const runCommand = () => {
    const input = command.trim();

    if (!input) {
      return;
    }

    const cmd = input.toLowerCase();

    if (cmd === "clear") {
      setLines([]);
      setCommand("");
      return;
    }

    let output: string[];

    switch (cmd) {
      case "help":
        output = [
          "Available commands:",
          "",
          "  help      Show available commands",
          "  about     About the developer",
          "  whoami    Show developer identity",
          "  projects  Show projects",
          "  skills    Show development skills",
          "  stack     Show technology stack",
          "  contact   Show contact information",
          "  date      Show current date and time",
          "  clear     Clear terminal",
          "",
        ];
        break;

      case "about":
        output = [
          "About:",
          "",
          "Developer focused on web development,",
          "Python, networking, and practical software projects.",
          "",
        ];
        break;

      case "whoami":
        output = [
          "Identity:",
          "",
          "Name: Monjur",
          "Role: Web Developer / Builder",
          "Portfolio: Monjur OS",
          "",
        ];
        break;

      case "projects":
        output = [
          "Projects:",
          "",
          "1. MyVPN",
          "   Python-based networking application.",
          "",
          "2. Developer Portfolio",
          "   Interactive desktop-style portfolio.",
          "",
        ];
        break;

      case "skills":
        output = [
          "Skills:",
          "",
          "Frontend:",
          "  React",
          "  Next.js",
          "  TypeScript",
          "  Tailwind CSS",
          "",
          "Development:",
          "  Python",
          "  Git",
          "  GitHub",
          "  REST APIs",
          "",
        ];
        break;

      case "stack":
        output = [
          "Tech Stack:",
          "",
          "Framework:       Next.js",
          "UI Library:      React",
          "Language:        TypeScript",
          "Styling:         Tailwind CSS",
          "Programming:     Python",
          "Version Control: Git / GitHub",
          "",
        ];
        break;

      case "contact":
        output = [
          "Contact:",
          "",
          "Email:  elahireal3@gmail.com",
          "GitHub: github.com/monjurelahireal",
          "",
          "LinkedIn: Not added yet",
          "",
        ];
        break;

      case "date":
        output = [
          new Date().toLocaleString(),
          "",
        ];
        break;

      default:
        output = [
          `Command not found: ${input}`,
          "Type 'help' to see available commands.",
          "",
        ];
        break;
    }

    setLines((previous) => [
      ...previous,
      `monjur@developer-os:~$ ${input}`,
      ...output,
    ]);

    setCommand("");
  };

  return (
    <section className="flex h-[min(650px,85vh)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-[#080a0f] shadow-2xl">

      {/* Terminal Header */}

      <div className="flex shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <span className="font-mono text-sm text-zinc-300">
            Monjur Terminal
          </span>

        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
        >
          Close
        </button>

      </div>

      {/* Terminal Body */}

      <div className="flex-1 overflow-y-auto bg-black p-5 font-mono text-sm">

        {lines.map((line, index) => (
          <div
            key={`${index}-${line}`}
            className="min-h-5 whitespace-pre-wrap text-zinc-300"
          >
            {line}
          </div>
        ))}

        {/* Command Input */}

        <div className="mt-2 flex items-center">

          <span className="shrink-0 text-green-400">
            monjur@developer-os:~$
          </span>

          <input
            autoFocus
            type="text"
            value={command}
            onChange={(event) =>
              setCommand(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                runCommand();
              }
            }}
            className="ml-2 min-w-0 flex-1 border-0 bg-transparent text-white outline-none"
            placeholder="type command..."
            autoComplete="off"
            spellCheck={false}
          />

        </div>
      </div>
    </section>
  );
}