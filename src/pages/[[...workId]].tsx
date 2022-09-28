import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

import WorkCard from "@/feature/work/components/WorkCard"
import WORKS from "@/feature/work/data"
import DefaultLayout from "@/view/layout/default"
import WorkDetail from "@/template/WorkDetail"

import type { NextPage } from "next"

const Index: NextPage = () => {
  const router = useRouter()
  const workId = router.query.workId?.[0]

  const work = WORKS.find((work) => work.title === workId)

  return (
    <DefaultLayout>
      {work != null ? (
        <AnimatePresence>
          <WorkDetail work={work} />
        </AnimatePresence>
      ) : (
        <div className="max-w-6xl p-2 mx-auto sm:p-8">
          <h1 className="text-3xl font-bold text-center font-heading">@yuta-ike</h1>
          <h2 className="mt-12 text-xl font-bold font-heading">就業型インターン</h2>
          <div className="flex p-1 mt-4 space-x-4 overflow-x-scroll">
            <section className="w-[360px] min-w-[300px] rounded-lg bg-white px-4 py-3 shadow">
              <h3 className="font-bold font-heading">SWEインターン@Mercari</h3>
              <p className="text-sm text-black/80">2022.09-10</p>
              <p className="mt-2 text-sm leading-loose text-black/80">
                メルカリShopsにて、フロントエンドやGraphQLリゾルバーなどを含むBFFの実装を担当しています。既存コードのリファクタリングなどにも積極的に取り組んでいます。
              </p>
            </section>
            <section className="w-[360px] min-w-[300px] rounded-lg bg-white px-4 py-3 shadow">
              <h3 className="font-bold font-heading">企画職インターン@LINE</h3>
              <p className="text-sm text-black/80">2021.08-09, 2022.03-08</p>
              <p className="mt-2 text-sm leading-loose text-black/80">
                LINE
                NEWS/Searchを担当する部署にてインターン・アルバイトを行いました。検索に関する新規企画の提案や、複数の組織が関わる開発の仕様策定・開発の進行などを担当しました。
              </p>
            </section>
            <section className="w-[360px] min-w-[300px] rounded-lg bg-white px-4 py-3 shadow">
              <h3 className="font-bold font-heading">SWEインターン@Pixiv</h3>
              <p className="text-sm text-black/80">2021.03-04</p>
              <p className="mt-2 text-sm leading-loose text-black/80">
                小説チームにて、下書き機能の実装や、既存コードへの厳密な型の導入などのリファクタリングを行いました。フロントエンド（React,
                Vue）、バックエンド（PHP）ともに取り組むことができました。
              </p>
            </section>
          </div>
          <h2 className="mt-12 text-xl font-bold font-heading">制作物</h2>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 mt-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-3">
            {WORKS.map((work, i) => (
              <WorkCard key={work.title} work={work} className="min-h-[250px]" />
            ))}
          </div>
        </div>
      )}
    </DefaultLayout>
  )
}

export default Index
