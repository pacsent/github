import Head from "next/head"
import NavBar from "molecules/NavBar/NavBar"
import styles from "./Layout.module.scss"

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Github React Issues</title>
        <meta name="description" content="Github React Issues" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <NavBar />
      </nav>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Copyright 2021 NG</footer>
    </div>
  )
}

export default Layout
