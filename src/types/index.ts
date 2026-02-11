export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  category: 'headline' | 'industry' | 'capital' | 'global' | 'hardware' | 'product';
}

export interface HotApp {
  platform: string;
  name: string;
  function: string;
  highlight: string;
  url?: string;
}

export interface DailyNews {
  date: string;
  weekday: string;
  message: string;
  summary: string;
  news: NewsItem[];
  hotApps: HotApp[];
}