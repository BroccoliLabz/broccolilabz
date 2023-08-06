import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <img
          className={styles.logo}
          src='images/broccolilabz.png'
          alt='BroccoliLabz Logo'
          width={400}
          height={400}
        />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <a
            href='https://github.com/BroccoliLabz'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={styles.code}>
              Github <span>-&gt;</span>
            </h2>
            <p className={styles.code}>Our Repositories are listed here.</p>
          </a>

          <a
            href='https://github.com/BroccoliLabz?tab=stars'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={styles.code}>
              Resources <span>-&gt;</span>
            </h2>
            <p className={styles.code}>
              The base resources we use for our projects.
            </p>
          </a>

          <Link href='/install' className={styles.card}>
            <h2 className={styles.code}>
              Install <span>-&gt;</span>
            </h2>
            <p className={styles.code}>
              A brief explanation on how to install and customize our projects
              for your own use.
            </p>
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <p className={styles.code}>
            by{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://portfolio.broccolibusiness.com/'
            >
              Abdullah &apos;Z&apos; Monaqil
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
