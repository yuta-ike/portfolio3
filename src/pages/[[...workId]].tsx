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
          <h1 className="text-3xl font-bold font-heading">制作物</h1>
          <div className="grid grid-flow-row-dense grid-cols-1 gap-4 mt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-3">
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
