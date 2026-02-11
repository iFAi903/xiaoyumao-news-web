import { DailyNews } from '@/types';

export const dailyNewsData: DailyNews = {
  date: "2026年2月12日",
  weekday: "星期四",
  message: "腊月十五，月圆人安。愿你今日事今日毕，明日事早规划！",
  summary: "今日 AI 世界核心主题：监管收紧（印度深度伪造法规）+ 商业化加速（ChatGPT 广告上线）+ 人才流动（xAI 高管离职）+ 中国力量（智谱 GLM-5 上热门）。",
  news: [
    // 头条新闻
    {
      id: "1",
      title: "Instagram 和 X 面临深度伪造检测期限压力",
      summary: "印度要求社交媒体平台在收到请求后 3 小时内删除深度伪造内容，所有合成内容必须标注。",
      source: "The Verge",
      url: "https://www.theverge.com/ai-artificial-intelligence/877206/youtube-instagram-x-india-deepfake-detection-deadline",
      category: "headline"
    },
    {
      id: "2",
      title: "OpenAI 正式启动 ChatGPT 广告试点",
      summary: "多家品牌宣布将在 ChatGPT 中投放广告，包括 Target、Ford、Mazda 等。仅免费用户可见。",
      source: "The Verge",
      url: "https://www.theverge.com/ai-artificial-intelligence/877148/openai-chatgpt-advertisers-target-adobe-audible",
      category: "headline"
    },
    // 行业动态
    {
      id: "3",
      title: "轨道 AI 数据中心的经济学挑战",
      summary: "建造 1GW 轨道数据中心成本约 424 亿美元，是地面数据中心的近三倍。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/11/why-the-economics-of-orbital-ai-are-so-brutal/",
      category: "industry"
    },
    {
      id: "4",
      title: "Threads 推出 \"Dear Algo\" AI 功能",
      summary: "用户可告诉 Threads 暂时希望在 feed 中看到更多或更少的内容，实现个性化推荐。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/11/threads-new-dear-algo-ai-feature-lets-you-personalize-your-feed/",
      category: "industry"
    },
    {
      id: "5",
      title: "Monaco AI 销售初创公司挑战 Salesforce",
      summary: "前 Founders Fund VC 推出 AI 原生 CRM 系统 Monaco，获得 Collison 兄弟和 Garry Tan 投资。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/11/former-founders-fund-vc-sam-blond-launches-ai-sales-startup-to-upend-salesforce/",
      category: "industry"
    },
    // 资本市场
    {
      id: "6",
      title: "Meridian 获 1700 万美元融资重塑智能电子表格",
      summary: "打造 \"代理式电子表格\"，让 AI 自动处理数据分析任务。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/11/meridian-ai-raises-17-million-to-remake-the-agentic-spreadsheet/",
      category: "capital"
    },
    {
      id: "7",
      title: "2026年科技巨头AI投资将超6700亿美元",
      summary: "Meta、微软、亚马逊和 Alphabet 计划在 AI 基础设施上投入巨资，超越阿波罗登月计划。",
      source: "WSJ",
      url: "https://www.wsj.com/tech/ai/ai-spending-tech-companies-compared-02b90046",
      category: "capital"
    },
    // 全球格局
    {
      id: "8",
      title: "美国两党联合提出CLEAR法案",
      summary: "要求科技公司书面报告使用版权作品训练 AI 模型的情况，提高数据透明度。",
      source: "The Verge",
      url: "https://www.theverge.com/2026/2/10/clear-act-ai-copyright-schiff-curtis",
      category: "global"
    },
    {
      id: "9",
      title: "OpenAI发布GPT-5.3-Codex编程模型",
      summary: "首个\"在自身创建过程中发挥重要作用\"的模型，在 SWE-Bench Pro 上达到 SOTA。",
      source: "OpenAI",
      url: "https://openai.com/index/introducing-gpt-5-3-codex/",
      category: "global"
    },
    {
      id: "10",
      title: "Anthropic升级Opus 4.6多领域领先",
      summary: "在代理编码、计算机使用、工具使用、搜索和金融领域均达行业领先水平。",
      source: "Anthropic",
      url: "https://www.anthropic.com/news",
      category: "global"
    },
    // 硬件与机器人
    {
      id: "11",
      title: "Boston Dynamics下一代人形机器人融合 DeepMind DNA",
      summary: "CES 2026 上宣布合作，将使用 DeepMind 的 AI 基础模型进行机器人研究。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/01/05/boston-dynamicss-next-gen-humanoid-robot-will-have-google-deepmind-dna/",
      category: "hardware"
    },
    {
      id: "12",
      title: "Google计划加倍AI支出以应对竞争",
      summary: "加速数据中心建设以运行和训练 AI 模型，DeepMind 成为核心产品转型中心。",
      source: "NYT",
      url: "https://www.nytimes.com/2026/02/04/business/google-earnings-ai.html",
      category: "hardware"
    },
    // 产品与趋势
    {
      id: "13",
      title: "YouTube Music推出AI播放列表生成器",
      summary: "Premium用户可通过语音或文字描述，让AI生成个性化播放列表。",
      source: "The Verge",
      url: "https://www.theverge.com/2026/2/10/youtube-music-ai-playlists-feature",
      category: "product"
    },
    {
      id: "14",
      title: "xAI 多名高级工程师离职",
      summary: "包括两名联合创始人在内的至少九名工程师在过去一周宣布离开 xAI。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/11/senior-engineers-including-co-founders-exit-xai-amid-controversy/",
      category: "global"
    },
    {
      id: "15",
      title: "印度要求社交平台3小时内删除深度伪造内容",
      summary: "修订IT规则，所有合成音视频需标注可追踪，新规2月20日生效。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/10/india-orders-social-media-platforms-to-take-down-deepfakes-faster/",
      category: "industry"
    }
  ],
  hotApps: [
    {
      platform: "Product Hunt",
      name: "happycapy",
      function: "面向大众的 Agent-native 计算机",
      highlight: "让普通用户也能使用 AI 代理计算机，降低技术门槛",
      url: "https://www.producthunt.com/products/happycapy"
    },
    {
      platform: "GitHub",
      name: "GLM-OCR",
      function: "准确、快速、全面的 OCR 工具",
      highlight: "智谱开源 OCR 工具，支持多语言和高精度识别",
      url: "https://github.com/zai-org/GLM-OCR"
    },
    {
      platform: "Toolify.ai",
      name: "Seedance 2.0",
      function: "AI 视频生成器",
      highlight: "支持 4K 视频生成，图像转视频和文本转视频",
      url: "https://www.toolify.ai/"
    },
    {
      platform: "Hacker News",
      name: "GLM-5",
      function: "从 Vibe Coding 到 Agentic Engineering",
      highlight: "智谱最新大模型，强调工程化代理能力",
      url: "https://z.ai/blog/glm-5"
    },
    {
      platform: "Reddit",
      name: "Claude Code 讨论",
      function: "Claude Code 功能简化引发热议",
      highlight: "开发者社区讨论 Claude Code 最近的改动",
      url: "https://www.reddit.com/r/ClaudeAI/"
    }
  ]
};