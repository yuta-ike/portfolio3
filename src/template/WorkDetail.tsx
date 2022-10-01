import React from "react"
import { FiX, FiGithub, FiTwitter, FiFile, FiExternalLink, FiLink2 } from "react-icons/fi"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import Link from "next/link"
import classNames from "classnames"

import OuterLink from "@/view/common/OuterLink"
import { PRE_DEFINED_TECHS, Work } from "@/feature/work/type"

const Icons = {
  github: FiGithub,
  twitter: FiTwitter,
  slide: FiFile,
  others: FiLink2,
  demo: FiExternalLink,
} as const

export type WorkDetailProps = {
  work: Work
}

const WorkDetail: React.FC<WorkDetailProps> = ({ work }) => {
  const router = useRouter()

  const demoUrl = work.links?.find(({ type }) => type === "demo")
  const links = work.links?.filter(({ type }) => type !== "demo")

  const techStack = work.techStack?.map(({ category, techs }) => ({
    category:
      category === "frontend"
        ? ({ id: "frontend", label: "フロントエンド" } as const)
        : category === "backend"
        ? ({ id: "backend", label: "バックエンド" } as const)
        : category === "others"
        ? ({ id: "others", label: "その他" } as const)
        : category,
    techs: techs.map((tech) =>
      typeof tech === "string" ? { id: tech, label: PRE_DEFINED_TECHS[tech] } : tech,
    ),
  }))

  const periodStr =
    work.period == null
      ? null
      : typeof work.period === "string"
      ? work.period
      : work.period.end != null
      ? `${work.period.start} ~ ${work.period.end}`
      : `${work.period.start} ~ 現在`

  const durationStr =
    work.duration?.day != null
      ? `${work.duration.day}日`
      : work.duration?.week != null
      ? `${work.duration.week}週間`
      : `${work.duration?.month}か月`

  const tocs = [
    ...(work.sections?.map(({ heading }) => heading) ?? []),
    "開発期間",
    "担当",
    "メンバー",
    "発表",
  ]

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center justify-between p-4">
        <button
          onClick={() => {
            router.push("/")
          }}
        >
          <FiX size={48} className="text-stone-400" strokeWidth={1} />
        </button>
      </div>
      <div className="w-full max-w-6xl px-0 py-8 mx-auto sm:px-8">
        <motion.div
          layoutId={work.title}
          className="flex flex-col items-center justify-center space-y-8 h-max lg:flex-row lg:space-x-8"
        >
          <div className="relative flex max-w-3xl flex-col justify-center px-6 md:px-0 lg:mr-12 lg:max-w-md lg:py-[64px]">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row">
              <div>
                <h1 className="inline text-2xl font-bold font-heading">{work.title}</h1>
                <span className="ml-2 rounded-full border border-slate-400 py-0.5 px-2">
                  {work.type}
                </span>
              </div>
              {demoUrl != null && (
                <OuterLink
                  href={demoUrl.url}
                  className="flex items-center px-2 py-1 mx-2 mt-2 leading-none rounded w-max shrink-0 text-black/80 hover:bg-black/5"
                >
                  <FiExternalLink size={16} />
                  <span className="mt-0.5 ml-2 text-sm">アクセス</span>
                </OuterLink>
              )}
            </div>

            <p className="mt-3 leading-loose">{work.summary}</p>
            {work.awards != null && 0 < work.awards.length && (
              <div className="flex flex-wrap mt-2">
                {work.awards.map((award, i) => (
                  <motion.span
                    key={award}
                    className="block px-2 py-1 mt-2 mr-1 text-sm font-bold text-white bg-yellow-500 rounded-full w-max"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      bounce: 0.1,
                      duration: 0.8,
                      delay: i * 0.1 + 0.2,
                    }}
                  >
                    {award}
                  </motion.span>
                ))}
              </div>
            )}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                bounce: 0.1,
                duration: 0.2,
                delay: (work.awards?.length ?? 0) * 0.1 + 0.2,
              }}
              className="absolute bottom-0 right-0 hidden overflow-hidden transition border rounded-full w-max border-slate-300 hover:border-slate-400 lg:flex"
            >
              {links?.map((link) => {
                const Icon = Icons[link.type]
                return (
                  <OuterLink
                    key={link.url}
                    href={link.url}
                    className="block px-3 py-2 transition rounded-full text-stone-500 hover:bg-stone-100 hover:text-sky-500"
                  >
                    <Icon size={20} />
                  </OuterLink>
                )
              })}
            </motion.div>
          </div>
          <div className={classNames("relative mx-auto", "max-w-full")}>
            {work.movieUrl == null ? (
              // eslint-disable-next-line @next/next/no-img-element
              <motion.img
                // layoutId={`thumbnail-${work.title}`}
                src={work.imageUrl}
                alt=""
                className="object-fit mx-auto max-h-[640px]"
              />
            ) : (
              <motion.video
                // layoutId={`thumbnail-${work.title}`}
                src={
                  work.movieUrl?.startsWith("https://drive.google.com/file/d/")
                    ? `https://drive.google.com/uc?id=${
                        work.movieUrl?.match(
                          /https\:\/\/drive\.google\.com\/file\/d\/(?<fileId>(\w|-)+)/,
                        )?.groups?.fileId ?? ""
                      }&export=download`
                    : work.movieUrl
                }
                poster={work.imageUrl}
                controls
                autoPlay
                muted
                playsInline
                className="mx-auto max-h-[640px]"
              />
            )}
          </div>
          <div className="flex mx-6 ml-auto overflow-hidden transition border rounded-full w-max border-slate-300 hover:border-slate-400 sm:mx-auto lg:hidden">
            {links?.map((link) => {
              const Icon = Icons[link.type]
              return (
                <OuterLink
                  key={link.url}
                  href={link.url}
                  className="block px-3 py-2 transition rounded-full text-stone-500 hover:bg-stone-100 hover:text-sky-500"
                >
                  <Icon size={20} />
                </OuterLink>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.1,
            duration: 0.8,
            delay: ((work.awards?.length ?? 0) + 1) * 0.1 + 0.5,
          }}
          className="flex w-full px-6 mt-16 lg:mt-24"
        >
          <div className="sticky top-0 mr-8 hidden w-[16vw] shrink-0 text-sm text-black/70 sm:block">
            <h4 className="font-bold font-heading">目次</h4>
            <ol className="flex flex-col mt-2">
              {tocs.map((heading) => (
                <li key={heading}>
                  <Link href={`#${heading}`}>
                    <a className="block p-2 font-bold font-heading">{heading}</a>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col space-y-8">
            {work.sections?.map(({ heading, body }) => (
              <section key={heading}>
                <h4 id={heading} className="text-xl font-bold font-heading text-slate-800">
                  {heading}
                </h4>
                <p className="mt-2 leading-loose whitespace-pre-line">{body}</p>
              </section>
            ))}
            {work.techStack != null && (
              <section>
                <h4 id="利用技術" className="text-xl font-bold font-heading text-slate-800">
                  利用技術
                </h4>
                <p className="mt-2 leading-loose whitespace-pre-line">
                  {techStack
                    ?.map(
                      ({ category, techs }) =>
                        `・${category.label}: ${techs.map(({ label }) => label).join(", ")}`,
                    )
                    .join("\n")}
                </p>
              </section>
            )}
            {periodStr != null && (
              <section>
                <h4 id="開発期間" className="text-xl font-bold font-heading text-slate-800">
                  開発期間
                </h4>
                <p className="mt-2 leading-loose whitespace-pre-line">
                  {periodStr}
                  {durationStr != null && `（${durationStr}）`}
                </p>
              </section>
            )}
            <section>
              <h4 id="担当" className="text-xl font-bold font-heading text-slate-800">
                担当
              </h4>
              <p className="mt-2 leading-loose whitespace-pre-line">{work.roles?.join(", ")}</p>
            </section>
            <section>
              <h4 className="text-xl font-bold font-heading text-slate-800">メンバー</h4>
              <p className="mt-2 leading-loose whitespace-pre-line">
                {work.members.total}人
                {work.members.description != null &&
                  0 < work.members.description.length &&
                  `（${work.members.description}）`}
              </p>
            </section>
            {work.competition != null && (
              <section>
                <h4 id="発表" className="text-xl font-bold font-heading text-slate-800">
                  発表
                </h4>
                <p className="mt-2 leading-loose whitespace-pre-line">
                  {work.competition?.join(", ")}
                </p>
              </section>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WorkDetail
