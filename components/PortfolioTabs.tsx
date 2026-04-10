"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PortfolioTabs.module.css";

const devProjects = [
  {
    title: "PM Agent – AI-Powered Project Management System",
    category: "AI Engineering",
    href: "/portfolio/pm-agent",
    image: "/pmagent images/Screenshot 2026-04-10 133057.png",
  },
  {
    title: "AI Voice Assistant for Task & Project Management",
    category: "Human-AI Interaction",
    href: "/portfolio/voice-assistant",
    image: "/voiceassistant images/Screenshot 2026-04-10 134118.png",
  },
];

const staticSites = [
  {
    title: "The Kohinoor Elite Living",
    category: "React · Client Website",
    href: "https://www.kohinooreliteliving.com/",
    image: "/static/Screenshot 2026-04-10 140934.png",
    external: true,
  },
  {
    title: "Alliance Digital",
    category: "React · Digital Agency",
    href: "https://allience-digital.vercel.app/",
    image: "/static/Screenshot 2026-04-10 140912.png",
    external: true,
  },
];

const analyticsProjects = [
  {
    title: "Sales Performance Dashboard",
    category: "Tableau · Data Visualization",
    href: "#",
    image: "",
  },
  {
    title: "Customer Churn Analysis",
    category: "Python · Pandas · Power BI",
    href: "#",
    image: "",
  },
];

type Tab = "development" | "analytics";

export default function PortfolioTabs() {
  const [active, setActive] = useState<Tab>("development");

  return (
    <div>
      {/* Tab buttons */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${active === "development" ? styles.tabActive : ""}`}
          onClick={() => setActive("development")}
        >
          Development
        </button>
        <button
          className={`${styles.tab} ${active === "analytics" ? styles.tabActive : ""}`}
          onClick={() => setActive("analytics")}
        >
          Data Analytics
        </button>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {active === "development" && (
          <div className={styles.fadeIn} key="dev">
            {/* AI Projects */}
            <div className={styles.grid}>
              {devProjects.map((p) => (
                <Link key={p.title} href={p.href} className={styles.card}>
                  <div className={styles.imgWrap}>
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className={styles.img}
                      />
                    )}
                    <div className={styles.overlay}>
                      <span className={styles.viewBtn}>View Case Study</span>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardCategory}>{p.category}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Static Sites */}
            <h4 className={styles.subLabel}>Static Websites</h4>
            <div className={styles.grid}>
              {staticSites.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.imgWrap}>
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className={styles.img}
                      />
                    )}
                    <div className={styles.overlay}>
                      <span className={styles.viewBtn}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                        Visit Site
                      </span>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardCategory}>{p.category}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {active === "analytics" && (
          <div className={styles.fadeIn} key="analytics">
            <div className={styles.grid}>
              {analyticsProjects.map((p) => (
                <div key={p.title} className={styles.card}>
                  <div className={styles.imgWrap}>
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className={styles.img}
                      />
                    ) : (
                      <div className={styles.placeholder}>Coming Soon</div>
                    )}
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardCategory}>{p.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
