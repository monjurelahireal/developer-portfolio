import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            Developer Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Building useful software
            <span className="text-zinc-500"> with code.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I build software projects, experiment with new technologies,
            and solve problems through code.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Projects
          </h2>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h3 className="text-2xl font-semibold">MyVPN</h3>

            <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
              A Python-based VPN application project focused on learning
              networking, backend development, and application architecture.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Let&apos;s build something.
          </h2>
        </div>
      </section>
    </main>
  );
}