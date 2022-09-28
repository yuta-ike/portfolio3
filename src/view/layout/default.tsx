import React from "react"
import { motion } from "framer-motion"
import Head from "next/head"

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}

export type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>yuta-ike</title>
        <meta name="description" content="yuta-ike" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
      <footer className="flex h-[160px] items-center justify-center bg-stone-100 font-heading font-bold">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          トップへ戻る
        </button>
      </footer>
    </>
  )
}

export default DefaultLayout
