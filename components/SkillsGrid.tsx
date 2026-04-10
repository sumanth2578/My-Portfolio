import Image from "next/image";
import styles from "./SkillsGrid.module.css";

const devSkills = [
  { name: "JS", icon: "/skill logos/Screenshot 2026-04-10 111134.png" },
  { name: "React", icon: "/skill logos/Screenshot 2026-04-10 111200.png" },
  { name: "Next", icon: "/skill logos/Screenshot 2026-04-10 111226.png" },
  { name: "Node", icon: "/skill logos/Screenshot 2026-04-10 111239.png" },
  { name: "PSQL", icon: "/skill logos/Screenshot 2026-04-10 111308.png" },
  { name: "Docker", icon: "/skill logos/Screenshot 2026-04-10 111355.png" },
  { name: "AWS", icon: "/skill logos/Screenshot 2026-04-10 111411.png" },
];

const analyticsSkills = [
  {
    name: "Python",
    svg: <svg viewBox="0 0 24 24" fill="#3776AB"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l5.93.02h5.93zm-3.44 1.18a.9.9 0 0 0-.87.87.88.88 0 0 0 .87.87.88.88 0 0 0 .87-.87.89.89 0 0 0-.87-.87zM20.84 15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02H23.77l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V7.94h3.06l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16L18 15.52h-5.93l.69-.05z"/></svg>
  },
  {
    name: "Tableau",
    svg: <svg viewBox="0 0 24 24" fill="#E97627"><path d="M11.654 0v2.311h-1.15V.577h-.769v1.734h-1.15V0h3.069zm6.346 2.984v2.312h-1.15V3.561h-.77v1.735h-1.15V2.984h3.07zM5.077 2.984v2.312H3.928V3.561h-.77v1.735H2.009V2.984h3.068zm6.577 3.093v2.312h-1.15V6.654h-.769v1.735h-1.15V6.077h3.069zM18 6.077v2.312h-1.15V6.654h-.77v1.735h-1.15V6.077H18zM5.077 6.077v2.312H3.928V6.654h-.77v1.735H2.009V6.077h3.068zm6.577 3.093v2.312h-1.15V9.747h-.769v1.735h-1.15V9.17h3.069zm6.346 0v2.312h-1.15V9.747h-.77v1.735h-1.15V9.17h3.07zM5.077 9.17v2.312H3.928V9.747h-.77v1.735H2.009V9.17h3.068zm6.577 3.093v2.312h-1.15v-1.735h-.769v1.735h-1.15v-2.312h3.069zm6.346 0v2.312h-1.15v-1.735h-.77v1.735h-1.15v-2.312h3.07zm-12.923 0v2.312H3.928v-1.735h-.77v1.735H2.009v-2.312h3.068zm6.577 3.093v2.312h-1.15v-1.735h-.769v1.735h-1.15v-2.312h3.069zm6.346 0v2.312h-1.15v-1.735h-.77v1.735h-1.15v-2.312h3.07zM5.077 15.356v2.312H3.928v-1.735h-.77v1.735H2.009v-2.312h3.068zm6.577 3.093v2.312h-1.15v-1.735h-.769v1.735h-1.15v-2.312h3.069zm-3.27 3.093V24h-1.15v-1.735h-.769V24h-1.15v-2.458h3.069z"/></svg>
  },
  {
    name: "Power BI",
    svg: <svg viewBox="0 0 24 24" fill="#F2C811"><path d="M10.286 12v9.714a2.286 2.286 0 0 1-2.286 2.286H6.857a2.286 2.286 0 0 1-2.286-2.286V12a2.286 2.286 0 0 1 2.286-2.286H8a2.286 2.286 0 0 1 2.286 2.286zm5.143-4.571v14.285a2.286 2.286 0 0 1-2.286 2.286h-1.143a2.286 2.286 0 0 1-2.286-2.286V7.429A2.286 2.286 0 0 1 12 5.143h1.143a2.286 2.286 0 0 1 2.286 2.286zm5.142-4.572V21.714A2.286 2.286 0 0 1 18.286 24h-1.143a2.286 2.286 0 0 1-2.286-2.286V2.857A2.286 2.286 0 0 1 17.143.571h1.143a2.286 2.286 0 0 1 2.285 2.286z"/></svg>
  },
  {
    name: "Excel",
    svg: <svg viewBox="0 0 24 24" fill="#217346"><path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3z"/></svg>
  },
];

interface Skill {
  name: string;
  icon?: string;
  svg?: React.ReactNode;
}

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className={styles.item}>
      <div className={styles.iconContainer}>
        {skill.icon ? (
          <Image
            src={skill.icon}
            alt={skill.name}
            width={60}
            height={60}
            className={styles.skillIcon}
          />
        ) : (
          <div className={styles.svgWrapper}>{skill.svg}</div>
        )}
      </div>
      <span className={styles.name}>{skill.name}</span>
    </div>
  );
}

export default function SkillsGrid() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h3 className={styles.sectionLabel}>Development</h3>
        <div className={styles.grid}>
          {devSkills.map((skill, i) => (
            <SkillItem key={i} skill={skill} />
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h3 className={styles.sectionLabel}>Data Analytics</h3>
        <div className={styles.grid}>
          {analyticsSkills.map((skill, i) => (
            <SkillItem key={i} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
