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
        { title: "ReTAI joint-lab page launched", date: "20260109", tag: "Lab" },
        { title: "Placeholder accepted paper item", date: "2025xxxx", tag: "Paper" },
        { title: "Placeholder award item", date: "2025xxxx", tag: "Award" },
        { title: "Placeholder service item", date: "2025xxxx", tag: "Service" },
        { title: "Placeholder dataset release", date: "2025xxxx", tag: "Dataset" },
        { title: "Placeholder invited talk", date: "2025xxxx", tag: "Talk" }
    ],
    researchInterests: [
        {
            title: "Trustworthy Agentic AI",
            desc: "Developing autonomous agents that plan, reason, and act reliably in complex, open-ended environments.",
            img: "assets/img/placeholder_agent.png"
        },
        {
            title: "Evaluation & Benchmarks",
            desc: "Creating rigorous frameworks and benchmarks to stress-test AI models and uncover failure modes.",
            img: "assets/img/placeholder_eval.png"
        },
        {
            title: "Robustness & Secure Deployment",
            desc: "Ensuring AI systems are robust to adversarial attacks and can be deployed securely in real-world settings.",
            img: "assets/img/placeholder_secure.png"
        }
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
                role: "B.Sc. (Caltech), M.Sc., Ph.D. (USC)<br>Pro-Vice-Chancellor (Education)<br>Professor<br>Fellow of ACM, Fellow of IEEE, Fellow of INNS, Fellow of AAAI, Fellow of HKIE",
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
                    "Professor King holds a Bachelor of Science degree in Engineering and Applied Science from the California Institute of Technology (Caltech) and obtained his Master of Science and Doctor of Philosophy degrees in Computer Science from the University of Southern California (USC)."
                ],
                img: "assets/img/Irwin-King.jpg",
                links: {
                    homepage: "#",
                    scholar: "https://scholar.google.com/citations?user=MXvC7tkAAAAJ&hl=en",
                    email: "#",
                    linkedin: "https://hk.linkedin.com/in/irwinking",
                    cv: "assets/CV/CV_Prof_Irwin_King_2023.pdf"
                }
            },
            {
                name: "Prof. Zenglin Xu",
                role: "Professor, School of Computer Science, Fudan University",
                img: "assets/img/placeholder_xu.png",
                links: { homepage: "#", scholar: "#", email: "#" }
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
