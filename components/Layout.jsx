// components/Layout.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/styles.module.scss';

export default function Layout({ children }) {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>Counter App</div>
        <nav className={styles.navMenu}>
          <Link href="/">Home</Link>
          <Link href="/AboutUs">About Us</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
