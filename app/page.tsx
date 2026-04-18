import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkillsGrid from "@/components/SkillsGrid";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import PortfolioTabs from "@/components/PortfolioTabs";
import IntroWrapper from "@/components/IntroWrapper";
import Chatbot from "@/components/Chatbot";
import styles from "./page.module.css";

export default function Home() {
  return (
    <IntroWrapper>
    <main>
      <Navbar />

      <Hero />

      {/* About Me Section */}
      <section id="about" className={`${styles.aboutSection} section`}>
        <div className="container">
          <ScrollReveal variant="fade-up">
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutHeader}>Meet Sumanth</h2>
              <p className={styles.aboutDescription}>
                Hello , I am glad you are here ,  Let me give a quick intro of me <br></br><br></br>
                I graduated in Computer Science with one obsession: making AI actually useful in everyday work.
                That led me to build PM Agent — a tool that turns messy meeting recordings into structured sprint
                plans — and a voice assistant that lets you manage projects without touching a keyboard. Alongside
                engineering, I completed a 6-month Data Analytics program — working with Python, Pandas, SQL, and
                visualization tools to turn raw data into actionable insights. I work across the full stack, from
                data pipelines to polished UIs, and I&apos;m always chasing the next hard problem.
              </p>
              <div className={styles.readMore}>
                <span className={styles.bar}>|</span>
                <Link href="#work" className={styles.readMoreLink}>VIEW MY WORK</Link>
                <span className={styles.bar}>|</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`${styles.experience} section`}>
        <div className="container">
          <ScrollReveal variant="zoom-in">
            <div className={styles.boxedHeadingContainer}>
              <h2 className={styles.boxedHeading}>Experience</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.2}>
            <Experience />
          </ScrollReveal>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`${styles.education} section`}>
        <div className="container">
          <ScrollReveal variant="zoom-in">
            <div className={styles.boxedHeadingContainer}>
              <h2 className={styles.boxedHeading}>Education</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left" delay={0.15}>
            <div className={styles.subheadingContainer}>
              <h3 className={styles.usingNow}>My Background:</h3>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left" delay={0.3}>
            <Education />
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${styles.skills} section`}>
        <div className="container">
          <ScrollReveal variant="zoom-in">
            <div className={styles.boxedHeadingContainer}>
              <h2 className={styles.boxedHeading}>Skills</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.15}>
            <SkillsGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="section">
        <div className="container">
          <ScrollReveal variant="fade-up">
            <h2 className="title-section">Portfolio</h2>
          </ScrollReveal>
          <PortfolioTabs />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`${styles.contact} section`}>
        <div className="container">
          <ScrollReveal variant="fade-up">
            <h2 className="title-section">Contact</h2>
          </ScrollReveal>
          <ScrollReveal variant="blur-in" delay={0.2}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <ScrollReveal variant="fade-up" duration={0.5}>
            <div className={styles.footerLinks}>
              {/* Social links placeholder */}
            </div>
            <p>© 2026 Sumanth Gandesiri. All rights reserved.</p>
          </ScrollReveal>
        </div>
      </footer>
    </main>
    <Chatbot />
    </IntroWrapper>
  );
}
