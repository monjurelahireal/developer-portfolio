"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-32">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
          >
            Monjur Elahi
            <span className="block text-zinc-500">
              Developer &amp; Problem Solver.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
          >
            I build practical software projects, explore modern technologies,
            and turn complex problems into functional solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-zinc-950 px-6 py-3 font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-300 px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}