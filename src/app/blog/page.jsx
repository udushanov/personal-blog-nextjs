import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <Link href="/blog/testId" className={styles.container}>
        <div>
          <Image width={400} height={250} alt="img" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
    </div>
  );
}
