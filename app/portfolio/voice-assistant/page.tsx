import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import ImageCarousel from "@/components/ImageCarousel";
import styles from "./VoiceAssistant.module.css";

export default function VoiceAssistantCaseStudy() {
  const techStack = [
    { category: "Framework", items: ["Next.js 15 (App Router)", "React 19", "Create T3 App"] },
    { category: "Styling & UX", items: ["Tailwind CSS v4", "PWA (next-pwa)", "Geist Font"] },
    { category: "Backend", items: ["tRPC", "Prisma ORM", "PostgreSQL"] },
    { category: "AI & Voice", items: ["Groq SDK (LPU)", "Whisper STT", "Llama LLM"] },
  ];

  const features = [
    {
      number: "01",
      title: "Voice-First Interface",
      description: "Hands-free interaction powered by real-time speech recognition.",
      details: [
        "Browser-native Web Speech API captures voice input with zero setup required.",
        "Real-time transcription streams words as you speak — no waiting for processing.",
        "Contextual wake-word detection keeps the assistant responsive without constant listening.",
      ],
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className={styles.featureIcon}>
          <rect x="16" y="4" width="16" height="28" rx="8" />
          <path d="M10 24a14 14 0 0 0 28 0" />
          <line x1="24" y1="38" x2="24" y2="44" />
          <line x1="16" y1="44" x2="32" y2="44" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Ultra-Low Latency AI",
      description: "Groq's LPU inference engine delivers near-instant responses.",
      details: [
        "Groq SDK processes speech-to-text via Whisper models at hardware-accelerated speed.",
        "LLM responses generated through Llama with sub-second latency for natural conversation flow.",
        "Streaming responses render token-by-token so users see answers forming in real-time.",
      ],
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className={styles.featureIcon}>
          <circle cx="24" cy="24" r="20" />
          <path d="M24 12v12l8 4" />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Type-Safe Full Stack",
      description: "End-to-end type safety from database to UI with zero runtime overhead.",
      details: [
        "tRPC eliminates API boilerplate — procedures are called like local functions with full IntelliSense.",
        "Prisma ORM generates typed database clients with migration and seeding workflows built in.",
        "T3 stack convention ensures consistent patterns across the entire codebase.",
      ],
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className={styles.featureIcon}>
          <path d="M6 12h36M6 24h36M6 36h36" />
          <rect x="14" y="8" width="20" height="8" rx="2" fill="currentColor" opacity="0.15" />
          <rect x="10" y="20" width="28" height="8" rx="2" fill="currentColor" opacity="0.15" />
          <rect x="18" y="32" width="12" height="8" rx="2" fill="currentColor" opacity="0.15" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Progressive Web App",
      description: "Installable, offline-capable, and feels native on any device.",
      details: [
        "Service worker caching enables offline access and instant repeat loads.",
        "manifest.json configures home-screen install with custom icons and splash screens.",
        "Mobile-first viewport locked to prevent pinch-zoom — behaves like a native app.",
      ],
      icon: (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" className={styles.featureIcon}>
          <rect x="12" y="4" width="24" height="40" rx="4" />
          <line x1="12" y1="10" x2="36" y2="10" />
          <line x1="12" y1="38" x2="36" y2="38" />
          <circle cx="24" cy="42" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  const archSteps = [
    { label: "Voice Input", sub: "Web Speech API", position: "left" },
    { label: "Transcription", sub: "Groq Whisper (LPU)", position: "left" },
    { label: "tRPC Router", sub: "Type-safe procedures", position: "center" },
    { label: "LLM Processing", sub: "Llama via Groq", position: "right" },
    { label: "Streamed Response", sub: "Token-by-token UI", position: "right" },
  ];

  const metrics = [
    { value: "<200ms", label: "Voice-to-text latency" },
    { value: "100%", label: "Type-safe API surface" },
    { value: "PWA", label: "Installable on any device" },
    { value: "0", label: "API boilerplate with tRPC" },
  ];

  return (
    <main className={styles.page}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        {/* Sound wave background */}
        <div className={styles.waveContainer} aria-hidden="true">
          <div className={styles.wave} />
          <div className={`${styles.wave} ${styles.wave2}`} />
          <div className={`${styles.wave} ${styles.wave3}`} />
        </div>

        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>Case Study</span>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleLine}>Voice</span>
            <span className={styles.heroTitleLine}>Assistant</span>
          </h1>
          <p className={styles.heroSub}>
            A progressive web app that lets users create, assign, and
            track tasks entirely through voice — powered by Groq&apos;s
            ultra-low-latency LPU inference engine.
          </p>

          <div className={styles.heroPills}>
            <span className={styles.heroPill}>PWA</span>
            <span className={styles.heroPill}>Voice UI</span>
            <span className={styles.heroPill}>Real-Time AI</span>
            <span className={styles.heroPill}>T3 Stack</span>
          </div>

          {/* Animated mic visualizer */}
          <div className={styles.visualizer} aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className={styles.vizBar}
                style={{
                  animationDelay: `${i * 0.07}s`,
                  height: `${12 + Math.sin(i * 0.8) * 20}px`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Metrics ── */}
      <section className={styles.metricsStrip}>
        <ScrollReveal variant="stagger-children" staggerDelay={0.1}>
          <div className={styles.metricsInner}>
            {metrics.map((m) => (
              <div key={m.label} className={styles.metricCard}>
                <span className={styles.metricValue}>{m.value}</span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Overview ── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <ScrollReveal variant="fade-up">
            <div className={styles.overviewGrid}>
              <div className={styles.overviewMain}>
                <span className={styles.tag}>Overview</span>
                <h2 className={styles.heading2}>
                  A sleek, mobile-first AI assistant built on the modern T3 stack.
                </h2>
                <p className={styles.bodyText}>
                  The app was designed around a single principle: voice should be faster
                  than typing. Users speak naturally, and the AI handles transcription,
                  intent parsing, and task execution — all within a single conversational turn.
                  As a PWA, it installs from the browser and runs like a native app with
                  offline capabilities and home-screen presence.
                </p>
              </div>
              <div className={styles.overviewMeta}>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>Full-Stack Developer</span>
                </div>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>Methodology</span>
                  <span className={styles.metaValue}>Create T3 App</span>
                </div>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>Platform</span>
                  <span className={styles.metaValue}>Web / PWA (Mobile-First)</span>
                </div>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>AI Engine</span>
                  <span className={styles.metaValue}>Groq LPU — Whisper + Llama</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── App Showcase ── */}
      <section className={styles.showcase}>
        <div className={styles.inner}>
          <ScrollReveal variant="fade-up">
            <h2 className={styles.sectionTitle}>The Application</h2>
          </ScrollReveal>
          <ScrollReveal variant="zoom-in" delay={0.15}>
            <ImageCarousel
              slides={[
                {
                  src: "/voiceassistant images/Screenshot 2026-04-10 134109.png",
                  alt: "Voice Assistant — Tap to Speak interface",
                  caption: "Voice Interface — Tap to speak and control your workspace with voice commands",
                },
                {
                  src: "/voiceassistant images/Screenshot 2026-04-10 134118.png",
                  alt: "Task Dashboard with project cards",
                  caption: "Dashboard — View and manage tasks by assignee with search and filters",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <ScrollReveal variant="fade-up">
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
          </ScrollReveal>
          <ScrollReveal variant="stagger-children" staggerDelay={0.1}>
            <div className={styles.techGrid}>
              {techStack.map((cat) => (
                <div key={cat.category} className={styles.techCard}>
                  <h3 className={styles.techCatLabel}>{cat.category}</h3>
                  <ul className={styles.techList}>
                    {cat.items.map((item) => (
                      <li key={item} className={styles.techItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <ScrollReveal variant="fade-up">
            <h2 className={styles.sectionTitle}>Core Capabilities</h2>
          </ScrollReveal>
          <div className={styles.featuresGrid}>
            {features.map((feat, idx) => (
              <ScrollReveal key={feat.number} variant="fade-up" delay={idx * 0.1}>
                <div className={styles.featureCard}>
                  <div className={styles.featureTop}>
                    <div className={styles.featureIconWrap}>{feat.icon}</div>
                    <span className={styles.featureNum}>{feat.number}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureDesc}>{feat.description}</p>
                  <ul className={styles.featureDetails}>
                    {feat.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.inner}>
          <ScrollReveal variant="fade-up">
            <h2 className={styles.sectionTitle}>Architecture</h2>
          </ScrollReveal>
          <ScrollReveal variant="zoom-in" delay={0.2}>
            <div className={styles.archFlow}>
              {archSteps.map((step, i, arr) => (
                <React.Fragment key={step.label}>
                  <div className={styles.archStep} style={{ animationDelay: `${i * 0.15}s` }}>
                    <span className={styles.archNum}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.archLabel}>{step.label}</span>
                    <span className={styles.archSub}>{step.sub}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className={styles.archConnector} aria-hidden="true">
                      <span className={styles.archLine} />
                      <span className={styles.archDot} style={{ animationDelay: `${i * 0.4}s` }} />
                      <svg className={styles.archArrow} viewBox="0 0 12 10" fill="none">
                        <path d="M1 1l5 4-5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <ScrollReveal variant="fade-up">
            <p className={styles.footerTagline}>Explore this project</p>
            <div className={styles.footerLinks}>
              <Link href="/#work" className={styles.footerLink}>
                ← Back to Portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </main>
  );
}
