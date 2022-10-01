import React from "react"
import Head from "next/head"

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
      <main>{children}</main>
      <footer className="flex h-[160px] items-center justify-center bg-stone-100 font-heading font-bold">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          トップへ戻る
        </button>
      </footer>
    </>
  )
}

export default DefaultLayout
