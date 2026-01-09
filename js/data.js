console.log("ReTAI Lab: data.js loading...");
const retaiData = {
    labName: "Reliable & Trustworthy AI (ReTAI) Lab",
    footerYear: new Date().getFullYear(),
    about: {
        text: "Reliable & Trustworthy AI (ReTAI) Lab is a joint research initiative at CUHK and Fudan University co-led by Prof. Irwin King and Prof. Zenglin Xu. We study reliable, secure, and trustworthy AI systems, spanning agentic AI, long-horizon reasoning, evaluation, robustness, and deployment.",
        topics: [
            "Trustworthy Agentic AI and autonomous planning",
            "Long-horizon memory, retrieval, and conflict-aware reranking",
            "Robustness, security, and safe deployment of AI systems",
            "Evaluation, benchmarks, and failure mode analysis",
            "Governance, monitoring, and human-in-the-loop alignment"
        ]
    },
    news: [
        { date: "2025-11-13", tag: "Paper", title: "One paper accepted to AAAI-26, Singapore" },
        { date: "2025-10-24", tag: "Award", title: "Amazon Research Award Recognition, Spring 2025" },
        { date: "2025-10-17", tag: "Service", title: "Prof. Irwin King will serve as the Steering Committee Member for IAIT 2026" },
        { date: "2025-10-17", tag: "Service", title: "Prof. Irwin King will serve as the Co-Chair of the Awards for IJCNN 2027" },
        { date: "2025-09-20", tag: "Paper", title: "One paper accepted to NeurIPS 2025 Workshop, San Diego, USA" },
        { date: "2025-09-20", tag: "Paper", title: "One paper accepted to NeurIPS 2025, San Diego, USA" },
        { date: "2025-09-18", tag: "Service", title: "Prof. Irwin King accepted as a PC for the Short Papers, WebConf 2026, Dubai" },
        { date: "2025-09-18", tag: "Service", title: "Prof. Irwin King accepted as an SPC for the Responsible Web Track, WebConf 2026, Dubai" },
        { date: "2025-09-04", tag: "Paper", title: "One paper accepted to Nature Computational Science, 2025" },
        { date: "2025-08-28", tag: "Honor", title: "Prof. King included in the 2025 AI 2000 Global Artificial Intelligence Scholars List with Honorable Mention Award" }
    ],
    researchInterests: [
        {
            title: "Trustworthy Agentic AI",
            desc: "Developing autonomous agents that plan, reason, and act reliably in complex, open-ended environments.",
            img: "assets/img/interest/Trustworthy Agentic AI_image.png"
        },
        {
            title: "Social Computing & Graph Intelligence",
            desc: "Uncovering patterns in social networks and complex systems using advanced graph neural networks and data mining techniques.",
            img: "assets/img/interest/social_image.png"
        },
        {
            title: "AI for Science & Multimodal Learning",
            desc: "Accelerating scientific discovery through multimodal large language models and robust time-series analysis.",
            img: "assets/img/interest/aiScience_image.jpg"
        }
    ],
    dblpLinks: [
        { name: "Prof. Irwin King", url: "https://dblp.org/pid/k/IrwinKing.html" },
        { name: "Prof. Zenglin Xu", url: "https://dblp.org/pid/68/1538.html" }
    ],
    publications: [
        {
            year: 2026,
            items: [
                { text: "Authors. Title. Venue, 2026.", links: { pdf: "#", code: "#" } },
                { text: "Authors. Title. Venue, 2026.", links: { pdf: "#", code: "#" } }
            ]
        },
        {
            year: 2025,
            items: [
                { text: "Authors. Title. Venue, 2025.", links: { pdf: "#", code: "#" } },
                { text: "Authors. Title. Venue, 2025.", links: { pdf: "#", code: "#" } }
            ]
        }
    ],
    team: {
        pi: [
            {
                name: "Irwin King",
                role: "B.Sc. (Caltech), M.Sc., Ph.D. (USC)<br>Pro-Vice-Chancellor (Education)<br>Professor<br>Department of Computer Science and Engineering<br>The Chinese University of Hong Kong<br>Fellow of ACM, Fellow of IEEE, Fellow of INNS, Fellow of AAAI, Fellow of HKIE",
                contact: {
                    phone: "(+852) 3943 8398",
                    email: "king@cse.cuhk.edu.hk"
                },
                detailedRoles: [
                    "Director, Centre for eLearning Innovation and Technology (ELITE)",
                    "Director, Rich Media Big Data Analytics and Application Key Laboratory, SZRI",
                    "PI, The Knowledge and Education Exchange Platform (KEEP) and The VeriGuide Project",
                    "Associate Editor, Neural Network Journal",
                    "Associate Editor, International Journal of Data Science and Analytics (JDSA)",
                    "Associate Editor, ACM Transactions on Knowledge Discovery in Data (ACM TKDD)",
                    "Associate Editor, AI Journal (AIJ)",
                    "Associate Editor, Knowledge and Information Systems (KAIS)",
                    "Associate Editor, Artificial Intelligence Science and Engineering (AISE)",
                    "Vice-President, The ACM WebConf Steering Committee"
                ],
                bio: [
                    "Professor Irwin King is a globally recognized scholar in the field of machine intelligence, currently serving as the Pro-Vice-Chancellor (Education) and Professor at the Department of Computer Science & Engineering at The Chinese University of Hong Kong.",
                    "His extensive research interests encompass a wide range of areas, including trustworthy AI, machine learning, social computing, AI, and data mining. Professor King is a Fellow of esteemed societies and associations, such as the ACM, IEEE, INNS, AAAI, and HKIE. Throughout his career, he has assumed various leadership roles in numerous prominent conferences and societies. Notably, he held the position of President of the International Neural Network Society, General Co-chair for conferences such as WebConf 2020, ICONIP 2020, ACML 2015, RecSys 2013, and WSDM 2011. Additionally, he has held leadership capacities in conferences such as WWW, NIPS, ICML, IJCAI, AAAI, and ICONIP. Presently, Professor King continues to serve as the Vice-President of the ACM SIGWEB, the Vice-President of the WebConf Steering Committee, and a board member of the International Neural Network Society (INNS) and Asia Pacific Neural Network Society (APNNS).",
                    "Professor King has received numerous prestigious awards for his contributions to the field of machine intelligence. Notable accolades include the 2021 INNS Dennis Gabor Award for engineering applications of neural networks, the 2020 APNNS Outstanding Achievement Award, and several Test of Time Awards from ACM conferences such as CIKM2019, SIGIR 2020, and WSDM 2022. During his sabbatical leave at AT&T Labs Research in San Francisco, he was a Visiting Professor and taught classes at UC Berkeley.",
                    "Presently, Professor King is the Director of the Centre for Learning Innovation and Technology (ELITE), dedicated to promoting eLearning through education technology. Additionally, he oversees the Machine Intelligence and Social Computing (MISC) Lab, which conducts research in machine learning-related fields.",
                    "Professor King holds a B.Sc. degree in Engineering and Applied Science from the California Institute of Technology (Caltech) and obtained his M.Sc. and Ph.D. degrees in Computer Science from the University of Southern California (USC)."
                ],
                img: "assets/img/people/Irwin-King.jpg",
                links: {
                    homepage: "#",
                    scholar: "https://scholar.google.com/citations?user=MXvC7tkAAAAJ&hl=en",
                    email: "#",
                    linkedin: "https://hk.linkedin.com/in/irwinking",
                    cv: "assets/CV/CV_Prof_Irwin_King_2023.pdf"
                }
            },
            {
                name: "Zenglin Xu",
                role: "Ph.D. (CUHK)<br>Professor<br>AI Innovation and Industry Research Institute<br>School of Computer Science<br>Fudan University",
                contact: {
                    email: "zenglinxu@fudan.edu.cn",
                    address: "Room 308, Computer Building, Zhangjiang Campus, Fudan University"
                },
                detailedRoles: [
                    "Executive Editor, Neural Networks",
                    "Board Member and Vice-President (Education), International Neural Network Society (INNS)",
                    "Chair, AI Education Committee, INNS",
                    "Area Chair / Senior PC Member: NeurIPS, ACL, EMNLP, AAAI, IJCAI",
                    "Distinguished Student Paper Honorable Mention, AAAI 2015",
                    "Young Researcher Award, APNNS 2016",
                    "Stanford's Top 2% Scientists"
                ],
                bio: [
                    "Professor Zenglin Xu is currently a Professor and Ph.D. Supervisor at the School of Computer Science, Fudan University, and the AI Innovation and Industry Research Institute. He obtained his Ph.D. degree in Computer Science & Engineering from The Chinese University of Hong Kong (2005-2009).",
                    "Prior to joining Fudan University, he held research and teaching positions at Michigan State University, Saarland University & Max Planck Institute for Informatics, Purdue University, University of Electronic Science and Technology of China (UESTC), and Harbin Institute of Technology (Shenzhen).",
                    "His research interests focus on machine learning theory and applications, specifically scientific AI (AI for Science) and trustworthy AI. His breadth of expertise covers multimodal learning, time series analysis, graph neural networks, large language models, federated learning, and privacy computing.",
                    "Professor Xu has published over 200 peer-reviewed papers in top-tier journals and conferences such as IEEE TPAMI, TKDE, TNNLS, NeurIPS, and ICML, with over 11,000 citations on Google Scholar. He is an Executive Editor for the journal Neural Networks and serves in leadership roles for the International Neural Network Society (INNS)."
                ],
                img: "assets/img/people/Zenglin Xu.png",
                links: {
                    homepage: "https://xuzenglin.github.io/",
                    scholar: "https://scholar.google.com/citations?user=gF0H9nEAAAAJ&hl=zh-CN",
                    email: "mailto:zenglinxu@fudan.edu.cn",
                    linkedin: "https://www.linkedin.com/in/zenglin/"
                }
            }
        ],
        students: [
            {
                groupname: "Ph.D. Students (Prof. Irwin King)",
                members: [
                    { name: "Dianzhi Yu", role: "Ph.D. Student", links: { homepage: "#", scholar: "#", github: "#" } },
                    { name: "Muzhi Li", role: "Ph.D. Student", links: { homepage: "#", scholar: "#", github: "#" } },
                    { name: "Wenqian Cui", role: "Ph.D. Student", links: { homepage: "#", scholar: "#", github: "#" } },
                    { name: "Jiahong Liu", role: "Ph.D. Student", links: { homepage: "#", scholar: "#", github: "#" } },
                    { name: "Jinhu Qi", role: "Ph.D. Student", links: { homepage: "#", scholar: "#", github: "#" } }
                ]
            },
            {
                groupname: "Students (Non-PhD, Prof. Irwin King)",
                members: [
                    { name: "Shicheng Ma", role: "Student", links: { homepage: "#", scholar: "#", github: "#" } },
                    { name: "Yuqin Shu", role: "Student", links: { homepage: "#", scholar: "#", github: "#" } }
                ]
            },
            {
                groupname: "Ph.D. Students (Prof. Zenglin Xu)",
                members: [
                    { name: "Yiyang Zhao", role: "Ph.D. Student", links: { homepage: "#", scholar: "#", github: "#" } },
                    { name: "Yiyi Chen", role: "Ph.D. Student", links: { homepage: "#", scholar: "#", github: "#" } },
                    { name: "Ruoxi Jiang", role: "Ph.D. Student", links: { homepage: "#", scholar: "#", github: "#" } }
                ]
            }
        ]
    }
};
