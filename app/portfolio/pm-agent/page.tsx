import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import ImageCarousel from "@/components/ImageCarousel";
import styles from "./CaseStudy.module.css";

export default function PmAgentCaseStudy() {
  const techCategories = [
    {
      label: "Frontend",
      items: ["React (Vite)", "TypeScript", "TailwindCSS"],
    },
    {
      label: "Backend",
      items: ["Next.js", "Supabase (PostgreSQL)", "Row Level Security"],
    },
    {
      label: "AI / ML",
      items: ["Google Gemini", "Groq", "Whisper"],
    },
    {
      label: "APIs & Media",
      items: ["Recall API", "Web Audio API", "html2pdf.js"],
    },
  ];

  const features = [
    {
      number: "01",
      title: "Intelligent Ingestion & Transcription",
      description:
        "Seamlessly captures meeting audio through multiple channels and converts it into structured text.",
      details: [
        "Deploys virtual bots via the Recall API to autonomously join Google Meet/Zoom calls, record, and extract transcripts.",
        "Supports direct audio/video uploads up to 100MB for maximum flexibility.",
        "Utilizes the Web Audio API to chunk and downsample audio to 16kHz Mono in-browser, reducing payload sizes by up to 80%.",
      ],
      image: "/pmagent images/Screenshot 2026-04-10 133037.png",
      imageAlt: "Summarizer — meeting scheduling and calendar integration",
    },
    {
      number: "02",
      title: "Autonomous PM Artifacts",
      description:
        "Transforms raw meeting transcripts into structured, actionable agile documentation.",
      details: [
        "Analyzes meeting context to construct detailed PRDs outlining Objectives, Scope, and core requirements.",
        "Converts feature discussions into standard agile user stories with acceptance criteria.",
        "Distills action items into actionable sprint backlogs with estimated sizing.",
      ],
      image: "/pmagent images/Screenshot 2026-04-10 133057.png",
      imageAlt: "PM Dashboard — PRD Generator, User Stories, Sprint Planner tools",
    },
    {
      number: "03",
      title: "Resilient Architecture",
      description:
        "Enterprise-grade data layer built for security, consistency, and fault tolerance.",
      details: [
        "Engineered a robust database layer using Supabase with complex relational data kept perfectly synced.",
        "Strict Row Level Security (RLS) policies tied to Google Auth for proprietary data protection.",
        "Resilient query logic with fallback between user_id and user_email identifiers for schema integrity.",
      ],
      image: "/pmagent images/Screenshot 2026-04-10 133151.png",
      imageAlt: "Settings — account profile, bot config, and AI engine setup",
    },
    {
      number: "04",
      title: "Premium UX & Export",
      description:
        "Polished interface with powerful output capabilities for professional delivery.",
      details: [
        "Modern UI with micro-animations and ambient design language.",
        "In-browser markdown editing for rapid refinement of AI-generated content.",
        "One-click styled PDF exports combining html2pdf.js and react-markdown for branded reports.",
      ],
      image: "/pmagent images/Screenshot 2026-04-10 133114.png",
      imageAlt: "3.0 Agent — AI chatbot with conversation history",
    },
  ];

  const metrics = [
    { value: "95%", label: "Reduction in manual documentation time" },
    { value: "~80%", label: "Smaller audio payloads via in-browser processing" },
    { value: "100MB", label: "Max file upload supported" },
    { value: "3", label: "Artifact types generated per meeting" },
  ];

  return (
    <main className={styles.caseStudy}>
      <Navbar />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Case Study</span>
            <h1 className={styles.heroTitle}>PM Agent</h1>
            <p className={styles.heroSub}>
              An end-to-end AI tool that eliminates the manual overhead of
              post-meeting documentation — automating agile workflows from
              transcription to sprint planning.
            </p>

            <div className={styles.heroPills}>
              <span className={styles.heroPill}>AI Meeting Summarizer</span>
              <span className={styles.heroPill}>Agile Automation</span>
              <span className={styles.heroPill}>Full-Stack</span>
            </div>
          </div>

        </div>

        <div className={styles.heroGradient} aria-hidden="true" />
      </section>

      {/* ── Metrics Strip ── */}
      <section className={styles.metricsStrip}>
        <ScrollReveal variant="stagger-children" staggerDelay={0.12}>
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

      {/* ── Problem / Solution ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.splitGrid}>
            <ScrollReveal variant="fade-left">
              <div className={styles.splitCard}>
                <span className={styles.splitTag}>The Problem</span>
                <h2 className={styles.splitHeading}>
                  Meetings generate action — but documentation kills momentum.
                </h2>
                <p className={styles.splitText}>
                  Product Managers spend hours after every meeting manually
                  converting discussions into PRDs, user stories, and sprint
                  plans. This repetitive overhead delays execution, introduces
                  human error, and creates bottlenecks across the entire product
                  development cycle.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-right" delay={0.15}>
              <div className={styles.splitCard}>
                <span className={styles.splitTag}>The Solution</span>
                <h2 className={styles.splitHeading}>
                  An AI agent that turns conversations into structured artifacts
                  — instantly.
                </h2>
                <p className={styles.splitText}>
                  PM Agent autonomously joins meetings, transcribes audio in
                  real-time, and synthesizes the conversation into polished,
                  editable agile documents. From recording to sprint plan, the
                  entire pipeline is automated.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── App Showcase ── */}
      <section className={styles.showcase}>
        <div className={styles.sectionInner}>
          <ScrollReveal variant="fade-up">
            <h2 className={styles.sectionTitle}>The Application</h2>
          </ScrollReveal>
          <ScrollReveal variant="zoom-in" delay={0.15}>
            <ImageCarousel
              slides={[
                {
                  src: "/pmagent images/Screenshot 2026-04-10 133057.png",
                  alt: "PM Dashboard with AI-powered tools",
                  caption: "PM Dashboard — AI-powered tools for PRD generation, user stories, and sprint planning",
                },
                {
                  src: "/pmagent images/Screenshot 2026-04-10 133114.png",
                  alt: "3.0 Agent chatbot interface",
                  caption: "3.0 Agent — AI chat for brainstorming and meeting insights",
                },
                {
                  src: "/pmagent images/Screenshot 2026-04-10 133037.png",
                  alt: "Meeting summarizer with calendar",
                  caption: "Summarizer — Calendar sync and meeting scheduling",
                },
                {
                  src: "/pmagent images/Screenshot 2026-04-10 133124.png",
                  alt: "Summarizer home view",
                  caption: "Meeting Home — Schedule and sync upcoming events",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <ScrollReveal variant="fade-up">
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
          </ScrollReveal>
          <ScrollReveal variant="stagger-children" staggerDelay={0.1}>
            <div className={styles.techGrid}>
              {techCategories.map((cat) => (
                <div key={cat.label} className={styles.techCategory}>
                  <h3 className={styles.techCatLabel}>{cat.label}</h3>
                  <ul className={styles.techList}>
                    {cat.items.map((item) => (
                      <li key={item} className={styles.techItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Features Deep Dive ── */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <ScrollReveal variant="fade-up">
            <h2 className={styles.sectionTitle}>How It Works</h2>
          </ScrollReveal>
          <div className={styles.featureTimeline}>
            {features.map((feat, idx) => (
              <ScrollReveal
                key={feat.number}
                variant="fade-up"
                delay={idx * 0.08}
              >
                <div className={`${styles.featureCard} ${idx % 2 !== 0 ? styles.featureCardReverse : ""}`}>
                  <div className={styles.featureText}>
                    <div className={styles.featureHeader}>
                      <span className={styles.featureNumber}>{feat.number}</span>
                      <div>
                        <h3 className={styles.featureTitle}>{feat.title}</h3>
                        <p className={styles.featureDesc}>{feat.description}</p>
                      </div>
                    </div>
                    <ul className={styles.featureDetails}>
                      {feat.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.featureImgWrap}>
                    <Image
                      src={feat.image}
                      alt={feat.imageAlt}
                      width={600}
                      height={338}
                      className={styles.featureImg}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture Flow ── */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionInner}>
          <ScrollReveal variant="fade-up">
            <h2 className={styles.sectionTitle}>Architecture Flow</h2>
          </ScrollReveal>
          <ScrollReveal variant="zoom-in" delay={0.2}>
            <div className={styles.archFlow}>
              {[
                { step: "Meeting Audio", sub: "Recall API / Upload" },
                { step: "Audio Processing", sub: "Web Audio API — 16kHz Mono" },
                { step: "Transcription", sub: "Whisper via Groq" },
                { step: "AI Synthesis", sub: "Google Gemini" },
                { step: "Artifact Output", sub: "PRD / Stories / Sprint Plan" },
              ].map((item, i, arr) => (
                <React.Fragment key={item.step}>
                  <div
                    className={styles.archStep}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <span className={styles.archPulse} aria-hidden="true" />
                    <span className={styles.archStepNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.archStepTitle}>{item.step}</span>
                    <span className={styles.archStepSub}>{item.sub}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className={styles.archConnector} aria-hidden="true">
                      <span className={styles.archLine} />
                      <span
                        className={styles.archDot}
                        style={{ animationDelay: `${i * 0.4}s` }}
                      />
                      <svg
                        className={styles.archArrowHead}
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M1 1l5 4-5 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <footer className={styles.footer}>
        <div className={styles.sectionInner}>
          <ScrollReveal variant="fade-up">
            <p className={styles.footerTagline}>
              Interested in this project?
            </p>
            <div className={styles.footerLinks}>
              <a
                href="https://github.com/sumanth2578/PM-Agent"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "0.5rem", verticalAlign: "middle" }}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                View on GitHub
              </a>
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
