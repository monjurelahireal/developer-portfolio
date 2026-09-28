export default function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let&apos;s build something.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Have a project idea, question, or collaboration opportunity?
            Feel free to get in touch.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:your-email@example.com"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              Email Me
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}