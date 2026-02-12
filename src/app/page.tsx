import { dailyNewsData } from '@/data/news';
import { NewsItem, HotApp } from '@/types';
import { 
  Calendar, 
  Sparkles, 
  TrendingUp, 
  ExternalLink,
  Cpu,
  Globe,
  DollarSign,
  Smartphone,
  Zap
} from 'lucide-react';

// 小羽毛 SVG 图标 - 蓝紫渐变
function FeatherIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <path 
        d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" 
        stroke="url(#featherGradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M16 8L2 22" 
        stroke="url(#featherGradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M17.5 15H9" 
        stroke="url(#featherGradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

// 四色系统：高级灰、浅蓝-蓝渐变、深蓝、紫色
const categoryConfig = {
  headline: { 
    icon: Zap, 
    label: '头条', 
    color: 'bg-blue-600'  // 深蓝
  },
  industry: { 
    icon: Cpu, 
    label: '行业', 
    color: 'bg-slate-500'  // 高级灰
  },
  capital: { 
    icon: DollarSign, 
    label: '资本', 
    color: 'bg-violet-600'  // 紫色
  },
  global: { 
    icon: Globe, 
    label: '全球', 
    color: 'bg-blue-700'  // 更深蓝
  },
  hardware: { 
    icon: Cpu, 
    label: '硬件', 
    color: 'bg-slate-400'  // 浅高级灰
  },
  product: { 
    icon: Smartphone, 
    label: '产品', 
    color: 'bg-blue-400'  // 浅蓝
  }
};

