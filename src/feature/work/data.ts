import { Work } from "./type"

// 再生開始時間

const WORKS: Work[] = [
  {
    priority: 30,
    type: "Web",
    title: "ふろちゃでぼっと",
    summary:
      "LINE Botを作成できる教育用ビジュアルプログラミングツールです。プログラムが即時に実機に反映されるほか、実行フローがリアルタイムで可視化されるなど、子供たちが躓くことのないよう工夫しています。",
    awards: ["技育展2022 チーム開発 最優秀賞"],
    imageUrl: "/line-bot-maker/demo.gif",
    movieUrl:
      "https://user-images.githubusercontent.com/38308823/191561558-c18b676f-7e45-47d8-a7a7-d9b90227e9d7.mp4",
    period: {
      start: "2022-07",
      end: "2022-9",
    },
    duration: {
      month: 3,
    },
    links: [
      {
        url: "https://github.com/yuta-ike/line-bot-maker-front",
        label: "github",
        type: "github",
      },
      {
        url: "https://twitter.com/geek_pjt/status/1573209783695704064?s=20&t=t-va0ke-_PHbag8UutPzoA",
        label: "twitter",
        type: "twitter",
      },
    ],
    competition: ["大学の実習", "技育展"],
    members: { total: 6, description: "フロント4人、バックエンド2人" },
    roles: ["リーダー", "ノードエディタ", "プログラムの実行処理", "LIFF繋ぎこみ"],
    techStack: [
      {
        category: "frontend",
        techs: [
          "typescript",
          "nextjs",
          "tailwindcss",
          "liff",
          { label: "MUI", id: "mui" },
          "vercel",
          { label: "LINE Login", id: "line_login" },
          { label: "LINE Bot", id: "line_bot" },
        ],
      },
      {
        category: "backend",
        techs: [
          "typescript",
          "react",
          "nextjs",
          "tailwindcss",
          { label: "MUI", id: "mui" },
          "vercel",
        ],
      },
      {
        category: "others",
        techs: ["github_actions"],
      },
    ],
    sections: [
      {
        heading: "貢献",
        body: `・ビジュアルエディタのプロトタイプの作成と、UIのブラッシュアップ
・ビジュアルプログラムの実行処理や、JSON形式での実行状態の保持などを実装
・プロジェクトリーダー`,
      },
      {
        heading: "技術的工夫点",
        body: `・ビジュアルプログラミングのノードエディタをほぼフルスクラッチで自作
・LIFF / LINE Messaging API / Share・Target Picker / Deep Linkなどを利用し、シームレスなUXを実現
・ビジュアルプログラムの実行処理をNode.jsで作成し、フロントにBundleするほか、FunctionsとしてデプロイしサーバーからHTTPS経由で利用可能にした`,
      },
    ],
  },
  {
    priority: 30,
    type: "Web",
    title: "Voice Tag",
    summary:
      "PDF上の好きな場所に音声付箋を残し、他の人にシェアできるサービスです。文字で説明するには大変、テキストベースだとニュアンスや温度感が伝わらない、というシチュエーションで活躍します。",
    awards: ["JPHacks 4位", "イノベーター認定", "日立コンサルティング賞", "KDDI賞"],
    imageUrl: "/voice-tag/demo.png",
    movieUrl: "https://drive.google.com/file/d/1UXv9dv-x4fHQktSrwWDFD8oFag37dqoD/view",
    period: {
      start: "2022-10",
      end: "2022-11",
    },
    duration: {
      week: 3,
    },
    links: [
      { url: "https://github.com/jphacks/F_2108", label: "github", type: "github" },
      {
        url: "https://twitter.com/Selria1/status/1454373947231797252?s=20&t=GoR74oKS2ybYlRaGepLhzQ",
        label: "twitter",
        type: "twitter",
      },
      {
        url: "https://docs.google.com/presentation/d/1k9OKzgEupLBzkmyd6TjX5fwokXsRn2yfYxU2xsJLMv0/edit#slide=id.g4dfce81f19_0_45",
        label: "slide",
        type: "slide",
      },
    ],
    competition: ["JPHacks"],
    members: { total: 6, description: "フロント3人、バックエンド1人、デザイナー・企画2人" },
    roles: ["リーダー", "フロント"],
    techStack: [
      {
        category: "frontend",
        techs: [
          "typescript",
          "react",
          "nextjs",
          "tailwindcss",
          { label: "Konva.js", id: "konvajs" },
          { label: "PDF.js", id: "pdfjs" },
          "vercel",
        ],
      },
      {
        category: "backend",
        techs: [
          "typescript",
          "fastify",
          "tailwindcss",
          "typeorm",
          { label: "ImageMagick", id: "imagemagick" },
          "aws",
        ],
      },
      {
        category: "others",
        techs: ["firebase_auth", "firebase_storage", "github_actions"],
      },
    ],
    sections: [
      {
        heading: "貢献",
        body: `・音声波形のUI・アニメーションの実装
・PDFの表示、録音、音声メモの表示のUI・アニメーションの実装
・プロジェクトリーダー`,
      },
      {
        heading: "概要",
        body: `Voice Tagは、PDFファイル上に自分の声を付箋として残し、共有できるサービスです。

1. 共有したいPDFファイルをアップロードします。
2. ファイル上の任意の場所をクリックして、音声の付箋を残しましょう。
3. ファイルをチームに共有しましょう。チームメンバーも新たな付箋を追加したり、既存の付箋にコメントを追加したりすることができます。

アプリで、チームメンバーの音声をながら聴きできることでタスク効率化や心理的安全性の向上に寄与します。`,
      },
      {
        heading: "解決出来ること",
        body: `・タスクの効率化：音声ベースのコミュニケーションでは、複雑な事柄を簡潔に伝えやすい、音声情報は脳で処理されやすい、ながら聴きによって可処分時間も多い、といった特徴があります。テキストでは説明に文字数がかかってしまう場合でも、音声ならば、より簡潔かつ的確に伝えることができます。また、テキストであれば文体や言い回しに過度に気を遣ってしまいますが、音声では普段話すように説明することができます。

・心理的安全性：音声でチームメンバーとコミュニケーションを図ることでチーム内の心理的安全性をもたらします。（テキストでは相手のテンションや気持ちが伝わりづらいですよね）
`,
      },
    ],
  },
  {
    priority: 10,
    type: "Web",
    title: "ZOOM DECO",
    summary:
      "ZOOMの集合写真をデコレーションできるサービスです。人物の自動切り取りや、スタンプや背景を設定する機能を実装しています。",
    awards: ["技育CAMPハッカソンvol.1 最優秀賞"],
    imageUrl: "/zoom-deco/demo.png",
    movieUrl: "https://drive.google.com/file/d/17v2owIQoGY_UN7h8Elh6CuAGuuxkPwPF/view?usp=sharing",
    period: "2021-04",
    duration: {
      week: 1,
    },
    links: [
      {
        url: "https://github.com/yuta-ike/zoom-shot-decorator",
        label: "github",
        type: "github",
      },
      {
        url: "https://twitter.com/geek_pjt/status/1373612269456617472?s=20&t=6d-7EcPu98O7reN4R7UaIg",
        label: "twitter",
        type: "twitter",
      },
      {
        url: "https://docs.google.com/presentation/d/1-xtdbDLxhUxX520VFBZEALeU8x_qbi7l/edit?usp=sharing&ouid=110469674242767571994&rtpof=true&sd=true",
        label: "slide",
        type: "slide",
      },
    ],
    competition: ["技育CAMPハッカソンvol.1"],
    members: {
      total: 4,
      description: "フロント1人、バックエンド1人、画像処理1人、イラストレーター1人",
    },
    roles: ["リーダー", "フロント"],
    techStack: [
      {
        category: "frontend",
        techs: ["typescript", "react", "nextjs", "tailwindcss"],
      },
      {
        category: "backend",
        techs: ["python", "flask", "aws"],
      },
      {
        category: {
          label: "画像処理",
          id: "image_process",
        },
        techs: [
          "python",
          { label: "OpenCV", id: "opencv" },
          { label: "TensorFlow", id: "tensorflow" },
        ],
      },
    ],
    sections: [
      {
        heading: "概要",
        body: `ZOOMの集合写真をデコーレーションできるサービスです。写っている人物ごとに写真を分割し、自動で背景を削除するため、自由に人物を配置することができます。自作した背景やイラストと組み合わせることで、賑やかな集合写真を作ることができます。`,
      },
      {
        heading: "技術的工夫点",
        body: `・画像処理の実行中に、フロントエンドでユーザーに背景やスタンプを選んでもらうことで、画像処理の実質的な待ち時間を軽減した
・人物の切り抜き精度を高めるため、ユーザーに事前に用意したフレームに写真を合わせてもらう操作を追加した
・スタンプや人物の配置画面を自作した`,
      },
      {
        heading: "貢献",
        body: `・フロントエンド全般`,
      },
    ],
  },
  {
    priority: 10,
    type: "Web",
    title: "GitDeck",
    summary:
      "複数のGithubレポジトリの更新内容を、TwitterDeckのようにマルチカラム画面で閲覧できるサービスです。",
    awards: ["技育展2021 開発・スキル支援 最優秀賞", "技育CAMPハッカソンvol.5 最優秀賞"],
    imageUrl: "/git-deck/demo.png",
    movieUrl:
      "https://user-images.githubusercontent.com/34413567/134767993-63f1ecb0-d04f-4234-973f-c3415f34ff38.mov",
    period: "2021-06",
    duration: {
      week: 2,
    },
    links: [
      { url: "https://github.com/git-deck/git-deck", label: "github", type: "github" },
      {
        url: "https://twitter.com/chomado/status/1446741326834196481?s=20&t=fGFRWKEYbxk_QDRwlBMxEA",
        label: "twitter",
        type: "twitter",
      },
      { url: "https://git-deck-720f1.web.app/", label: "プロダクト", type: "demo" },
      {
        url: "https://docs.google.com/presentation/d/1gaIuLKgB1BZHXGivJvaIdvWa7A8XjAG1gczU-KWtSA0/edit#slide=id.gf2a8ff186d_0_68",
        label: "slide",
        type: "slide",
      },
    ],
    competition: ["技育展", "技育CAMPハッカソンvol.5"],
    members: { total: 4, description: "" },
    roles: ["フロント"],
    techStack: [
      {
        category: "frontend",
        techs: ["typescript", "vuejs", "nuxtjs", { label: "markdown-it", id: "markdownit" }],
      },
      {
        category: "others",
        techs: [
          { label: "Github API", id: "github_api" },
          "graphql",
          "firebase_auth",
          { label: "Firebase Hosting", id: "firebase_hosting" },
        ],
      },
    ],
    sections: [
      {
        heading: "特徴",
        body: `・IssueやPullRequestの作成、それらについたコメントをタイムラインに表示します。さらに、Issue/PullRequestのオープン状態やラベルでフィルタリングし、タイムラインをカスタマイズすることもできます
・TweetDeckのようにカラムの順番を入れ替えたり、カラムの幅を調整したりできます`,
      },
      {
        heading: "貢献",
        body: `・アイディア出し
・UI実装・ブラッシュアップ
・Githubのレポジトリ選択画面のUIとAPI呼び出し部分の実装`,
      },
    ],
  },
  {
    priority: 30,
    type: "Web",
    title: "sushi-chat",
    summary:
      "オンラインイベントの発表会に特化したリアルタイムチャットです。ブラウザ上で簡単に利用でき、匿名投稿やスタンプ機能などを実装しています。実際に技育CAMPハッカソンで利用していただいています。",
    awards: ["技育CAMP ハッカソンvol.2 最優秀賞"],
    imageUrl: "/sushi-chat/demo.jpg",
    movieUrl: "https://drive.google.com/file/d/1aj56ikvxYTFNjIuhN5npZJxA4pcDiAr5/view?usp=sharing",
    period: {
      start: "2021-04",
      end: "2022-03",
    },
    duration: {
      month: 11,
    },
    links: [
      {
        url: "https://github.com/osushi-academy/sushi-chat",
        label: "github",
        type: "github",
      },
      { url: "https://twitter.com/osushi_academy", label: "twitter", type: "twitter" },
      {
        url: "https://docs.google.com/presentation/d/13OtJ0H5vhCsOU-l7iE5xGe0poKZJvt8x/edit?usp=sharing&ouid=110469674242767571994&rtpof=true&sd=true",
        label: "slide",
        type: "slide",
      },
      { url: "https://www.sushi-chat.com/", label: "プロダクト", type: "demo" },
    ],
    competition: ["技育CAMPハッカソンvol.2", "技育展 事業化目指してます部門"],
    members: { total: 5, description: "フロント2.5人、バックエンド2.5人" },
    roles: ["フロント", "サーバー"],
    techStack: [
      {
        category: "frontend",
        techs: [
          "typescript",
          "vuejs",
          "nuxtjs",
          "docker",
          "vercel",
          { label: "SocketIO", id: "socketio" },
        ],
      },
      {
        category: "backend",
        techs: [
          "typescript",
          "nodejs",
          "express",
          "aws",
          { label: "SocketIO", id: "socketio" },
          "redis",
          "postgresql",
        ],
      },
      {
        category: "others",
        techs: ["github_actions"],
      },
    ],
    sections: [
      {
        heading: "概要",
        body: `ハッカソンの発表会のような、オンラインイベントに特化したチャットサービスです。ハートスタンプでのリアクションやQ&Aの投稿、いいね、リプライ、チャット履歴のダウンロード、ピン留めなどを実装しています。

セッションごとにチャット欄を移動していくスタイルのため、自分の発表時に来たコメントを見返すことができます。実際に技育CAMPハッカソンで利用していただいています。

また、管理画面も作成し、チャット全体の管理や統計データの閲覧が可能になっています。`,
      },
      {
        heading: "技術的工夫点",
        body: `・スタンプが連打されることを想定し、一定時間ごとにスタンプデータをバッチ配信するようにした
・フロントとサーバーで利用する共通のAPI型定義を作成し、ネットワーク越しでも型安全な実装を心がけた
・SocketIOを利用してリアルタイムチャットを実現した
・バックエンドではcontroller/service/domain/infraの4層に分割し、テスタビリティや依存性を考慮して実装した
・モノレポ構成を採用し、フロントとバックエンドで共通のLinterやFormatterの設定を利用し、コードの品質を一定にした
`,
      },
    ],
  },
  // {
  //   priority: 15,
  //   type: "Web",
  //   title: "逆お題箱",
  //   summary:
  //     "見たい絵のお題を投稿したり、他の人のお題に絵を投稿したりするサービスです。メール通知、レスポンシブ対応等を実装しています。既にリリース済みです。",
  //   imageUrl: "/gyaku-odaibako/demo.png",
  //   movieUrl:
  //     "https://onedrive.live.com/?cid=1A277CC5A368BBA5&id=1A277CC5A368BBA5%21200&parId=root&o=OneUp",
  //   period: {
  //     start: "2021-03",
  //   },
  //   duration: {
  //     month: 6,
  //   },
  //   links: [
  //     {
  //       url: "https://github.com/yuta-ike/gyaku-odaibako",
  //       label: "github",
  //       type: "github",
  //     },
  //     { url: "https://twitter.com/gyaku_odaibako", label: "twitter", type: "twitter" },
  //     {
  //       url: "https://docs.google.com/presentation/d/1IpJnOaWIS2BUv9DDzcSEJSgfSYi9w01ma5xSYmns-JM/edit?usp=sharing",
  //       label: "slide",
  //       type: "slide",
  //     },
  //     { url: "https://gyaku-odai.vercel.app/", label: "プロダクト", type: "demo" },
  //   ],
  //   competition: ["技育展2022 世の中を楽しくする部門"],
  //   members: { total: 3, description: "エンジニア2人、イラストレーター1人" },
  //   roles: ["フロント", "サーバー"],
  //   layout: {
  //     blur: true,
  //   },
  //   techStack: [
  //     {
  //       category: "frontend",
  //       techs: [
  //         "typescript",
  //         "react",
  //         "nextjs",
  //         "tailwindcss",
  //         { label: "GenQL", id: "genql" },
  //         "vercel",
  //       ],
  //     },
  //     {
  //       category: "backend",
  //       techs: ["hasura", { label: "Puppeteer", id: "puppeteer" }, "gas", "heroku", "docker"],
  //     },
  //     {
  //       category: "others",
  //       techs: [{ label: "Cloudinary", id: "cloudinary" }, "firebase_auth"],
  //     },
  //   ],
  // },
  {
    priority: 15,
    type: "Web",
    title: "返してほしいでちゅん",
    summary:
      "友達との貸し借りを管理するアプリです。貸したもの、借りたものをリストで記録できるほか、返却期限が近づくと可愛いスズメが催促メッセージを送ってくれます。",
    imageUrl: "/kaeshite-hosiidechun/demo.png",
    movieUrl:
      "https://twitter.com/hackujp/status/1370643702356439041?s=20&t=GoR74oKS2ybYlRaGepLhzQ",
    awards: ["Open Hack U (2020 vol4) 優秀賞"],
    period: "2021-03",
    duration: {
      week: 2,
    },
    links: [
      { url: "https://github.com/mayu-snba19/hacku-vol4", label: "github", type: "github" },
      {
        url: "https://twitter.com/hackujp/status/1370643702356439041?s=20&t=tAZn8fwnliZFMCDe46Obdg",
        label: "twitter",
        type: "twitter",
      },
      {
        url: "https://docs.google.com/presentation/d/1xsHOtCywIy3TMBIm5mz_16uq6iFkdHE9/edit#slide=id.p1",
        label: "slide",
        type: "slide",
      },
      {
        label: "イベントページ",
        url: "https://hacku.yahoo.co.jp/hacku2020online4/",
        type: "others",
      },
    ],
    competition: ["Open Hack U (2020 vol4) "],
    members: { total: 5, description: "" },
    roles: ["フロント"],
    layout: {
      blur: true,
    },
    techStack: [
      {
        category: "frontend",
        techs: ["typescript", "react", "nextjs", "tailwindcss", "liff", "vercel"],
      },
      {
        category: "backend",
        techs: [
          "python",
          "flask",
          "docker",
          { label: "LINE Messaging API", id: "line_messaging_api" },
          "aws",
        ],
      },
    ],
    sections: [
      {
        heading: "概要",
        body: "友達との貸し借りを管理するサービスです。友達に貸すものと返却期限を登録すると、貸した相手のLINEにBotから確認メッセージが送信されます。友達が確認後、貸し出しが成立します。返却期限が近づくと、Botがあなたに代わって催促メッセージを送ってくれます。",
      },
      {
        heading: "工夫点",
        body: `LINE APIでは友達関係を取得することができないため、貸し出し関係を把握するために工夫をした。具体的には、貸し出し確認リンクにハッシュ値を付与し、ShareTargetPickerで貸し出し相手に送信する。貸し出し相手がリンクを踏んだ時点で、user idとハッシュ値をバックエンドに送信し、貸し手と借り手を突合している。`,
      },
    ],
  },
  {
    priority: 10,
    type: "Web",
    title: "ASSESSMATE",
    summary: "英文の写真を送ると、品詞分解や単語帳の生成を自動でおこなってくれるサービスです",
    imageUrl: "/assessmate/demo.png",
    awards: ["サポーターズ ウインターハッカソン 最優秀賞"],
    movieUrl: "https://drive.google.com/file/d/1KANVvRaWY6mwukMgYriUne6UHl5JoA9s/view?usp=sharing",
    period: "2020-12",
    duration: {
      day: 4,
    },
    links: [
      { url: "https://github.com/yuta-ike/assessmate", label: "github", type: "github" },
      {
        url: "https://twitter.com/Selria1/status/1327948702502113280?s=20&t=GoR74oKS2ybYlRaGepLhzQ",
        label: "twitter",
        type: "twitter",
      },
      {
        url: "https://docs.google.com/presentation/d/1TO50trzARaoT9MIpJfqdjEHJsGzOzOPzbuXznhstfYk/edit?usp=sharing",
        label: "slide",
        type: "slide",
      },
    ],
    competition: ["サポーターズ ウインターハッカソン"],
    members: { total: 1, description: "" },
    roles: ["フロント", "サーバー"],
  },
  {
    priority: 10,
    type: "Web",
    title: "Meable",
    summary: "子供たちが、SDGsに貢献することでポイントを貯めることができるサービスです。",
    imageUrl: "/meable/demo.png",
    awards: ["Social Creator Hackathon 優秀賞", "エンジニア賞（個人賞）"],
    movieUrl: "https://drive.google.com/file/d/1Ld2qAJU3mWcMgONyGAy4qLBTOGIN7HvJ/view?usp=sharing",
    period: "2020-10",
    duration: {
      week: 1,
    },
    links: [
      { url: "https://github.com/yuta-ike/meable", label: "github", type: "github" },
      {
        url: "https://twitter.com/kajikifunaki/status/1319930658874032128?s=20&t=tAZn8fwnliZFMCDe46Obdg",
        label: "twitter",
        type: "twitter",
      },
      { url: "https://social-creators-kyoto.web.app/", label: "プロダクト", type: "demo" },
      {
        url: "https://github.com/yuta-ike/meable/wiki/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E6%A6%82%E8%A6%81",
        label: "slide",
        type: "slide",
      },
    ],
    competition: ["SOCIAL CREATORS（ハッカソン）"],
    members: { total: 4, description: "エンジニア1人、デザイナー1人、企画2人" },
    roles: ["個人開発"],
  },
  {
    priority: 5,
    type: "Web",
    title: "Mini-Notion",
    summary:
      "Notionのクローンです。見出しや箇条書きなどをサポートしています。リッチエディタをinputとtextareaで実装しています。",
    imageUrl: "/mini-notion/demo.png",
    period: "2022-02",
    duration: {
      week: 2,
    },
    links: [
      { url: "https://github.com/yuta-ike/mini-notion", label: "github", type: "github" },
      { url: "https://mini-notion.vercel.app/", label: "プロダクト", type: "demo" },
      {
        url: "https://mini-notion.vercel.app/?code=JTVCJTdCJTIydHlwZSUyMiUzQSUyMmgxJTIyJTJDJTIyY29udGVudCUyMiUzQSUyMiVFOCU4NyVBQSVFNCVCRCU5QyVFMyU4MyU5RiVFMyU4MyU4Qk5vdGlvbiUyMiUyQyUyMmRlcHRoJTIyJTNBMCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJoMiUyMiUyQyUyMmNvbnRlbnQlMjIlM0ElMjIlRTYlQTYlODIlRTglQTYlODElMjIlMkMlMjJkZXB0aCUyMiUzQTAlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIydWwlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyTm90aW9uJUU5JUEyJUE4JUUzJTgxJUFFJUUzJTgyJUE4JUUzJTgzJTg3JUUzJTgyJUEzJUUzJTgyJUJGJUUzJTgxJUE3JUUzJTgxJTk5JUUzJTgwJTgyJTIyJTJDJTIyZGVwdGglMjIlM0ExJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnVsJTIyJTJDJTIyY29udGVudCUyMiUzQSUyMk1hY09TJTIwQ2hyb21lJUUzJTgxJUE3JUUzJTgxJUFFJUUzJTgxJUJGJUU1JThCJTk1JUU0JUJEJTlDJUUzJTgyJTkyJUU3JUEyJUJBJUU4JUFBJThEJUUzJTgxJTk3JUUzJTgxJUE2JUUzJTgxJTg0JUUzJTgxJUJFJUUzJTgxJTk5JUVGJUJDJTg4U2FmYXJpJUUzJTgxJUFGJUU1JThCJTk1JUUzJTgxJThCJUUzJTgxJUFBJUUzJTgxJThCJUUzJTgxJUEzJUUzJTgxJTlGLi4uLi4lRUYlQkMlODklMjIlMkMlMjJkZXB0aCUyMiUzQTElN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIydWwlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyJUU1JThGJUIzJUU0JUI4JThBJUUzJTgxJUFFJUUzJTgwJThDU2hhcmUlRTMlODAlOEQlRTMlODIlOTIlRTMlODIlQUYlRTMlODMlQUElRTMlODMlODMlRTMlODIlQUYlRTMlODElOTklRTMlODIlOEIlRTMlODElOTMlRTMlODElQTglRTMlODElQTclRTMlODAlODElRTUlODUlQjElRTYlOUMlODklRTMlODMlQUElRTMlODMlQjMlRTMlODIlQUYlRTMlODIlOTIlRTclOTklQkElRTglQTElOEMlRTMlODElOTklRTMlODIlOEIlRTMlODElOTMlRTMlODElQTglRTMlODElOEMlRTMlODElQTclRTMlODElOEQlRTMlODElQkUlRTMlODElOTklMjIlMkMlMjJkZXB0aCUyMiUzQTElN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIydWwlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyJUUzJTgzJTg5JUUzJTgyJUFEJUUzJTgzJUE1JUUzJTgzJUExJUUzJTgzJUIzJUUzJTgzJTg4JUUzJTgxJUFFJUU1JTg2JTg1JUU1JUFFJUI5JUUzJTgxJUFGJUU1JTg1JUE4JUUzJTgxJUE2VVJMJUUzJTgxJUFCJUU1JTkwJUFCJUUzJTgxJUJFJUUzJTgyJThDJUUzJTgxJUJFJUUzJTgxJTk5JUVGJUJDJTg4JUUzJTgyJUI1JUUzJTgzJUJDJUUzJTgzJTkwJUUzJTgzJUJDJUUzJTgxJUFGJUU1JUFEJTk4JUU1JTlDJUE4JUUzJTgxJTk3JUUzJTgxJUJFJUUzJTgxJTlCJUUzJTgyJTkzJUVGJUJDJTg5JTIyJTJDJTIyZGVwdGglMjIlM0EyJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMmgyJTIyJTJDJTIyY29udGVudCUyMiUzQSUyMiVFNSVBRSU5RiVFOCVBMyU4NSVFNiVCOCU4OCVFMyU4MSVCRiVFMyU4MSVBRSVFNiVBOSU5RiVFOCU4MyVCRCVFNCVCOCU4MCVFOCVBNiVBNyUyMiUyQyUyMmRlcHRoJTIyJTNBMCU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJ1bCUyMiUyQyUyMmNvbnRlbnQlMjIlM0ElMjIlRTUlQTQlQTclRTglQTYlOEIlRTUlODclQkElRTMlODElOTclMjAlMkYlMjAlRTQlQjglQUQlRTglQTYlOEIlRTUlODclQkElRTMlODElOTclMjAlMkYlMjAlRTUlQjAlOEYlRTglQTYlOEIlRTUlODclQkElRTMlODElOTclMjIlMkMlMjJkZXB0aCUyMiUzQTElN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIydWwlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyJTVDJTIyJTIzJTVDJTIyJUUzJTgxJUFCJUU3JUI2JTlBJUUzJTgxJTg0JUUzJTgxJUE2JUUzJTgyJUI5JUUzJTgzJTlBJUUzJTgzJUJDJUUzJTgyJUI5JUUzJTgyJTkyJUU1JTg1JUE1JUU1JThBJTlCJUUzJTgxJTk5JUUzJTgyJThCJUUzJTgxJTkzJUUzJTgxJUE4JUUzJTgxJUE3JUU4JUE2JThCJUU1JTg3JUJBJUUzJTgxJTk3JUUzJTgxJUFCJUUzJTgxJUFBJUUzJTgyJThBJUUzJTgxJUJFJUUzJTgxJTk5JTIyJTJDJTIyZGVwdGglMjIlM0EyJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnVsJTIyJTJDJTIyY29udGVudCUyMiUzQSUyMiVFNyVBRSU4NyVFNiU5RCVBMSVFNiU5QiVCOCVFMyU4MSU4RCUyMiUyQyUyMmRlcHRoJTIyJTNBMSU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJ1bCUyMiUyQyUyMmNvbnRlbnQlMjIlM0ElMjItJTJDJTIwKiUyQyUyMCUyQiVFMyU4MSVBRSVFMyU4MSU4NCVFMyU4MSU5QSVFMyU4MiU4QyVFMyU4MSU4QiVFMyU4MSVBQiVFNyVCNiU5QSVFMyU4MSU4NCVFMyU4MSVBNiVFMyU4MiVCOSVFMyU4MyU5QSVFMyU4MyVCQyVFMyU4MiVCOSVFMyU4MiU5MiVFNSU4NSVBNSVFNSU4QSU5QiVFMyU4MSU5OSVFMyU4MiU4QiVFMyU4MSU5MyVFMyU4MSVBOCVFMyU4MSVBNyVFNyVBRSU4NyVFNiU5RCVBMSVFNiU5QiVCOCVFMyU4MSU4RCVFMyU4MSVBQiVFMyU4MSVBQSVFMyU4MiU4QSVFMyU4MSVCRSVFMyU4MSU5OSUyMiUyQyUyMmRlcHRoJTIyJTNBMiU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJ1bCUyMiUyQyUyMmNvbnRlbnQlMjIlM0ElMjJUYWIlMjAlMkYlMjBTaGlmdCUyQlRhYiVFMyU4MSVBNyVFMyU4MyU4RCVFMyU4MiVCOSVFMyU4MyU4OCVFMyU4MSVBRSVFNiVCNyVCMSVFMyU4MSU5NSVFMyU4MiU5MiVFNSVBNCU4OSVFNiU5QiVCNCVFMyU4MSU5OSVFMyU4MiU4QiVFMyU4MSU5MyVFMyU4MSVBOCVFMyU4MSU4QyVFMyU4MSVBNyVFMyU4MSU4RCVFMyU4MSVCRSVFMyU4MSU5OSUyMiUyQyUyMmRlcHRoJTIyJTNBMiU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJoMiUyMiUyQyUyMmNvbnRlbnQlMjIlM0ElMjIlRTMlODMlOTAlRTMlODIlQjAlRTMlODElQTMlRTMlODElQTYlRTMlODElODQlRTMlODIlOEIlRTMlODElQTglRTMlODElOTMlRTMlODIlOEQlRTMlODMlQkIlRTYlOUMlQUElRTUlQUUlOUYlRTglQTMlODUlMjIlMkMlMjJkZXB0aCUyMiUzQTAlN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIydWwlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyJUUzJTgyJUFEJUUzJTgzJUEzJUUzJTgzJUFDJUUzJTgzJTgzJUUzJTgzJTg4JUUzJTgxJUFFJUU3JUE3JUJCJUU1JThCJTk1JTIyJTJDJTIyZGVwdGglMjIlM0ExJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnVsJTIyJTJDJTIyY29udGVudCUyMiUzQSUyMiVFNyU5RiVBMiVFNSU4RCVCMCVFMyU4MiVBRCVFMyU4MyVCQyVFMyU4MiU5MiVFNSU4OCVBOSVFNyU5NCVBOCVFMyU4MSU5NyVFMyU4MSVBNiVFMyU4MCU4MSVFNiVBRSVCNSVFOCU5MCVCRCVFMyU4MiU5MiVFOCVCNyVBOCVFMyU4MSU4NCVFMyU4MSVBNyVFMyU4MiVBRCVFMyU4MyVBMyVFMyU4MyVBQyVFMyU4MyU4MyVFMyU4MyU4OCVFMyU4MiU5MiVFNyVBNyVCQiVFNSU4QiU5NSVFMyU4MSU5NSVFMyU4MSU5QiVFMyU4MiU4QiVFNSVBMCVCNCVFNSU5MCU4OCVFMyU4MSVBQiVFMyU4MCU4MSVFNiU4MyVCMyVFNSVBRSU5QSVFNSVBNCU5NiVFMyU4MSVBRSVFNSVBMCVCNCVFNiU4OSU4MCVFMyU4MSVBQiVFMyU4MiVBRCVFMyU4MyVBMyVFMyU4MyVBQyVFMyU4MyU4MyVFMyU4MyU4OCVFMyU4MSU4QyVFNyVBNyVCQiVFNSU4QiU5NSVFMyU4MSU5OSVFMyU4MiU4QiVFMyU4MSU5MyVFMyU4MSVBOCVFMyU4MSU4QyVFMyU4MSU4MiVFMyU4MiU4QSVFMyU4MSVCRSVFMyU4MSU5OSVFMyU4MCU4MiUyMiUyQyUyMmRlcHRoJTIyJTNBMiU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJ1bCUyMiUyQyUyMmNvbnRlbnQlMjIlM0ElMjIlRTQlQjglODAlRTYlOEIlQUMlRTUlODklOEElRTklOTklQTQlMjIlMkMlMjJkZXB0aCUyMiUzQTElN0QlMkMlN0IlMjJ0eXBlJTIyJTNBJTIydWwlMjIlMkMlMjJjb250ZW50JTIyJTNBJTIyJUUzJTgzJTg5JUUzJTgzJUE5JUUzJTgzJTgzJUUzJTgyJUIwJUUzJTgxJUE3JUU2JUFFJUI1JUU4JTkwJUJEJUUzJTgyJTkyJUU4JUI3JUE4JUUzJTgxJTg0JUUzJTgxJUE3JUU5JTgxJUI4JUU2JThBJTlFJUUzJTgxJTk3JUUzJTgxJTlGJUU1JUEwJUI0JUU1JTkwJTg4JUUzJTgxJUFCJUUzJTgwJTgxQmFja1NwYWNlJUU3JUFEJTg5JUUzJTgyJTkyJUU2JThBJUJDJUUzJTgxJTk3JUUzJTgxJUE2JUUzJTgyJTgyJUU1JTg5JThBJUU5JTk5JUE0JUUzJTgxJUE3JUUzJTgxJThEJUUzJTgxJUJFJUUzJTgxJTlCJUUzJTgyJTkzJUUzJTgwJTgyJUU3JThGJUJFJUU3JThBJUI2JUUzJTgwJTgxJUU2JUFFJUI1JUU4JTkwJUJEJUUzJTgxJTk0JUUzJTgxJUE4JUUzJTgxJUFCJUU2JUI2JTg4JUUzJTgxJTk3JUUzJTgxJUE2JUUzJTgxJTg0JUUzJTgxJThGJUU2JTk2JUI5JUU2JUIzJTk1JUUzJTgxJTk3JUUzJTgxJThCJUUzJTgxJTgyJUUzJTgyJThBJUUzJTgxJUJFJUUzJTgxJTlCJUUzJTgyJTkzJUUzJTgwJTgyJTIyJTJDJTIyZGVwdGglMjIlM0EyJTdEJTJDJTdCJTIydHlwZSUyMiUzQSUyMnVsJTIyJTJDJTIyY29udGVudCUyMiUzQSUyMiVFOCVBNCU4NyVFNiU5NSVCMCVFOCVBMSU4QyVFMyU4MSVBRSVFNyVBRSU4NyVFNiU5RCVBMSVFNiU5QiVCOCVFMyU4MSU4RCUyMiUyQyUyMmRlcHRoJTIyJTNBMSU3RCUyQyU3QiUyMnR5cGUlMjIlM0ElMjJ1bCUyMiUyQyUyMmNvbnRlbnQlMjIlM0ElMjIlRTglQTQlODclRTYlOTUlQjAlRTglQTElOEMlRTMlODElQUUlRTclQUUlODclRTYlOUQlQTElRTYlOUIlQjglRTMlODElOEQlRTMlODIlOTIlRTMlODIlQUYlRTMlODMlQUElRTMlODMlODMlRTMlODIlQUYlRTMlODElOTklRTMlODIlOEIlRTMlODElQTglRTMlODMlODclRTMlODIlQjYlRTMlODIlQTQlRTMlODMlQjMlRTMlODElOEMlRTUlQjQlQTklRTMlODIlOEMlRTMlODIlOEIlRTUlQTAlQjQlRTUlOTAlODglRTMlODElOEMlRTMlODElODIlRTMlODIlOEElRTMlODElQkUlRTMlODElOTklMjIlMkMlMjJkZXB0aCUyMiUzQTIlN0QlNUQ=",
        label: "slide",
        type: "slide",
      },
    ],
    members: { total: 1, description: "" },
    roles: ["個人開発"],
  },
  {
    priority: 5,
    type: "Web",
    title: "Flexレイアウトを視覚的に確認できるサービス",
    summary: "Flexレイアウトを視覚的に確認できるサービスです。",
    imageUrl: "/flex-layout/demo.jpg",
    period: "2022-05",
    duration: {
      week: 2,
    },
    links: [
      { url: "https://github.com/yuta-ike/ui-catalog", label: "github", type: "github" },
      {
        url: "https://ui-catalog.vercel.app/flexbox-playground",
        label: "プロダクト",
        type: "demo",
      },
    ],
    selfTweet:
      "https://twitter.com/Selria1/status/1521789147320811520?s=20&t=tAZn8fwnliZFMCDe46Obdg",
    members: { total: 1, description: "" },
    roles: ["個人開発"],
  },
  {
    priority: 3,
    type: "Web",
    title: "Riffle",
    summary:
      "オンラインで共同編集可能な単語帳サービスです。LINE上で利用されることを想定して実装しています。（作業中）",
    imageUrl: "/riffle/demo.png",
    period: "2022-01",
    duration: {
      month: 1,
    },
    links: [{ url: "https://github.com/yuta-ike/riffle", label: "github", type: "github" }],
    members: { total: 1, description: "" },
    roles: ["個人開発"],
  },
  {
    priority: 10,
    type: "Web",
    title: "CSS CheetSheet",
    summary: "CSSの解説サイトです（作業中）",
    imageUrl: "/css-cheetsheet/demo.png",
    period: "2022-02",
    duration: {
      week: 3,
    },
    links: [
      {
        url: "https://github.com/yuta-ike/css-cheatsheet",
        label: "github",
        type: "github",
      },
      { url: "https://css-cheatbook.vercel.app/", label: "プロダクト", type: "demo" },
    ],
    members: { total: 1, description: "" },
    roles: ["個人開発"],
  },
  {
    priority: 5,
    type: "Web",
    title: "OnePick",
    summary:
      "ワンドライブ上の写真を複数枚選び、A4用紙上に配置してPDF化できるサービス。サークルでの利用を目的に開発しました。",
    imageUrl: "/one-pick/demo.png",
    movieUrl: "https://drive.google.com/file/d/1r1WVgZFFj8wnyzhHLYyvmwNmSMVe0MTE/view?usp=sharing",
    period: {
      start: "2020-12",
      end: "2021-02",
    },
    duration: {
      week: 1,
    },
    links: [
      { url: "https://github.com/yuta-ike/album-maker", label: "github", type: "github" },
      { url: "https://albummakerweb.web.app/login", label: "プロダクト", type: "demo" },
    ],
    selfTweet:
      "https://twitter.com/Selria1/status/1356932383941873665?s=20&t=tAZn8fwnliZFMCDe46Obdg",
    members: { total: 1, description: "" },
    roles: ["個人開発"],
  },
  {
    priority: 1,
    type: "Web",
    title: "Tinder Like UI",
    summary: "Tinder風のUIを、UIライブラリを使わずにReactで再現しました",
    imageUrl: "/tinder-like-ui/demo.png",
    period: "2022-01",
    duration: {
      day: 1,
    },
    links: [
      {
        url: "https://github.com/yuta-ike/tinder-like-ui",
        label: "github",
        type: "github",
      },
    ],
    selfTweet: "https://twitter.com/i/status/1478009601115422720",
    members: { total: 1, description: "" },
    roles: ["個人開発"],
    layout: {
      blur: true,
    },
  },
  {
    priority: 5,
    type: "Native App",
    title: "Sanpo Master",
    summary: "実際に現地に訪れないと投稿を閲覧できないSNSです。大学院の実習の授業で作成しました。",
    imageUrl: "/sanpo-master/demo.png",
    period: {
      start: "2022-04",
      end: "2022-06",
    },
    duration: {
      month: 3,
    },
    links: [
      { url: "https://github.com/yuta-ike/sanpo_master", label: "github", type: "github" },
      {
        url: "https://drive.google.com/file/d/1cy50C0OzyAktn0sNdy-9s9vc1ycFsXVF/view?usp=sharing",
        label: "slide",
        type: "slide",
      },
    ],
    members: { total: 5, description: "" },
    roles: ["アプリフロント"],
    layout: {
      blur: true,
    },
    techStack: [
      {
        category: "frontend",
        techs: ["dart", "flutter", { label: "Health kit", id: "healthkit" }],
      },
      {
        category: "backend",
        techs: [
          "firebase_auth",
          "firestore",
          "firebase_storage",
          { label: "Google Map API", id: "googlemap_api" },
        ],
      },
    ],
    sections: [
      {
        heading: "概要",
        body: "地図と連動したTwitterのようなSNSサービスです。他の人の投稿は、実際に投稿された場所に行かなければ閲覧できません。ヘルスケア目的に加え、地域のおすすめスポットや美味しいお店などが投稿され、地域の魅力が再発見されることを想定しています。",
      },
      {
        heading: "実装",
        body: "プログラミングの経験があまりないメンバーとのチームだったため、FlutterやDartを教えながら実装を進めました。",
      },
    ],
  },
  {
    priority: 5,
    type: "Desktop",
    title: "Youl",
    summary: "リモートワークの勤務時間を計測するためのタイマー",
    imageUrl: "/youl/demo.png",
    movieUrl: "https://drive.google.com/file/d/1IBdtTrdGNr2mOtgIqNu7y_z60kPU98WP/view?usp=sharing",
    links: [{ url: "https://github.com/yuta-ike/WorkTimer", label: "github", type: "github" }],
    members: { total: 1, description: "" },
    roles: ["個人開発"],
    layout: {
      blur: true,
    },
    techStack: [
      {
        category: "frontend",
        techs: ["javascript", "react", "electron"],
      },
    ],
  },
  {
    priority: 3,
    type: "Game",
    title: "あつめるんば",
    summary:
      "ロボット掃除機になって制限時間内にできるだけ多くのゴミを集めます！Unity1週間ゲームジャム お題「あつめる」の投稿作品です。",
    imageUrl: "/atume-roomba/demo.png",
    links: [
      {
        url: "https://github.com/KoukiNAGATA/atsumeROOMBA",
        label: "github",
        type: "github",
      },
      { url: "https://unityroom.com/games/atsumeroomba", label: "プロダクト", type: "demo" },
    ],
    members: { total: 3, description: "" },
    roles: ["Unity"],
    techStack: [
      {
        category: {
          id: "client",
          label: "クライアント",
        },
        techs: ["unity"],
      },
    ],
  },
]

export default WORKS
