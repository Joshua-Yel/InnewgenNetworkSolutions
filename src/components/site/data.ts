export const services = [
  { n: "01", slug: "web", title: "Web Development", line: "Fast, modern, responsive websites that earn trust in the first three seconds.", tags: ["Marketing sites", "E-commerce", "CMS", "SEO-ready"] },
  { n: "02", slug: "systems", title: "System Development", line: "Robust, scalable internal systems that replace spreadsheets and manual work.", tags: ["Dashboards", "Records", "Workflows", "Integrations"] },
  { n: "03", slug: "ai", title: "AI Software", line: "Practical AI features — assistants, automation and engines that do real work.", tags: ["LLM apps", "Automation", "Chatbots", "Data"] },
  { n: "04", slug: "fullstack", title: "Full-Stack Builds", line: "Frontend to backend, owned end-to-end by one accountable team.", tags: ["APIs", "Databases", "Auth", "DevOps"] },
  { n: "05", slug: "mobile", title: "Mobile Apps", line: "User-friendly iOS and Android apps people actually keep on their home screen.", tags: ["iOS", "Android", "Cross-platform"] },
  { n: "06", slug: "qa", title: "Software Testing", line: "Quality and reliability checks so launch day is boring — in the best way.", tags: ["QA", "Automation tests", "Security", "Performance"] },
];

export const projects = [
  { name: "RCAM Website", kind: "Web", metric: "100k+", metricLabel: "monthly visitors", desc: "Official website of the Roman Catholic Archdiocese of Manila.", url: "https://rcam.org/", hue: "volt" },
  { name: "PSMS", kind: "System", metric: "20+", metricLabel: "parishes digitized", desc: "A centralized digital system for parishes under Manila Cathedral.", url: "", hue: "ink" },
  { name: "Heera Glow", kind: "E-commerce", metric: "300%", metricLabel: "conversion boost", desc: "Luxury skincare e-commerce platform.", url: "https://heeraglow.com/", hue: "signal" },
  { name: "Boxed Blossoms", kind: "E-commerce", metric: "500%", metricLabel: "traffic increase", desc: "A luxury flower shop website based in Makati, Philippines.", url: "https://boxedblossoms.com/", hue: "volt" },
  { name: "PortfolioHub", kind: "Web", metric: "1,000+", metricLabel: "portfolios hosted", desc: "A platform to showcase and discover creative portfolios.", url: "https://portfoliohub-demo.vercel.app/", hue: "ink" },
  { name: "Aura 300", kind: "AI · Frontend", metric: "Daily", metricLabel: "new users", desc: "AI salon engine.", url: "https://www.aura300.ai/", hue: "signal" },
  { name: "Verde", kind: "System", metric: "AI", metricLabel: "demand forecasting", desc: "Decision support system for AI-assisted demand forecasting and salon operations.", url: "https://verde-dss.vercel.app/", hue: "volt" },
] as const;

export const stack = ["React", "Angular", "Vue", "Tailwind", "JavaScript", "PHP", "Python", "Node.js", "Laravel", "PostgreSQL", "MySQL", "Docker", "AWS", "Flutter", "C", "AI / LLMs"];