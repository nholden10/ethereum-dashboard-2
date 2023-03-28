import styles from "../styles/Home.module.css";

import MainDash from "../components/MainDash";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <MainDash />
      </main>
    </div>
  );
}
