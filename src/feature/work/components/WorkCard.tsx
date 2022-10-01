import React, { useState } from "react"
import Image from "next/future/image"
import classNames from "classnames"
import Link from "next/link"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

import { Work } from "../type"

export type WorkCardProps = {
  work: Work
  className?: string
}

const WorkCard: React.FC<WorkCardProps> = ({ work, className }) => {
  const size = 30 <= work.priority ? "x-large" : 20 <= work.priority ? "large" : "normal"

  // const [show, setShow] = useState(true)

  // const sectionRef = useCallback((target: HTMLDivElement) => {
  // if (target == null) {
  //   return
  // }
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     if (entries[0].isIntersecting) {
  //       setShow(true)
  //     } else {
  //       setShow(false)
  //     }
  //   },
  //   {
  //     root: null,
  //     rootMargin: "10% 0px -10% 0px",
  //     threshold: [0],
  //   },
  // )
  // observer.observe(target)
  // }, [])

  const [isExpanded, setIsExpanded] = useState(false)

  if (size === "large" || size === "x-large") {
    return (
      <LayoutGroup>
        <Link href={`/${work.title}`} passHref>
          <motion.a
            // layoutId={work.title}
            className={classNames(
              "w-full",
              size === "large" ? "sm:col-span-2" : "sm:col-span-2 lg:col-span-3",
            )}
            initial={false}
            animate={{ opacity: 0.5, y: 40 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
          >
            <section
              // ref={sectionRef}
              className={classNames(
                "flex h-full w-full flex-col-reverse items-center rounded-lg bg-white shadow transition duration-300 sm:flex-row",
                className,
              )}
            >
              <div className="flex-1 p-4 sm:mx-4">
                <div>
                  <h3 className="inline text-xl font-bold font-heading">{work.title}</h3>
                  <span className="ml-2 rounded-full border border-slate-400 py-0.5 px-2 text-sm">
                    {work.type}
                  </span>
                </div>
                <p className="mt-1 text-sm">{work.summary}</p>
                {work.awards != null && 0 < work.awards.length && (
                  <div className="flex flex-wrap mt-2">
                    {work.awards.map((award) => (
                      <span
                        key={award}
                        className="block px-2 py-1 mt-2 mr-1 text-sm font-bold text-white bg-yellow-500 rounded-full w-max"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <AnimatePresence>
                <motion.div
                  layoutId={`thumbnail-${work.title}`}
                  className="relative mr-4 h-full max-h-[90%] min-h-[200px] w-full flex-1 overflow-hidden rounded"
                >
                  <Image src={work.imageUrl} alt="" className="object-cover" sizes="100vw" fill />
                </motion.div>
              </AnimatePresence>
            </section>
          </motion.a>
        </Link>
      </LayoutGroup>
    )
  } else {
    return (
      <LayoutGroup>
        <Link href={`/${work.title}`} passHref>
          <motion.a
            className="w-full"
            // layoutId={work.title}
            animate={{ opacity: 0.5, y: 40 }}
            initial={false}
            whileInView={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                bounce: 0.1,
                duration: 0.8,
              },
            }}
            viewport={{ once: true }}
          >
            <section
              onClick={() => setIsExpanded(!isExpanded)}
              className={classNames(
                "h-full w-full rounded-lg bg-white shadow transition duration-300 sm:rounded-none sm:bg-transparent sm:shadow-none",
              )}
            >
              <motion.div
                layoutId={`thumbnail-${work.title}`}
                className="relative w-full aspect-video"
              >
                {work.layout?.blur ? (
                  <>
                    <Image
                      src={work.imageUrl}
                      alt=""
                      className="object-cover select-none blur-xl"
                      sizes="100vw"
                      fill
                      aria-hidden
                    />
                    <Image
                      src={work.imageUrl}
                      alt=""
                      className="object-contain"
                      sizes="100vw"
                      fill
                    />
                  </>
                ) : (
                  <Image src={work.imageUrl} alt="" className="object-cover" sizes="100vw" fill />
                )}
              </motion.div>
              <div className="p-4">
                <div>
                  <h3 className="inline text-xl font-bold font-heading">{work.title}</h3>
                  <span className="ml-2 rounded-full border border-slate-400 px-2 py-0.5 text-sm">
                    {work.type}
                  </span>
                </div>
                <p className="mt-1 text-sm">{work.summary}</p>
                {work.awards != null && 0 < work.awards.length && (
                  <div className="flex flex-wrap mt-2">
                    {work.awards.map((award) => (
                      <span
                        key={award}
                        className="block px-2 py-1 mt-2 mr-1 text-sm font-bold text-white bg-yellow-500 rounded-full w-max"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </motion.a>
        </Link>
      </LayoutGroup>
    )
  }
}

export default WorkCard