function NewsCard({ item, size = 'medium' }: { item: NewsItem; size?: 'large' | 'medium' | 'small' }) {
  const config = categoryConfig[item.category];
  const Icon = config.icon;
  
  const sizeClasses = {
    large: 'col-span-2 row-span-2 p-7',
    medium: 'col-span-1 row-span-1 p-5',
    small: 'col-span-1 row-span-1 p-5'
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group block bg-white 
        border border-gray-200 rounded-xl
        transition-all duration-300 ease-out
        hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5
        hover:-translate-y-0.5
        cursor-pointer
        ${sizeClasses[size]}
      `}
    >
      <div className="h-full flex flex-col">
        {/* 分类标签 - 纯色，无渐变 */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`
            inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-white
            ${config.color}
            whitespace-nowrap flex-shrink-0
          `}
          >
            <Icon className="w-3 h-3" />
            <span>{config.label}</span>
          </span>
          <span className="text-xs text-gray-400 truncate">{item.source}</span>
        </div>
        
        {/* 标题 */}
        <h3 className={`font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 ${
          size === 'large' ? 'text-xl' : 'text-base'
        }`}
        >
          {item.title}
        </h3>
        
        {/* 摘要 */}
        <p className="text-gray-600 line-clamp-2 flex-grow text-sm leading-relaxed"
        >
          {item.summary}
        </p>
        
        {/* 底部链接 */}
        <div className="flex items-center gap-1 mt-3 text-xs text-gray-400 group-hover:text-blue-500 transition-colors"
        >
          <span>阅读全文</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
}

function HotAppCard({ app, index }: { app: HotApp; index: number }) {
  return (
    <a
      href={app.url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl border border-gray-200 p-5 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 cursor-pointer"
    >
      <div className="relative">
        {/* 排名 - 浅蓝到蓝渐变 */}
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-sm"
        >
          {index + 1}
        </div>
        
        {/* 平台标签 - 高级灰 */}
        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 mb-3"
        >
          {app.platform}
        </span>
        
        {/* 应用名称 */}
        <h4 className="font-semibold text-gray-800 text-base mb-1 group-hover:text-blue-600 transition-colors"
        >
          {app.name}
        </h4>        
        {/* 功能 */}
        <p className="text-gray-600 text-sm mb-1">{app.function}</p>        
        {/* 亮点 */}
        <p className="text-gray-500 text-xs line-clamp-2">{app.highlight}</p>
      </div>
    </a>
  );
}

export default function Home() {
  const { date, weekday, message, summary, news, hotApps } = dailyNewsData;

  const headlines = news.filter(n => n.category === 'headline');
  const industry = news.filter(n => n.category === 'industry');
  const capital = news.filter(n => n.category === 'capital');
  const global = news.filter(n => n.category === 'global');
  const hardware = news.filter(n => n.category === 'hardware');
  const product = news.filter(n => n.category === 'product');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-800"
    >
      {/* Header */}
      <header className="bg-white border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-8 sm:py-10">          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border border-blue-200"
              >
                <FeatherIcon className="w-6 h-6" />
              </div>              
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700 via-blue-700 to-blue-500 bg-clip-text text-transparent"
                >
                  小羽毛 AI 新闻早报
                </h1>
                <p className="text-xs text-slate-500 mt-0.5">
                  Xiaoyumao AI Morning News
                </p>
              </div>
            </div>            
            <div className="flex items-center gap-2 text-slate-600 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200"
            >
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="font-medium text-sm">{date}</span>
              <span className="text-slate-400">·</span>
              <span className="text-sm">{weekday}</span>
            </div>
          </div>          
          {/* 每日寄语 - 浅蓝背景 */}
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100"
          >
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">今日寄语</span>
            </div>
            <p className="text-slate-700 text-sm">{message}</p>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">        
        {/* 新闻区域 */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm shadow-blue-500/25"
            >
              <TrendingUp className="w-4 h-4 text-white" />
            </div>            
            <h2 className="text-lg font-bold text-slate-800">AI 新闻速递</h2>            
            <span className="ml-auto text-sm text-slate-500">共 {news.length} 条</span>
          </div>          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min"
          >            
            {headlines.slice(0, 2).map((item) => (
              <NewsCard key={item.id} item={item} size="large" />
            ))}            
            {industry.slice(0, 3).map((item) => (
              <NewsCard key={item.id} item={item} size="medium" />
            ))}            
            {capital.slice(0, 2).map((item) => (
              <NewsCard key={item.id} item={item} size="medium" />
            ))}            
            {global.slice(0, 3).map((item) => (
              <NewsCard key={item.id} item={item} size="small" />
            ))}            
            {hardware.map((item) => (
              <NewsCard key={item.id} item={item} size="small" />
            ))}            
            {product.map((item) => (
              <NewsCard key={item.id} item={item} size="small" />
            ))}
          </div>
        </section>

        {/* 热门应用 */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shadow-sm shadow-violet-500/25"
            >
              <Zap className="w-4 h-4 text-white" />
            </div>            
            <h2 className="text-lg font-bold text-slate-800">热门应用 TOP 5</h2>
          </div>          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >            
            {hotApps.map((app, index) => (
              <HotAppCard key={app.name} app={app} index={index} />
            ))}
          </div>
        </section>

        {/* 一句话总结 - 深蓝背景 */}
        <section className="mb-12">
          <div className="bg-blue-700 rounded-xl p-6 text-white"
          >            
            <h3 className="text-base font-semibold mb-3 flex items-center gap-2"
            >              
              <Sparkles className="w-5 h-5 text-blue-200" />
              一句话总结
            </h3>            
            <p className="text-blue-100 text-sm leading-relaxed">{summary}</p>          
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">        
        <div className="max-w-6xl mx-auto px-6 py-6">          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3"
          >            
            <div className="flex items-center gap-2">
              <FeatherIcon className="w-4 h-4" />
              <p className="text-xs text-slate-500">
                © 2026 小羽毛 AI 新闻早报 · 每日 7:00 更新
              </p>
            </div>            
            <p className="text-xs text-slate-400">              Made with <span className="text-blue-500">🪶</span> by Xiaoyumao            </p>
          </div>        
        </div>      
    </footer>
    </main>
  );
}
