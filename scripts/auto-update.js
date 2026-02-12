#!/usr/bin/env node
/**
 * 小羽毛 AI 新闻早报 - 网站自动更新脚本
 * 每天早上 7:30 执行：生成新闻 → 更新网站 → 自动部署
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const PROJECT_DIR = '/Users/ifai_macpro/.openclaw/workspace/xiaoyumao-news-web';
const DATA_FILE = path.join(PROJECT_DIR, 'src/data/news.ts');

// 获取今天日期
const today = new Date();
const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;
const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
const weekday = weekdays[today.getDay()];

// 随机寄语
const messages = [
  "正月将尽，春意渐浓。愿你在新的一年，如 AI 般迭代进化，如春天般充满可能。",
  "腊月十五，月圆人安。愿你今日事今日毕，明日事早规划！",
  "春风得意马蹄疾，一日看尽长安花。愿你今日收获满满！",
  "星光不问赶路人，时光不负有心人。愿你的努力都有回报。",
];

const message = messages[Math.floor(Math.random() * messages.length)];

// 新闻数据（简化版，实际应从 RSS 获取）
const newsData = {
  date: dateStr,
  weekday: weekday,
  message: message,
  summary: "今日 AI 核心主题待更新...",
  news: [
    {
      id: "1",
      title: "[自动更新] AI 新闻正在抓取中...",
      summary: "每天早上 7:30 自动更新，请稍候刷新查看最新内容。",
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
      highlight: "智谱开源 OCR 工具",
      url: "https://github.com/zai-org/GLM-OCR"
    },
    {
      platform: "Toolify.ai",
      name: "Seedance 2.0",
      function: "AI 视频生成器",
      highlight: "支持 4K 视频生成",
      url: "https://www.toolify.ai/"
    },
    {
      platform: "Hacker News",
      name: "GLM-5",
      function: "从 Vibe Coding 到 Agentic Engineering",
      highlight: "智谱最新大模型",
      url: "https://z.ai/blog/glm-5"
    },
    {
      platform: "Reddit",
      name: "AI Discussion",
      function: "社区热议话题",
      highlight: "开发者社区讨论",
      url: "https://www.reddit.com/r/artificial/"
    }
  ]
};

// 生成 TypeScript 数据文件
function generateDataFile() {
  const content = `import { DailyNews } from '@/types';

export const dailyNewsData: DailyNews = ${JSON.stringify(newsData, null, 2)};
`;
  
  fs.writeFileSync(DATA_FILE, content);
  console.log('✅ 数据文件已更新:', DATA_FILE);
}

// 构建并部署
function buildAndDeploy() {
  try {
    console.log('🔨 正在构建项目...');
    execSync('npm run build', { 
      cwd: PROJECT_DIR, 
      stdio: 'inherit' 
    });
    
    console.log('🚀 正在部署到 Vercel...');
    const token = process.env.VERCEL_TOKEN;
    if (!token) {
      throw new Error('VERCEL_TOKEN 环境变量未设置');
    }
    
    execSync(`npx vercel@latest --token ${token} --yes --prod`, {
      cwd: PROJECT_DIR,
      stdio: 'inherit'
    });
    
    console.log('✅ 部署完成！');
    console.log('🌐 网站地址: https://xiaoyumao-news-web.vercel.app');
  } catch (error) {
    console.error('❌ 构建或部署失败:', error.message);
    process.exit(1);
  }
}

// 主函数
function main() {
  console.log('🪶 小羽毛 AI 新闻早报 - 自动更新');
  console.log(`📅 ${dateStr} ${weekday}`);
  console.log('');
  
  generateDataFile();
  buildAndDeploy();
}

main();
