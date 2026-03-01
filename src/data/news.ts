// 2026年3月1日 早报数据
export const newsData = {
  date: "2026年3月1日",
  weekday: "星期日",
  solarTerm: "雨水",
  lunarDate: "正月十三",
  quote: "雨水洗春尘，万物生光辉。愿你在 AI 的浪潮中，如春雨般润物无声，滋养出属于自己的创新果实。",
  headlines: [
    {
      title: "OpenAI 完成 $110B 融资，估值达 $730B",
      desc: "软银、英伟达和亚马逊参投，资金将用于扩展 AI 基础设施及将前沿 AI 整合至全球日常应用。",
      source: "OpenAI / GeekPark",
      category: "头条"
    },
    {
      title: "五角大楼与 Anthropic 爆发冲突，合同面临终止",
      desc: "Anthropic 拒绝对抗“大规模监控”条款，五角大楼或将其列入黑名单；OpenAI 则表示将在此限制下继续合作。",
      source: "The Verge / Ksat",
      category: "头条"
    },
    {
      title: "英伟达 Q4 营收激增 73%，黄仁勋押注 \"Agentic AI\"",
      desc: "单季营收达 680 亿美元，CEO 称 AI 正从“聊天”转向“行动”，推理侧算力需求将指数级增长。",
      source: "GeekPark",
      category: "头条"
    }
  ],
  sections: [
    {
      title: "🌏 全球格局与资本",
      items: [
        {
          title: "科技巨头打响 \"AI 资本支出战\"",
          desc: "Meta、亚马逊、谷歌和微软宣布大幅增加 2026 年 AI 基础设施投入，其中 Meta 预算上调 73%。",
          source: "The Motley Fool"
        },
        {
          title: "Block 裁员 40%，Jack Dorsey 称 AI 提升效率",
          desc: "支付巨头 Block 裁减超 4000 人，创始人表示 AI 工具让公司能以更少人力维持增长。",
          source: "GeekPark"
        },
        {
          title: "Google Gemini 市场份额升至 21%",
          desc: "Gemini 在企业级 LLM 市场份额显著增长，而 Meta 的份额则从 16% 下滑至 8%。",
          source: "Catholic World Report"
        }
      ]
    },
    {
      title: "🇨🇳 中国 AI 动态",
      items: [
        {
          title: "北京发布 2026 AI 产业规划，规模将达 5500 亿",
          desc: "计划培育 2-3 家生态主导型领军企业，深化科研、制造等领域的 AI 应用。",
          source: "中国新闻网"
        },
        {
          title: "MiniMax Agent 升级，降低 OpenClaw 使用门槛",
          desc: "新版支持一键部署 OpenClaw 生态，致力于让普通用户也能构建自己的 AI Agent。",
          source: "GeekPark"
        },
        {
          title: "杭州打造 \"AI+\" 标杆场景，算力超 70 EFlops",
          desc: "杭州市定下 2026 年目标，将建设 10 个以上 AI 应用示范场景。",
          source: "中国新闻网"
        }
      ]
    },
    {
      title: "🛠️ 技术与硬件",
      items: [
        {
          title: "OpenAI 与 AWS 合作开发 \"有状态运行时\"",
          desc: "旨在让 AI Agent 能够保留上下文记忆并持续访问计算资源，预计数月内推出。",
          source: "GeekPark"
        },
        {
          title: "T-Mobile 联手德电信启动 6G 创新中心",
          desc: "双方将共同研发 AI 原生的 6G 网络，聚焦智能连接与广域感知。",
          source: "T-Mobile"
        },
        {
          title: "中兴通讯在巴基斯坦商用 AI FDD Massive MIMO",
          desc: "携手运营商 Zong 实现首个基于 AI 的大规模天线阵列商用部署，提升网络性能。",
          source: "中兴通讯"
        }
      ]
    },
    {
      title: "📱 产品与应用",
      items: [
        {
          title: "汉堡王部署 AI 聊天机器人 \"Patty\"",
          desc: "\"Patty\" 将在员工耳机中运行，辅助备餐并评估服务态度。",
          source: "The Verge"
        },
        {
          title: "三星宣布 2030 全球工厂转型 \"AI 驱动\"",
          desc: "利用数字孪生和 AI Agent 实现生产全流程的自动化与智能化。",
          source: "Samsung"
        },
        {
          title: "MIT 发布 GenAI + Physics 新研究",
          desc: "探索将生成式 AI 与物理法则结合，设计并制造能在现实世界运作的个性化物品。",
          source: "MIT"
        }
      ]
    }
  ],
  hotApps: [
    {
      name: "[Product Hunt] Claude in Excel",
      desc: "直接在 Excel 表格中调用 Claude 进行数据分析、清洗和公式生成。",
      analysis: "将强大的 AI 能力无缝嵌入最通用的办公场景，大幅降低了数据处理门槛。"
    },
    {
      name: "[GitHub] anthropics / claude-code",
      desc: "Anthropic 官方推出的终端编码 Agent，能理解代码库并执行复杂任务。",
      analysis: "Agentic Coding 的标杆工具，直接在命令行中接管 Git 工作流和代码重构。"
    },
    {
      name: "[Toolify] Seedance 2.0 (ByteDance)",
      desc: "字节跳动推出的高质量 AI 视频生成模型，支持复杂动作和长视频。",
      analysis: "在 Sora 之后继续推高视频生成的天花板，特别是在动作一致性上表现出色。"
    },
    {
      name: "[GitHub] moeru-ai / airi",
      desc: "一个自托管的 Grok 伴侣，支持 Minecraft 等游戏中的实时语音互动。",
      analysis: "二次元 + 游戏 + 实时语音，精准击中年轻开发者群体的痛点，极具社区传播力。"
    },
    {
      name: "[Hacker News] MIT GenAI + Physics Research",
      desc: "MIT 关于将生成式 AI 用于物理对象设计的论文和代码。",
      analysis: "硬核技术讨论，展示了 AI 从生成像素/文字向生成实体物理结构的跨越。"
    }
  ]
};
// Updated at Sun Mar  1 14:54:43 CST 2026
