import "../styles/globals.css"
import { SWRConfig } from "swr"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"

import type { AppProps } from "next/app"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const s = document.createElement("script")
    if (s == null) {
      return
    }
    s.setAttribute("src", "https://platform.twitter.com/widgets.js")
    s.setAttribute("async", "true")
    document.head.appendChild(s)
  }, [])

  return (
    <SWRConfig>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </SWRConfig>
  )
}

export default MyApp
