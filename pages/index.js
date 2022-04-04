import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ArtStrike</title>
        <meta name="description" content="Art Strike Game" />
        <link rel="icon" href="/artstrike-favicon.ico" />
      </Head>

      <main className={styles.main}>
          
          <h1 className={styles.title}>
            <Image src="/artstrike-mainlogo.png" alt="ArtStrike Logo" width="1430" height="520" layout="intrinsic" objectFit="contain"></Image>
          </h1>

          <p className={styles.description}>
              Coming Soon - April 4th
          </p>
        
      </main>

      <footer className={styles.footer}>
        <a>
          © ArtStrike 2022
        </a>
      </footer>
    </div>
  )
}
