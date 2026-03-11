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
        "Master of Science candidate in AI in Business at the University of Rochester's Simon Business School (GPA: 3.85/4.0), with an expected graduation in December 2026. Recipient of the Dean's Scholarship and Dean's List honors.",
        "Experienced Business Manager and Graduate Student Analyst with a strong track record of leveraging data analytics and machine learning to drive business growth, optimize customer retention, and streamline operations.",
        "Proficient in Python, R, Matlab, and SQL, with hands-on experience in building predictive models using TensorFlow, Keras, and Scikit-learn."
    ],
    skills: [
        {
            category: "Programming Languages",
            items: ["Python", "R", "Matlab", "C", "Stata", "MySQL", "LaTeX"]
        },
        {
            category: "Data & Machine Learning",
            items: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"]
        },
        {
            category: "Certifications",
            items: ["Advanced Certificate of Achievement in Data Management and Warehousing"]
        }
    ],
    experience: [
        {
            id: "exp-1",
            company: "Graduate Student Analyst",
            title: "Customer Churn Prediction & Retention Strategy",
            location: "Rochester, NY",
            period: "September 2025 - December 2025",
            responsibilities: [
                "Engineered features from transactional data in Python (Pandas) and conducted EDA to address class imbalance, ensuring data quality for predictive modeling.",
                "Developed and validated a Logistic Regression model via Scikit-learn, optimizing performance via Cross-Validation; achieved an 0.88 AUC-ROC score, outperforming baseline accuracy by 15%.",
                "Leveraged model interpretability to identify key attrition drivers and presented strategic recommendations to stakeholders, projecting a 5% reduction in churn."
            ]
        },
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
            description: "GPA: 3.85/4.0 | Honors: Dean's Scholarship, Dean's List | Coursework: AI and Business, Core Statistics, Predictive and Causal Analytics, AI and Deep Learning, Data Management.",
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
                "Developed a 3D numerical simulation model using the spectral element method and generated random fields of soil shear wave velocity in Matlab to analyze seismic responses.",
                "Predicted soil property variability by implementing a CNN model (TensorFlow/Keras) on historical seismic data."
            ],
            technologies: ["Matlab", "Python", "TensorFlow", "Keras", "CNN"]
        }
    ]
};
