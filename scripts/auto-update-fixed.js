#!/usr/bin/env node
/**
 * 小羽毛 AI 新闻早报 - 网站自动更新脚本 (修复版)
 * 每天早上 7:30 执行：检查数据完整性 → 构建 → 部署
 * 
 * 修复内容：
 * 1. 不再覆盖真实新闻数据
 * 2. 验证数据完整性后才部署
 * 3. 添加详细的错误处理和日志
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const PROJECT_DIR = '/Users/ifai_macpro/.openclaw/workspace/xiaoyumao-news-web';
const DATA_FILE = path.join(PROJECT_DIR, 'src/data/news.ts');
const DIST_DIR = path.join(PROJECT_DIR, 'dist');

// 检查数据文件是否包含真实新闻（而不是占位符）
function validateNewsData() {
  console.log('🔍 验证新闻数据完整性...');
  
  const content = fs.readFileSync(DATA_FILE, 'utf-8');
  
  // 检查是否包含占位符
  if (content.includes('RSS 自动更新测试中') || 
      content.includes('[自动更新] AI 新闻正在抓取中') ||
      content.includes('今日 AI 核心主题待更新') ||
      content.includes('今日 AI 核心主题待生成')) {
    console.error('❌ 数据文件包含占位符内容，跳过部署');
    console.error('   请确保新闻数据已正确生成后再运行部署');
    return false;
  }
  
  // 检查新闻数量
  const newsMatches = content.match(/id:\s*"\d+"/g);
  const newsCount = newsMatches ? newsMatches.length : 0;
  
  if (newsCount < 10) {
    console.error(`❌ 新闻数量不足：${newsCount} 条（需要至少 10 条）`);
    return false;
  }
  
  console.log(`✅ 数据验证通过：${newsCount} 条新闻`);
  return true;
}

// 构建项目
function buildProject() {
  try {
    console.log('🔨 正在构建项目...');
    execSync('npm run build', { 
      cwd: PROJECT_DIR, 
      stdio: 'inherit' 
    });
    console.log('✅ 构建成功');
    return true;
  } catch (error) {
    console.error('❌ 构建失败:', error.message);
    return false;
  }
}

// 部署到 Vercel
function deployToVercel() {
  try {
    console.log('🚀 正在部署到 Vercel...');
    
    // 检查是否有 Vercel Token
    const token = process.env.VERCEL_TOKEN;
    if (!token) {
      console.log('⚠️  VERCEL_TOKEN 未设置，尝试交互式登录...');
      execSync('npx vercel@latest --prod', {
        cwd: PROJECT_DIR,
        stdio: 'inherit'
      });
    } else {
      execSync(`npx vercel@latest --token ${token} --yes --prod`, {
        cwd: PROJECT_DIR,
        stdio: 'inherit'
      });
    }
    
    console.log('✅ 部署完成！');
    console.log('🌐 网站地址: https://xiaoyumao-news-web.vercel.app');
    return true;
  } catch (error) {
    console.error('❌ 部署失败:', error.message);
    console.error('\n💡 解决方案：');
    console.error('   1. 运行: npx vercel@latest login');
    console.error('   2. 重新运行此脚本');
    return false;
  }
}

// 主函数
function main() {
  console.log('🪶 小羽毛 AI 新闻早报 - 自动部署脚本 (修复版)');
  console.log('==============================================');
  console.log('');
  
  // 步骤 1：验证数据
  if (!validateNewsData()) {
    process.exit(1);
  }
  
  console.log('');
  
  // 步骤 2：构建
  if (!buildProject()) {
    process.exit(1);
  }
  
  console.log('');
  
  // 步骤 3：部署
  if (!deployToVercel()) {
    process.exit(1);
  }
  
  console.log('');
  console.log('🎉 全部完成！早报已成功更新。');
}

main();
