import styles from "./Education.module.css";

const educationHistory = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Gitam University",
    duration: "2021 - 2025",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Pinegrove Junior College",
    duration: "2019 - 2021"
  }
];

export default function Education() {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.timeline}>
        {educationHistory.map((item) => (
          <div key={item.id} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.degree}>{item.degree}</h3>
              <h4 className={styles.institution}>{item.institution}</h4>
              <span className={styles.duration}>{item.duration}</span>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
