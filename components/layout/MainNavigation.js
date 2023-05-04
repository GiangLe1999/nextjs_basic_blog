import Link from "next/link";
import React from "react";
import Logo from "./Logo";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Logo />
        </Link>
        <main>
          <ul>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </main>
      </header>
    </>
  );
};

export default MainNavigation;
