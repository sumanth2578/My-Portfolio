import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>Name</label>
        <input type="text" className={styles.input} placeholder="Enter your name" />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input type="email" className={styles.input} placeholder="Enter your email" />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Message</label>
        <textarea className={styles.textarea} placeholder="Enter your message" rows={5}></textarea>
      </div>
      <button type="submit" className={styles.submit}>Submit</button>
    </form>
  );
}
