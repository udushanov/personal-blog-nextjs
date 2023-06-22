import Image from "next/image";
import styles from "./page.module.css";

export default function BlogPost() {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            ipsum sunt repudiandae labore aliquid eligendi tempore aliquam nemo!
            Ullam facere eveniet molestiae nesciunt deserunt reiciendis dolorum
            illum quam quo autem. Maxime illo quidem fugiat in itaque rem
            quaerat molestias sit?
          </p>
          <div className={styles.author}>
            <Image alt="img" width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image alt="img" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nisi
          fugit quo sapiente libero obcaecati quod consequatur, beatae adipisci
          ratione itaque natus ducimus molestias. Sed molestiae ipsa, minima
          reprehenderit atque eveniet iste quos accusantium eum praesentium
          tenetur illum modi aspernatur, ad veritatis reiciendis nostrum, vero
          autem unde rem repudiandae aliquid!
        </p>
      </div>
    </div>
  );
}
