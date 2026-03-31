export interface Demo {
  id: string;
  title: string;
  description: string;
  full_description: string;
  image_url: string;
  demo_url: string;
  tags: string[];
  features: string[];
  company: string;
  industry: string;
  location: string;
  company_size: string;
  website: string;
  topics: string;
  created_at: string;
}

export const demos: Demo[] = [
  {
    id: "smart-inventory-manager",
    title: "Smart Inventory Manager",
    description:
      "AI-powered inventory tracking and demand forecasting system for retail businesses.",
    full_description:
      "Uses machine learning to analyze sales data and predict inventory needs with high accuracy.",
    image_url:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
    demo_url: "https://demo.smart-inventory.com",
    tags: ["Automation", "AI System"],
    features: [
      "Real-time inventory tracking",
      "Demand forecasting",
      "Automated reorder points",
      "Supplier analytics",
    ],
    company: "Ocean Intuition",
    industry: "Retail Technology",
    location: "Global",
    company_size: "Enterprise",
    website: "https://oceanintuition.com",
    topics: "Inventory Management, AI Forecasting",
    created_at: "2025-06-18T00:00:00Z",
  },
  {
    id: "customer-support-bot",
    title: "Customer Support Bot",
    description: "Intelligent chatbot that handles customer inquiries.",
    full_description:
      "Handles up to 80% of support queries automatically using NLP and smart escalation.",
    image_url:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
    demo_url: "https://demo.support-bot.com",
    tags: ["AI System", "Automation"],
    features: [
      "24/7 support",
      "Multi-language",
      "Sentiment analysis",
      "Human handoff",
    ],
    company: "Ocean Intuition",
    industry: "Customer Service",
    location: "Global",
    company_size: "Enterprise",
    website: "https://oceanintuition.com",
    topics: "AI Chatbots, Customer Support",
    created_at: "2025-05-30T00:00:00Z",
  },
  {
    id: "document-processing-pipeline",
    title: "Document Processing Pipeline",
    description: "Automated document extraction and classification.",
    full_description:
      "Extracts and classifies data from documents like invoices and contracts automatically.",
    image_url:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
    demo_url: "https://demo.doc-process.com",
    tags: [
      "Automation",
      "Optimization",
      "Automation1",
      "Optimization1",
      "Automation2",
      "Optimization2",
    ],
    features: [
      "OCR processing",
      "Data extraction",
      "Document classification",
      "Compliance checks",
    ],
    company: "Ocean Intuition",
    industry: "Legal & Finance",
    location: "Global",
    company_size: "Enterprise",
    website: "https://oceanintuition.com",
    topics: "OCR, Data Extraction",
    created_at: "2025-05-15T00:00:00Z",
  },
  {
    id: "sales-analytics-dashboard",
    title: "Sales Analytics Dashboard",
    description: "Real-time sales insights with predictive analytics.",
    full_description:
      "Provides real-time insights and forecasts to help teams make better sales decisions.",
    image_url:
      "https://cdn.pixabay.com/photo/2017/06/22/20/24/dewdrops-2432391_1280.jpg",
    demo_url: "https://demo.sales-analytics.com",
    tags: ["AI System", "Optimization"],
    features: [
      "Real-time tracking",
      "Predictive forecasting",
      "Pipeline analytics",
      "Custom reports",
    ],
    company: "Ocean Intuition",
    industry: "Sales & Marketing",
    location: "Global",
    company_size: "Enterprise",
    website: "https://oceanintuition.com",
    topics: "Sales Analytics, BI",
    created_at: "2025-04-25T00:00:00Z",
  },
  {
    id: "workflow-automation-suite",
    title: "Workflow Automation Suite",
    description: "End-to-end workflow automation for business processes.",
    full_description:
      "No-code automation tool to connect apps and automate repetitive workflows.",
    image_url:
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    demo_url: "https://demo.workflow-automation.com",
    tags: ["Automation", "Optimization"],
    features: [
      "Visual builder",
      "App integrations",
      "Conditional logic",
      "Scheduling",
    ],
    company: "Ocean Intuition",
    industry: "Business Operations",
    location: "Global",
    company_size: "Enterprise",
    website: "https://oceanintuition.com",
    topics: "Workflow Automation, No-Code",
    created_at: "2025-04-10T00:00:00Z",
  },
  {
    id: "predictive-maintenance-system",
    title: "Predictive Maintenance System",
    description: "AI-driven equipment monitoring to prevent failures.",
    full_description:
      "Monitors equipment health and predicts failures before they happen.",
    image_url:
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg",
    demo_url: "https://demo.predictive-maint.com",
    tags: ["AI System", "Automation"],
    features: [
      "Real-time monitoring",
      "Anomaly detection",
      "Failure alerts",
      "Maintenance scheduling",
    ],
    company: "Ocean Intuition",
    industry: "Industrial IoT",
    location: "Global",
    company_size: "Enterprise",
    website: "https://oceanintuition.com",
    topics: "Predictive Maintenance, IoT",
    created_at: "2025-03-20T00:00:00Z",
  },
];
