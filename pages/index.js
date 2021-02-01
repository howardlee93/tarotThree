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
        <h1 className={styles.title} >
          What does your cards say today?
        </h1>

        <Link href='/about'>
          <a>About</a>
        </Link>

         <Link href='/learn'>
          <a>Learn more about the tarot</a>
         </Link>
        </div>

        <Spread/>

      </main>

        <Footer/>
    </div>
  )
 }
