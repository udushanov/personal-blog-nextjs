import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export default function Category({ params }) {
  return (
    <div>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>text</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image fill={true} src="" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
