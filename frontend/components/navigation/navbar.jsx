import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.alchemy_logo} src="/loogie transparent.png"></img>
      <ConnectButton></ConnectButton>
    </nav>
  );
}
