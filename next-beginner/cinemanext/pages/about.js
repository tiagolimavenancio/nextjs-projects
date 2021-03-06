import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About({ author, github }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>CineMax</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About CineMax</h1>
        <label>
          Bonieky channel Live example to demonstrate the first steps with the
          Next.js framework
        </label>
        <hr />
        <pre>Author: {author}</pre>
        <pre>GitHub: {github}</pre>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      author: "Tiago Lima",
      github: "https://github.com/tiagolimavenancio",
    },
  };
}
