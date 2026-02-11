import { dailyNewsData } from '@/data/news';
import { NewsItem, HotApp } from '@/types';
import { 
  Feather, 
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

const categoryIcons = {
  headline: Zap,
  industry: Cpu,
  capital: DollarSign,
  global: Globe,
  hardware: Cpu,
  product: Smartphone
};

const categoryNames = {
  headline: '头条',
  industry: '行业',
  capital: '资本',
  global: '全球',
  hardware: '硬件',
  product: '产品'
};

const categoryColors = {
  headline: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
  industry: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  capital: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
  global: 'from-violet-500/20 to-purple-500/20 border-violet-500/30',
  hardware: 'from-rose-500/20 to-pink-500/20 border-rose-500/30',
  product: 'from-indigo-500/20 to-blue-500/20 border-indigo-500/30'
};

function NewsCard({ item, size = 'medium' }: { item: NewsItem; size?: 'large' | 'medium' | 'small' }) {
  const Icon = categoryIcons[item.category];
  const sizeClasses = {
    large: 'col-span-2 row-span-2 p-6',
    medium: 'col-span-1 row-span-1 p-5',
    small: 'col-span-1 row-span-1 p-4'
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md
        border border-white/40 shadow-lg shadow-black/5
        hover:shadow-xl hover:shadow-black/10 hover:bg-white/80
        transition-all duration-300 ease-out
        ${sizeClasses[size]}
      `}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[item.category]} opacity-50`} />
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/70 text-slate-700">
            <Icon className="w-3.5 h-3.5" />
            {categoryNames[item.category]}
          </span>
          <span className="text-xs text-slate-500">{item.source}</span>
        </div>
        <h3 className={`font-semibold text-slate-800 mb-2 group-hover:text-slate-900 line-clamp-2 ${
          size === 'large' ? 'text-xl' : size === 'medium' ? 'text-base' : 'text-sm'
        }`}>
          {item.title}
        </h3>
        <p className={`text-slate-600 line-clamp-2 flex-grow ${
          size === 'large' ? 'text-base' : 'text-sm'
        }`}>
          {item.summary}
        </p>
        <div className="flex items-center gap-1 mt-3 text-xs text-slate-400 group-hover:text-slate-600 transition-colors">
          <span>阅读更多</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </a>
  );
}

function HotAppCard({ app }: { app: HotApp }) {
  return (
    <a
      href={app.url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50/80 to-white/60 backdrop-blur-md border border-white/60 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 hover:from-white/90 hover:to-slate-50/70 transition-all duration-300 p-5 flex flex-col"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full" />
      <div className="relative z-10">
        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border border-blue-500/20 mb-3">
          {app.platform}
        </span>
        <h4 className="font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors">
          {app.name}
        </h4>
        <p className="text-sm text-slate-600 mb-2">{app.function}</p>
        <p className="text-xs text-slate-500 line-clamp-2">{app.highlight}</p>
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-slate-200/60 bg-white/40 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Feather className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  小羽毛 AI 新闻早报
                </h1>
                <p className="text-sm text-slate-500">Xiaoyumao AI Morning News</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60">
              <Calendar className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{date}</span>
              <span className="text-slate-400">·</span>
              <span>{weekday}</span>
            </div>
          </div>
          
          {/* Daily Message */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-50/80 via-orange-50/60 to-amber-50/80 border border-amber-200/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-amber-700">今日寄语</span>
            </div>
            <p className="text-slate-700 font-medium">{message}</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* News Grid - Bento Layout */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800">AI 新闻速递</h2>
            <span className="ml-auto text-sm text-slate-500">共 15 条精选</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
            {/* Headlines - Large Cards */}
            {headlines.slice(0, 2).map((item) => (
              <NewsCard key={item.id} item={item} size="large" />
            ))}
            
            {/* Industry - Medium */}
            {industry.slice(0, 3).map((item) => (
              <NewsCard key={item.id} item={item} size="medium" />
            ))}
            
            {/* Capital - Medium */}
            {capital.slice(0, 2).map((item) => (
              <NewsCard key={item.id} item={item} size="medium" />
            ))}
            
            {/* Global - Small */}
            {global.slice(0, 3).map((item) => (
              <NewsCard key={item.id} item={item} size="small" />
            ))}
            
            {/* Hardware - Small */}
            {hardware.map((item) => (
              <NewsCard key={item.id} item={item} size="small" />
            ))}
            
            {/* Product - Small */}
            {product.map((item) => (
              <NewsCard key={item.id} item={item} size="small" />
            ))}
          </div>
        </section>

        {/* Hot Apps Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-800">热门应用 TOP 5</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hotApps.map((app) => (
              <HotAppCard key={app.name} app={app} />
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-xl">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              一句话总结
            </h3>
            <p className="text-slate-200 leading-relaxed">{summary}</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>© 2026 小羽毛 AI 新闻早报 · 每日 7:00 更新</p>
            <p>Made with 🪶 by Xiaoyumao</p>
          </div>
        </div>
      </footer>
    </main>
  );
}