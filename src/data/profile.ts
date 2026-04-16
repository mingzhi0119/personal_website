export interface ContactInfo {
    email: string;
    linkedin: string;
    location: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface ExperienceItem {
    id: string;
    company: string;
    title: string;
    period: string;
    location?: string;
    responsibilities: string[];
}

export interface EducationItem {
    id: string;
    institution: string;
    degree: string;
    period: string;
    description?: string;
}

export interface ProjectLink {
    label: string;
    href: string;
}

export interface FeaturedProjectItem {
    id: string;
    title: string;
    context: string;
    headline: string;
    summary: string;
    highlights: string[];
    technologies: string[];
    links: ProjectLink[];
}

export interface ProjectItem {
    id: string;
    title: string;
    context: string;
    description: string[];
    technologies: string[];
    links?: ProjectLink[];
}

export interface ProfileData {
    name: string;
    role: string;
    contact: ContactInfo;
    summary: string[];
    featuredProject: FeaturedProjectItem;
    skills: Skill[];
    experience: ExperienceItem[];
    education: EducationItem[];
    projects: ProjectItem[];
}

export const profileData: ProfileData = {
    name: "Mingzhi Hu",
    role: "M.S. Candidate in AI in Business",
    contact: {
        email: "mhu29@simon.rochester.edu",
        linkedin: "https://www.linkedin.com/in/mingzhi-h/",
        location: "Rochester, NY",
    },
    summary: [
        "Bridging the gap between complex engineering, data science, and business strategy.",
        "I am an M.S. candidate in AI in Business at the University of Rochester, combining a rigorous foundation in traditional engineering (Tsinghua University) with proven industry experience in B2B business management and technical project lifecycles.",
        "I specialize in translating complex, ambiguous business problems into scalable technical solutions. Whether it's architecting a machine learning pipeline for customer retention, building deterministic state machines for web applications, or driving cross-functional bidding strategies, I focus on delivering measurable, data-driven product impact.",
        "Core Stack: Python, SQL, TypeScript/React, Scikit-learn, TensorFlow, and CI/CD pipelines. Currently seeking 2026 full-time opportunities in Data Analytics, Technical Product Management, or AI Strategy."
    ],
    featuredProject: {
        id: "feat-goat-ai",
        title: "GOAT AI",
        context: "Featured Engineering Story · React 19 + TypeScript + Vite + FastAPI + Python + Ollama + SQLite/Postgres + Tauri",
        headline: "Built a self-hostable AI systems product spanning chat, retrieval, bounded runtime workflows, and desktop distribution.",
        summary: "GOAT AI is a local-first full-stack AI product I engineered as a typed React SPA with a FastAPI backend, stable streaming contracts, deployment-mode isolation, durable sessions and artifacts, and operator-visible runtime controls across local, school-server, remote, and desktop environments.",
        highlights: [
            "Designed typed React/FastAPI contracts with structured SSE events, stable JSON errors, and fail-fast deployment isolation across local, school-server, remote, and desktop modes.",
            "Built a production-style Ollama integration layer with typed streaming, FIFO inference queueing, rate limiting, concurrency gating, and remote-safe model allowlisting.",
            "Delivered retrieval-backed document workflows plus bounded workbench and code-sandbox runtimes with durable records, explicit capability gating, and fail-closed recovery behavior.",
            "Extended the product through Tauri desktop packaging, a PyInstaller backend sidecar, and CI evidence for packaging, diagnostics, and release governance."
        ],
        technologies: [
            "React 19",
            "TypeScript",
            "Vite",
            "FastAPI",
            "Python",
            "Ollama",
            "SQLite",
            "Postgres",
            "Tauri",
            "Docker",
            "GitHub Actions"
        ],
        links: [
            { label: "Live Demo", href: "https://goat-dev.vercel.app/" },
            { label: "GitHub", href: "https://github.com/mingzhi0119/GOAT_AI/" }
        ]
    },
    skills: [
        {
            category: "Programming Languages",
            items: ["Python", "SQL (MySQL, PostgreSQL)", "TypeScript/JavaScript", "R", "C/C++"]
        },
        {
            category: "Data Science & ML",
            items: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "SciPy"]
        },
        {
            category: "Software Engineering & Web",
            items: ["React", "Node.js", "Git", "CI/CD (GitHub Actions)", "Docker", "WebRTC"]
        },
        {
            category: "Data Viz & Tools",
            items: ["Tableau", "Power BI", "Excel", "LaTeX", "Matlab", "Stata"]
        },
        {
            category: "Certifications",
            items: ["Advanced Certificate of Achievement in Data Management and Warehousing"]
        }
    ],
    experience: [
        {
            id: "exp-2",
            company: "China Aviation Planning and Design Institute Co., Ltd",
            title: "Business Manager, Avionics Engineering Division",
            location: "Beijing, China",
            period: "July 2024 - June 2025",
            responsibilities: [
                "Spearheaded business negotiations to secure new partnerships, developing market-expansion strategies, drove a 15% annual growth rate from deals valued at over $2 million.",
                "Implemented credit assessment system for quotations, reducing bad debt risk by 6%.",
                "Directed the end-to-end bidding process, coordinating with cross-functional teams to prepare proposals and achieving a 65% contract success rate."
            ]
        },
        {
            id: "exp-3",
            company: "Department of External Relations, Tsinghua University",
            title: "Vice President",
            location: "Beijing, China",
            period: "Undergraduate",
            responsibilities: [
                "Secured $10,000 in corporate sponsorship to fund two flagship university events: the Freshman Welcome Gala and the annual 'December 9th' Choral Competition, attended by over 2,000 students.",
                "Established and led a new alumni mentorship initiative, creating an outreach campaign, connected over 50 students with industry professionals for career guidance."
            ]
        }
    ],
    education: [
        {
            id: "edu-1",
            institution: "Simon Business School, University of Rochester",
            degree: "Master of Science in AI in Business",
            period: "Expected December 2026",
            description: "GPA: 3.85/4.0 | Honors: Dean's Scholarship, Dean's List | Coursework: AI and Business, Product Strategy & Management, Predictive and Causal Analytics, A/B Testing, Data Management.",
        },
        {
            id: "edu-2",
            institution: "Tsinghua University",
            degree: "Bachelor of Engineering in Civil Engineering and Systems",
            period: "June 2024",
            description: "Honors: Social Work Excellence Scholarship | Coursework: Probability and Statistics, Operational Research, Data Science, Entrepreneurial Management, Corporate Finance.",
        }
    ],
    projects: [
        {
            id: "proj-goat-ai",
            title: "GOAT AI",
            context: "Personal Full-Stack AI Systems Project · React 19 + TypeScript + Vite + FastAPI + Python + Ollama + Tauri",
            description: [
                "Engineered a self-hostable AI product spanning chat, retrieval, durable sessions, artifact generation, browser access control, and bounded workbench/runtime flows across local, school-server, remote, and desktop deployments.",
                "Architected typed frontend/backend contracts, stable SSE and error surfaces, deployment-mode isolation, and an Ollama integration with FIFO queueing, rate limiting, concurrency control, and public-safe model policies.",
                "Delivered retrieval pipelines, safe code-execution boundaries, and Tauri desktop packaging with CI-backed release evidence, startup diagnostics, and operational governance."
            ],
            technologies: ["React 19", "TypeScript", "Vite", "FastAPI", "Python", "Ollama", "SQLite", "Postgres", "Tauri", "Docker", "GitHub Actions"],
            links: [
                { label: "Live Demo", href: "https://goat-dev.vercel.app/" },
                { label: "GitHub", href: "https://github.com/mingzhi0119/GOAT_AI/" }
            ]
        },
        {
            id: "proj-churn-prediction",
            title: "Customer Churn Prediction & Retention Strategy",
            context: "Academic ML Project",
            description: [
                "Architected an end-to-end machine learning pipeline in Python (Pandas, Scikit-learn) to predict customer churn, engineering behavioral features from raw transactional datasets and rigorously handling class imbalance to ensure robust predictive quality.",
                "Trained and hyperparameter-tuned a Logistic Regression model utilizing cross-validation, achieving an 0.88 AUC-ROC score (a 15% lift over baseline) by optimizing the decision threshold to minimize false-negative business costs.",
                "Translated model interpretability (feature importance) into actionable product strategies, formulating data-driven retention initiatives and pricing interventions projected to mitigate churn by 5%."
            ],
            technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Data Analytics"]
        },
        {
            id: "proj-gem-duel",
            title: "Gem Duel",
            context: "Personal Full-Stack Project · React 18 + TypeScript + Vite + Electron",
            description: [
                "Engineered a 9-phase deterministic state machine eliminating illegal-state bugs via exhaustive TypeScript discriminated unions and compile-time never-type coverage across 20+ action types.",
                "Architected real-time P2P online multiplayer using WebRTC/PeerJS with an authoritative host-sync protocol, and a Roguelike expansion featuring 24+ asymmetric tiered buffs and 3 dynamically configurable win conditions.",
                "Built a heuristic AI opponent (5-priority decision tree) and an 11-suite, 5,000-iteration chaos test pipeline (Vitest) validating 3 core state invariants per cycle — fully integrated into GitHub Actions CI/CD.",
                "Designed a telemetry-ready data model tracking 6 match-level KPIs per session, structured for direct ingestion into a BI dashboard for evidence-based product balance decisions."
            ],
            technologies: ["React 18", "TypeScript", "Vite", "Electron", "WebRTC/PeerJS", "Immer", "Vitest", "GitHub Actions", "Tailwind CSS"],
            links: [
                { label: "Live Demo", href: "https://gem-duel-dev.vercel.app" },
                { label: "GitHub", href: "https://github.com/mingzhi0119/GemDuel-Dev" }
            ]
        },
        {
            id: "proj-ground-motion",
            title: "Seismic Ground Motion Simulation",
            context: "Tsinghua Undergraduate Thesis",
            description: [
                "Engineered a robust data pipeline to process and clean over 50,000 complex historical seismic records, applying advanced feature engineering techniques (e.g., Fourier transforms, spectral filtering) to extract critical frequency-domain indicators.",
                "Developed a highly optimized 3D numerical simulation model using the spectral element method, generating large-scale random fields of soil shear wave velocity to analyze seismic wave propagation in complex valley topographies.",
                "Architected and trained a Convolutional Neural Network (CNN) via TensorFlow/Keras to predict soil property variability, achieving a prediction accuracy of 92.5% on the validation set.",
                "Improved prediction efficiency by replacing traditional Monte Carlo simulations with the neural network heuristic, reducing overall computational time by 40% while maintaining high fidelity for seismic hazard assessment."
            ],
            technologies: ["Python", "TensorFlow", "Keras", "CNN", "Matlab", "Data Preprocessing", "Numerical Analysis", "SciPy"],
            links: [
                { label: "Read Abstract", href: "#" }
            ]
        }
    ]
};
