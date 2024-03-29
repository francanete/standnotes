import styles from "./MainFooter.module.scss";

export const MainFooter = () => {
  // get the current year
  const year = new Date().getFullYear();
  return (
    <footer className={styles["MainFooter"]}>
      <div className={styles["MainFooter__wrapper"]}>
        <span className={styles["MainFooter__name"]}>StandNotes</span>
        <p className={styles["MainFooter__main"]}>
          ©{year} —
          <a
            href="https://francanete.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            francanete.com
          </a>
        </p>
      </div>
    </footer>
  );
};
