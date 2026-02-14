import { DailyNews } from '@/types';

export const dailyNewsData: DailyNews = {
  date: "2026年2月14日",
  weekday: "星期六",
  message: "周六早安！今日情人节，愿AI的温暖陪伴你，让生活更加美好甜蜜。享受周末好时光！",
  summary: "今日 AI 核心主题：OpenAI 动荡（解散安全团队、放弃硬件品牌）+ 产品延期（苹果 Siri 推迟）+ 资本火热（多家 AI 初创融资）+ 监管加码（印度深度伪造检测、Clearview AI 军用）。",
  news: [
    // 头条新闻
    {
      id: "1",
      title: "OpenAI 解散\"使命对齐\"安全团队",
      summary: "OpenAI 正式解散了专注于\"安全可信\"AI 开发的 Mission Alignment 团队，团队负责人转任首席未来学家。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/11/openai-disbands-mission-alignment-team/",
      category: "headline"
    },
    {
      id: "2",
      title: "OpenAI 放弃\"io\"硬件品牌",
      summary: "在面临商标诉讼后，OpenAI 确认不会使用\"io\"作为其 AI 硬件设备品牌，该设备预计2027年才会上市。",
      source: "Wired",
      url: "https://www.wired.com/story/openai-drops-io-branding-hardware-devices/",
      category: "headline"
    },
    {
      id: "3",
      title: "苹果 Siri 大改版再次推迟",
      summary: "原定于 iOS 26.4（3月发布）推出的 Siri 个性化功能将推迟至 iOS 26.5（5月）甚至 iOS 27（9月）。",
      source: "The Verge",
      url: "https://www.theverge.com/tech/877494/apple-siri-ai-overhaul-ios-personalized",
      category: "headline"
    },
    // 行业动态
    {
      id: "4",
      title: "AI 安全争议：OpenClaw 引发安全专家担忧",
      summary: "病毒式传播的 AI 助手工具 OpenClaw 因其安全隐患引发广泛关注，甚至引起中国政府发布安全警告。",
      source: "MIT Technology Review",
      url: "https://www.technologyreview.com/",
      category: "industry"
    },
    {
      id: "5",
      title: "Anthropic 承诺承担数据中心电费升级成本",
      summary: "Anthropic 承诺支付100%的电网升级费用，避免其数据中心推高周边居民的电费账单。",
      source: "Anthropic",
      url: "https://www.anthropic.com/news",
      category: "industry"
    },
    {
      id: "6",
      title: "xAI 多名高管离职",
      summary: "马斯克暗示 xAI 近期多位高管离职是\"被推动\"而非主动离开，包括联合创始人等核心人员。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/11/senior-engineers-including-co-founders-exit-xai-amid-controversy/",
      category: "industry"
    },
    {
      id: "7",
      title: "Glean 争夺企业 AI 层控制权",
      summary: "企业搜索起家的 Glean 正转型为\"AI 工作助手\"，目标是成为连接所有企业 AI 应用的核心层。",
      source: "TechCrunch",
      url: "https://techcrunch.com/",
      category: "industry"
    },
    // 资本市场
    {
      id: "8",
      title: "Modal Labs 拟以 25 亿美元估值融资",
      summary: "AI 推理初创公司 Modal Labs 正与 General Catalyst 洽谈融资，公司成立仅4年。",
      source: "TechCrunch",
      url: "https://techcrunch.com/",
      category: "capital"
    },
    {
      id: "9",
      title: "Barclays 银行押注 AI 降本增效",
      summary: "巴克莱银行2025年利润增长12%，将 AI 定位为提升效率、实现2028年更高业绩目标的关键驱动力。",
      source: "Financial Times",
      url: "https://www.ft.com/",
      category: "capital"
    },
    {
      id: "10",
      title: "Railway 获 1 亿美元融资挑战 AWS",
      summary: "AI 原生云平台 Railway 完成 B 轮融资，主打秒级部署和比亚马逊云低65%的成本。",
      source: "TechCrunch",
      url: "https://techcrunch.com/",
      category: "capital"
    },
    // 全球格局
    {
      id: "11",
      title: "Uber Eats 推出 AI 购物车助手",
      summary: "Uber Eats 新功能\"Cart Assistant\"可根据文字或图片提示自动添加商品到购物车。",
      source: "Uber",
      url: "https://www.uber.com/newsroom/",
      category: "global"
    },
    {
      id: "12",
      title: "印度要求社交平台部署深度伪造检测",
      summary: "Instagram、X、YouTube 等平台被印度政府要求在短期内上线深度伪造检测功能。",
      source: "TechCrunch",
      url: "https://techcrunch.com/2026/02/10/india-orders-social-media-platforms-to-take-down-deepfakes-faster/",
      category: "global"
    },
    {
      id: "13",
      title: "美边境巡逻队签约 Clearview AI 人脸识别",
      summary: "美国海关与边境保护局将使用 Clearview AI 的面部识别技术进行\"战术目标定位\"。",
      source: "Reuters",
      url: "https://www.reuters.com/",
      category: "global"
    },
    // 硬件与机器人
    {
      id: "14",
      title: "纽约州无企业承认用 AI 取代员工",
      summary: "尽管纽约州近一年前就要求企业披露是否因\"技术创新或自动化\"导致裁员，但至今无一家公司承认。",
      source: "The Guardian",
      url: "https://www.theguardian.com/",
      category: "hardware"
    },
    {
      id: "15",
      title: "MIT 启动 AI 抗抗生素耐药性研究",
      summary: "MIT 获得 300 万美元资助，利用合成生物学和生成式 AI 开发可编程抗菌药物。",
      source: "MIT News",
      url: "https://news.mit.edu/",
      category: "hardware"
    }
  ],
  hotApps: [
    {
      platform: "Product Hunt",
      name: "HappyCapy",
      function: "面向普通用户的\"Agent 原生计算机\"",
      highlight: "让 AI 代理计算机平民化",
      url: "https://www.producthunt.com/products/happycapy"
    },
    {
      platform: "Product Hunt",
      name: "Atyla",
      function: "专为 AI 搜索引擎优化的 SEO 工具",
      highlight: "ChatGPT、Gemini 搜索结果优化",
      url: "https://www.producthunt.com/products/atyla"
    },
    {
      platform: "Product Hunt",
      name: "JumprAI",
      function: "AI 视频时刻搜索",
      highlight: "在 YouTube 视频中精准定位任意时刻",
      url: "https://www.producthunt.com/products/jumprai"
    },
    {
      platform: "Hacker News",
      name: "GLM-5",
      function: "智谱 AI 最新大模型",
      highlight: "从氛围编程到智能体工程",
      url: "https://z.ai/blog/glm-5"
    },
    {
      platform: "Hacker News",
      name: "Fluorite",
      function: "游戏引擎",
      highlight: "与 Flutter 完全集成的控制台级游戏引擎",
      url: "https://github.com/fluorite-game-engine"
    }
  ]
};