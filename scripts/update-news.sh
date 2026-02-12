#!/bin/bash
# 小羽毛 AI 新闻早报 - 自动更新脚本
# 每天早上 7:00 执行：抓取 RSS → 更新数据 → 部署网站

set -e

echo "🪶 开始更新小羽毛 AI 新闻早报..."
DATE=$(date +"%Y-%m-%d")
DATETIME=$(date +"%Y年%m月%d日")
WEEKDAY=$(date +"%A" | sed 's/Monday/星期一/;s/Tuesday/星期二/;s/Wednesday/星期三/;s/Thursday/星期四/;s/Friday/星期五/;s/Saturday/星期六/;s/Sunday/星期日/')

# 项目路径
PROJECT_DIR="/Users/ifai_macpro/.openclaw/workspace/xiaoyumao-news-web"
DATA_FILE="$PROJECT_DIR/src/data/news.ts"

cd "$PROJECT_DIR"

echo "📰 正在抓取 RSS 新闻..."

# 使用 Node.js 脚本抓取和解析 RSS
node << 'NODE_SCRIPT'
const fs = require('fs');
const https = require('https');
const xml2js = require('xml2js');

const RSS_SOURCES = [
  { name: "The Verge AI", url: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml", category: "headline" },
  { name: "TechCrunch AI", url: "https://techcrunch.com/category/artificial-intelligence/feed/", category: "industry" },
  { name: "MIT Tech Review", url: "https://www.technologyreview.com/topic/artificial-intelligence/feed", category: "industry" },
  { name: "Wired AI", url: "https://www.wired.com/feed/tag/ai/latest/rss", category: "headline" },
  { name: "Hacker News", url: "https://news.ycombinator.com/rss", category: "global" },
];

function fetchRSS(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const parser = new xml2js.Parser();
  const allNews = [];
  
  for (const source of RSS_SOURCES) {
    try {
      console.log(`Fetching ${source.name}...`);
      const xml = await fetchRSS(source.url);
      const result = await parser.parseStringPromise(xml);
      
      const items = result.rss?.channel?.[0]?.item || [];
      items.slice(0, 3).forEach((item, idx) => {
        allNews.push({
          title: item.title?.[0] || '',
          summary: item.description?.[0]?.replace(/<[^>]+>/g, '').substring(0, 150) + '...' || '',
          source: source.name,
          url: item.link?.[0] || '',
          category: source.category,
          pubDate: item.pubDate?.[0] || ''
        });
      });
    } catch (err) {
      console.error(`Error fetching ${source.name}:`, err.message);
    }
  }
  
  // 保存到临时文件
  fs.writeFileSync('/tmp/rss_news.json', JSON.stringify(allNews, null, 2));
  console.log(`✅ 抓取完成，共 ${allNews.length} 条新闻`);
}

main().catch(console.error);
NODE_SCRIPT

echo "📝 正在生成数据文件..."

# 生成新的数据文件
cat > "$DATA_FILE" << EOF
import { DailyNews } from '@/types';

export const dailyNewsData: DailyNews = {
  date: "$DATETIME",
  weekday: "$WEEKDAY",
  message: "$(shuf -n 1 <<'QUOTES'
正月将尽，春意渐浓。愿你在新的一年，如 AI 般迭代进化，如春天般充满可能。
腊月十五，月圆人安。愿你今日事今日毕，明日事早规划！
春风得意马蹄疾，一日看尽长安花。愿你今日收获满满！
QUOTES
)",
  summary: "今日 AI 核心主题待生成...",
  news: [
    // 新闻数据将由 RSS 抓取填充
    {
      id: "1",
      title: "RSS 自动更新测试中...",
      summary: "自动化部署流程已启动，今日新闻正在抓取中。",
      source: "System",
      url: "https://xiaoyumao-news-web.vercel.app",
      category: "headline"
    }
  ],
  hotApps: [
    {
      platform: "Product Hunt",
      name: "HappyCapy",
      function: "面向普通用户的 Agent 原生计算机",
      highlight: "让 AI 代理计算机平民化",
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
EOF

echo "🔨 正在构建项目..."
npm run build

echo "🚀 正在部署到 Vercel..."
npx vercel@latest --token "$VERCEL_TOKEN" --yes --prod

echo "✅ 更新完成！网站已部署到: https://xiaoyumao-news-web.vercel.app"

# 发送通知（可选）
# curl -X POST ...
