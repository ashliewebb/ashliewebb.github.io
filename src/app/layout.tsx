import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import {ImageText} from "./components/ImageText/ImageText";
import "./globals.css";
import styles from "./page.module.scss";
import React from "react";


export const metadata: Metadata = {
  title: "Ashlie Webb | Product Designer • UX & UI",
  description: "",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,100,0,0&display=block" />
    </head>
    <body>
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.headerLogo}>
          <Image
              className={styles.logo}
              src="/aw-logo-leumang.svg"
              alt="Ashlie Webb Designs"
              width={108}
              height={46}
              priority
          />
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link href="/portfolio" className={styles.navigationLink}>Portfolio</Link>
            </li>
            <li>
              <Link href="/skills" className={styles.navigationLink}>Skills</Link>
            </li>
            <li>
              <Link href="/about" className={styles.navigationLink}>About</Link>
            </li>
            {/*<li>*/}
            {/*  <Link href="/contact" className={styles.navigationLink}>Work With Me</Link>*/}
            {/*</li>*/}
          </ul>
        </nav>
        <Link href="/contact" className="buttonPrimary">Work With Me</Link>

        {/*<Link href="/" className="buttonPrimary">Explore Templates & Tools</Link>*/}
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={`${styles.footer}`}>
        <ImageText
            image="/profile-photo.jpg"
            imageAlt="Ashlie Webb | Product Designer • UX & UI • Designs Systems"
            copy="<h2 class='heading heading2'>About Ashlie</h2><p>Product designer with a background in UX, UI, and front-end development. Designs with empathy, builds with clarity, and focuses on what works—for users, and for the teams behind the scenes.</p><p><a href='/about' class='buttonText'>More about Ashlie</a>">
        </ImageText>
        <div className={styles.footerContent}>
          <Link href="/contact" className="buttonPrimary">Work With Me</Link>
          <nav className={styles.footerMenu}>
            <ul>
              <li>
                <Link href="/portfolio" className={styles.footerLink}>Portfolio</Link>
              </li>
              <li>
                <Link href="/skills" className={styles.footerLink}>Skills</Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>About</Link>
              </li>
              {/*<li>*/}
              {/*  <Link href="/contact" className={styles.footerLink}>Work With Me</Link>*/}
              {/*</li>*/}
            </ul>
          </nav>
          <Link href="/" className={styles.footerLogo}>
            <Image
                className={styles.logo}
                src="/aw-logo-leumang.svg"
                alt="Ashlie Webb Designs"
                width={80}
                height={35}
                priority
            />
          </Link>
        </div>
        <p className={styles.footerCopyright}>&copy; Ashlie Webb 2025</p>
      </footer>
    </div>
    </body>
    </html>
  );
}
