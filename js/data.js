// =============================================================================
// ReTAI Lab - Data Configuration
// =============================================================================
// Edit this file to add/update people, publications, and projects.
// The website will automatically render changes.
// =============================================================================

// -----------------------------------------------------------------------------
// PEOPLE DATA
// -----------------------------------------------------------------------------
const PEOPLE = {
  faculty: [
    {
      name: "Irwin King",
      role: "Faculty",
      affiliation: "CUHK",
      advisor: null,
      links: {
        homepage: "#",
        scholar: "#",
        github: "#"
      }
    },
    {
      name: "Zenglin Xu",
      role: "Faculty",
      affiliation: "CUHK",
      advisor: null,
      links: {
        homepage: "#",
        scholar: "#",
        github: "#"
      }
    }
  ],

  phdStudents: [
    // Supervised by Prof. Irwin King
    {
      name: "Dianzhi Yu",
      role: "PhD Student",
      affiliation: "CUHK",
      advisor: "Prof. Irwin King",
      links: { homepage: "#", scholar: "#", github: "#" }
    },
    {
      name: "Muzhi Li",
      role: "PhD Student",
      affiliation: "CUHK",
      advisor: "Prof. Irwin King",
      links: { homepage: "#", scholar: "#", github: "#" }
    },
    {
      name: "Wenqian Cui",
      role: "PhD Student",
      affiliation: "CUHK",
      advisor: "Prof. Irwin King",
      links: { homepage: "#", scholar: "#", github: "#" }
    },
    {
      name: "Jiahong Liu",
      role: "PhD Student",
      affiliation: "CUHK",
      advisor: "Prof. Irwin King",
      links: { homepage: "#", scholar: "#", github: "#" }
    },
    {
      name: "Jinhu Qi",
      role: "PhD Student",
      affiliation: "CUHK",
      advisor: "Prof. Irwin King",
      links: { homepage: "#", scholar: "#", github: "#" }
    },
    // Supervised by Prof. Zenglin Xu
    {
      name: "Yiyang Zhao",
      role: "PhD Student",
      affiliation: "CUHK",
      advisor: "Prof. Zenglin Xu",
      links: { homepage: "#", scholar: "#", github: "#" }
    },
    {
      name: "Yiyi Chen",
      role: "PhD Student",
      affiliation: "CUHK",
      advisor: "Prof. Zenglin Xu",
      links: { homepage: "#", scholar: "#", github: "#" }
    },
    {
      name: "Ruoxi Jiang",
      role: "PhD Student",
      affiliation: "CUHK",
      advisor: "Prof. Zenglin Xu",
      links: { homepage: "#", scholar: "#", github: "#" }
    }
  ],

  researchStudents: [
    {
      name: "Shicheng Ma",
      role: "Research Student",
      affiliation: "CUHK",
      advisor: "Prof. Irwin King",
      links: { homepage: "#", scholar: "#", github: "#" }
    },
    {
      name: "Yuqin Shu",
      role: "Research Student",
      affiliation: "CUHK",
      advisor: "Prof. Irwin King",
      links: { homepage: "#", scholar: "#", github: "#" }
    }
  ]
};

// -----------------------------------------------------------------------------
// RESEARCH TOPICS
// -----------------------------------------------------------------------------
const RESEARCH_TOPICS = [
  {
    title: "Trustworthy Agentic AI",
    description: "Building AI agents that are reliable, transparent, and aligned with human intentions across complex, multi-step tasks."
  },
  {
    title: "Long-horizon Memory & Retrieval",
    description: "Developing memory architectures that enable AI systems to maintain coherent context over extended interactions."
  },
  {
    title: "Conflict-aware Reasoning & Reranking",
    description: "Addressing information conflicts and inconsistencies in retrieval-augmented generation systems."
  },
  {
    title: "Safety, Robustness & Secure Deployment",
    description: "Ensuring AI systems remain safe and robust against adversarial attacks and distribution shifts."
  },
  {
    title: "Evaluation, Benchmarks & Failure Modes",
    description: "Creating comprehensive evaluation frameworks to identify and characterize AI system limitations."
  },
  {
    title: "Human-in-the-loop Alignment & Governance",
    description: "Integrating human oversight and feedback mechanisms for responsible AI deployment."
  }
];

// -----------------------------------------------------------------------------
// PUBLICATIONS
// -----------------------------------------------------------------------------
// Add publications here. Each entry will be rendered automatically.
const PUBLICATIONS = [
  {
    title: "Paper Title Placeholder: Towards Trustworthy Agentic Systems",
    authors: "Author A, Author B, Author C",
    venue: "Conference on AI Safety (CAIS)",
    year: 2025,
    links: {
      paper: "#",
      code: "#",
      project: "#"
    }
  },
  {
    title: "Paper Title Placeholder: Memory-Augmented Retrieval for Long-Context Reasoning",
    authors: "Author D, Author E, Author F",
    venue: "International Conference on Machine Learning (ICML)",
    year: 2025,
    links: {
      paper: "#",
      code: "#",
      project: "#"
    }
  }
];

// -----------------------------------------------------------------------------
// PROJECTS (Open Source)
// -----------------------------------------------------------------------------
const PROJECTS = [
  {
    name: "ReTAI-Bench",
    description: "Trustworthy Agentic Benchmark Suite for evaluating reliability and safety of AI agents.",
    tags: ["Benchmark", "Agentic", "Evaluation"],
    github: "#"
  },
  {
    name: "ReTAI-Memory",
    description: "Long-horizon Conversational Memory Toolkit for persistent context management.",
    tags: ["Memory", "RAG", "Retrieval"],
    github: "#"
  },
  {
    name: "ReTAI-Governance",
    description: "Evaluation & Monitoring Utilities for responsible AI deployment and oversight.",
    tags: ["Safety", "Monitoring", "Governance"],
    github: "#"
  }
];

// -----------------------------------------------------------------------------
// RESEARCH PILLARS (for About section)
// -----------------------------------------------------------------------------
const RESEARCH_PILLARS = [
  {
    icon: "🤖",
    title: "Trustworthy Agentic AI",
    description: "Reliable & transparent AI agents"
  },
  {
    icon: "🛡️",
    title: "Robustness & Security",
    description: "Safe systems under adversarial conditions"
  },
  {
    icon: "📊",
    title: "Evaluation & Benchmarks",
    description: "Rigorous assessment frameworks"
  },
  {
    icon: "🚀",
    title: "AI Systems & Deployment",
    description: "Scalable & responsible deployment"
  }
];
