import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Install() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href='/' className={styles.card}>
          <h2 className={styles.code}>
            <span>&lt;-</span> Back
          </h2>
          <p className={styles.code}>Back to homepage.</p>
        </Link>
      </div>
      {/* <div className={styles.center}>
        <h2>Coming Soon</h2>
      </div> */}
      <div className={styles.grid}>
        <div className={styles.content}>
          <img
            className={styles.logo}
            src='images/repocopy.png'
            alt='BroccoliLabz Logo'
            width={620}
            height={300}
          />
        </div>
        <div className={styles.card}>
          Copy repo URL to git command{' '}
          <p
            value='git https://github.com/BroccoliLabz/dementia-react-sass-portfolio.git mypotfolio'
            className={styles.code}
          >
            git
            https://github.com/BroccoliLabz/dementia-react-sass-portfolio.git
            mypotfolio
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.content}>
          <img
            className={styles.logo}
            src='images/npmproject.png'
            alt='BroccoliLabz Logo'
            width={620}
            height={200}
          />
        </div>
        <div className={styles.card}>
          <p className={styles.code}>cd mypotfolio</p> and
          <p value='npm install' className={styles.code}>
            npm install
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.card}>Customization will be updated soon.</span>
      </div>
    </main>
  );
}
