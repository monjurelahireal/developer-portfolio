export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Developer. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}