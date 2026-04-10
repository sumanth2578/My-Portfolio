import Image from "next/image";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Top row: logo + info + period */}
        <div className={styles.top}>
          <div className={styles.logoWrap}>
            <Image
              src="/3.0labs-logo.png"
              alt="ThreePoint0Labs"
              width={64}
              height={64}
              className={styles.logo}
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.role}>Full Stack Web Developer</h3>
            <p className={styles.company}>ThreePoint0Labs</p>
          </div>
          <span className={styles.period}>Aug 2025 – Present</span>
        </div>

        <div className={styles.divider} />

        <p className={styles.description}>
          Building and managing websites using ReactJS and NextJS, integrating
          databases using Drizzle ORM, Supabase, and Tablebase.
        </p>

        <div className={styles.techPills}>
          {["React", "Next.js", "Drizzle ORM", "Supabase", "Tablebase"].map(
            (tech) => (
              <span key={tech} className={styles.pill}>{tech}</span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
