import React from "react"
import { FiX, FiGithub, FiTwitter, FiFile, FiExternalLink, FiLink2 } from "react-icons/fi"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import Link from "next/link"

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
      <div className="sticky top-0 z-10 p-4">
        <button className="" onClick={() => router.back()}>
          <FiX size={48} className="text-stone-400" strokeWidth={1} />
        </button>
      </div>

      <div className="w-full max-w-6xl p-2 mx-auto sm:p-8">
        <motion.div layoutId={work.title} className="flex space-x-8 h-max">
          <div className="relative flex flex-col justify-center">
            <div className="flex items-center justify-between w-full">
              <div>
                <h1 className="inline text-2xl font-bold font-heading">{work.title}</h1>
                <span className="ml-2 rounded-full border border-slate-400 py-0.5 px-2">
                  {work.type}
                </span>
              </div>
              {demoUrl != null && (
                <OuterLink
                  href={demoUrl.url}
                  className="flex items-center px-2 py-1 mt-2 mr-2 leading-none rounded hover:bg-black/5"
                >
                  <FiExternalLink size={20} />
                  <span className="mt-0.5 ml-2">アクセス</span>
                </OuterLink>
              )}
            </div>

            <p className="mt-3">{work.summary}</p>
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
            <div className="absolute bottom-0 right-0 flex overflow-hidden transition border rounded-full w-max border-slate-300 hover:border-slate-400">
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
          </div>
          <motion.div layoutId={`thumbnail-${work.title}`} className="relative w-[600px] shrink-0">
            <video
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
          </motion.div>
        </motion.div>
        <div className="flex w-full mt-24 space-x-8">
          <div className="sticky top-0 w-[240px] shrink-0 text-sm text-black/70">
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
        </div>
      </div>
    </div>
  )
}

export default WorkDetail
