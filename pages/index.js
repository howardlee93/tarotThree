import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {Footer} from '../components/footer';
import Spread from '../components/spread_layout';



export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>Ask the stars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero_image}>
        <h1 className={styles.title} className={styles.hero_text}>
          What does your cards say today?

        </h1>
        </div>


        <Link href='/about'>
          <a>About</a>
        </Link>

         <Link href='/learn'>
          <a>Learn more about the tarot</a>
         </Link>
        
        
        <p className={styles.description}>
          Generate a three card spread
        </p>

        <Spread/>

      </main>

        <Footer/>
    </div>
  )
 }
