export const PRE_DEFINED_TECHS = {
  typescript: "TypeScript",
  react: "React",
  nextjs: "Next.js",
  tailwindcss: "Tailwind.css",
  vuejs: "Vue.js",
  nuxtjs: "Nuxt.js",
  firebase_auth: "Firebase Auth",
  vercel: "Vercel",
  heroku: "Heroku",
  aws: "AWS",
  hasura: "Hasura",
  firestore: "Firestore",
  firebase_storage: "Firebase Storage",
  python: "Python",
  django: "Django",
  flask: "Flask",
  liff: "LIFF",
  express: "Express",
  fastify: "Fastify",
  typeorm: "TypeORM",
  github_actions: "github_actions",
  graphql: "GraphQL",
  docker: "docker",
  nodejs: "Node.js",
  redis: "Redis",
  postgresql: "PostgresQL",
  mysql: "MySQL",
  gas: "Google App Script",
  dart: "Dart",
  flutter: "Flutter",
  javascript: "JavaScript",
  electron: "Electron",
  unity: "Unity",
}

export type Work = {
  priority: number
  type: "Web" | "Native App" | "Game" | "Desktop"
  title: string
  summary: string
  description?: string
  awards?: string[]
  imageUrl: string
  movieUrl?: string
  period?:
    | `${number}-${number}`
    | {
        start: `${number}-${number}`
        end?: `${number}-${number}`
      }
  duration?: {
    month?: number
    week?: number
    day?: number
  }
  links?: {
    type: "github" | "twitter" | "demo" | "slide" | "others"
    url: string
    label: string
  }[]

  selfTweet?: string
  competition?: string[]
  members: {
    total: number
    description: string
  }
  techStack?: {
    category:
      | "frontend"
      | "backend"
      | "others"
      | {
          id: string
          label: string
        }
    techs: (
      | keyof typeof PRE_DEFINED_TECHS
      | {
          label: string
          id: string
        }
    )[]
  }[]
  sections?: {
    heading: string
    body: string
  }[]
  roles?: string[]
  layout?: {
    blur?: boolean
  }
}
