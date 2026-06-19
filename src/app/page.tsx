import { brand, templates } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Templates />
      <Why />
      <CTA />
      <Footer />
    </div>
  );
}

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-8", className)}>
      {children}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="text-lg font-bold tracking-[0.3em]">
          {brand.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          <a href="#templates" className="hover:text-foreground">
            Templates
          </a>
          <a href="#why" className="hover:text-foreground">
            Why GAT
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href="#templates"
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Browse templates
        </a>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-28 md:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div
          className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
        />
      </div>
      <Container className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted">
          Premium website templates
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Launch a <span className="text-gradient">stunning website</span> in
          minutes
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          {brand.description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#templates"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Browse templates
          </a>
          <a
            href="#why"
            className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-accent/60"
          >
            How it works
          </a>
        </div>
      </Container>
    </section>
  );
}

function Templates() {
  return (
    <section id="templates" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            The collection
          </h2>
          <p className="mt-3 text-lg text-muted">
            Each template is production-ready, responsive and built to be edited
            from a single config file.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <article
              key={t.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* Fallback gradient behind the live preview */}
                <div
                  className="absolute inset-0 h-full w-full"
                  style={{ background: t.gradient }}
                />
                {t.status === "available" && t.demoUrl && t.demoUrl !== "#" ? (
                  <iframe
                    src={t.demoUrl}
                    title={`${t.name} live preview`}
                    loading="lazy"
                    tabIndex={-1}
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
                    style={{ width: "250%", height: "250%", transform: "scale(0.4)" }}
                  />
                ) : null}
                <span className="absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
                  {t.price}
                </span>
                {t.status === "soon" && (
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted backdrop-blur">
                    Coming soon
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-medium">{t.name}</h3>
                <p className="mt-1 text-sm text-accent-secondary">
                  {t.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {t.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 pt-2">
                  {t.status === "available" ? (
                    <>
                      <a
                        href={t.buyUrl ?? "#"}
                        className="flex-1 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                      >
                        Buy now
                      </a>
                      <a
                        href={t.demoUrl ?? "#"}
                        className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium transition-colors hover:border-accent/60"
                      >
                        Live demo
                      </a>
                    </>
                  ) : (
                    <span className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-sm text-muted">
                      Notify me
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

const features = [
  {
    title: "No cloning required",
    body: "Deploy straight to Vercel in one click, or import on the web. No terminal, no setup.",
  },
  {
    title: "Edit one file",
    body: "Change text, colors and links in a single config file to make any template your own.",
  },
  {
    title: "Built to perform",
    body: "Fast, accessible, SEO-ready code on a modern Next.js foundation.",
  },
  {
    title: "Yours forever",
    body: "Buy once, use on your own projects. Free updates to the template you bought.",
  },
];

function Why() {
  return (
    <section id="why" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Why GAT
          </h2>
          <p className="mt-3 text-lg text-muted">
            Designed for people who want a beautiful site without the headache.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-8">
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center md:p-16">
          <div
            className="absolute inset-0 -z-10 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, var(--accent), transparent 60%)",
            }}
          />
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to launch your next website?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
            Grab a template today, or reach out if you want something custom.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#templates"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              Browse templates
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent/60"
            >
              {brand.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="text-lg font-bold tracking-[0.3em]">{brand.name}</div>
          <p className="mt-2 text-sm text-muted">{brand.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-6 text-sm text-muted">
          {brand.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="text-xs text-muted">
          © {year} {brand.full}
        </span>
      </Container>
    </footer>
  );
}
