import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

interface ProjectProps {
  title: string;
  category: string;
  image?: string;
  href?: string;
}

export default function ProjectCard({ title, category, image, href }: ProjectProps) {
  const cardContent = (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className={styles.cardImage}
          />
        )}
        <div className={styles.overlay}>
           <span className={styles.viewBtn}>View Project</span>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} className={styles.cardLink}>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
