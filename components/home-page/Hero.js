import React from "react";
import Image from "next/image";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/giang.jpg"
          alt="An image showing Giang"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&#39;m Giang</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or NextJS.
      </p>
    </section>
  );
};

export default Hero;
