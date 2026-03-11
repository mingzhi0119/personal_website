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

export interface ProjectItem {
    id: string;
    title: string;
    context: string;
    description: string[];
    technologies: string[];
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
    role: "M.S. Candidate in Artificial Intelligence in Business",
    contact: {
        email: "mhu29@Simon.rochester.edu",
        linkedin: "https://www.linkedin.com/in/mingzhi-h",
        location: "Rochester, New York, United States",
    },
    summary: [
        "Master of Science candidate in Artificial Intelligence in Business at the University of Rochester's Simon Business School, with an expected graduation in December 2026. Previously earned a Bachelor of Engineering in Civil Engineering and Systems from Tsinghua University.",
        "Professional experience includes a role as a Full-time Business Manager at China Aviation Planning and Design Institute (Group) Co., Ltd. Led business negotiations contributing to a 15% annual growth from deals valued over $2 million, managed client quotations reducing bad debt risk by 6%, and oversaw the bidding process to secure contracts.",
        "Recipient of the Dean's Scholarship from Simon Business School and member of the Simon Data Analytics Club."
    ],
    skills: [
        {
            category: "Core Competencies",
            items: ["Machine Learning", "Artificial Intelligence (AI)", "Bid Processes", "Data Analytics"]
        },
        {
            category: "Programming Languages",
            items: ["Python", "R", "Matlab"]
        },
        {
            category: "Libraries & Tools",
            items: ["TensorFlow", "Keras", "Scikit-learn", "MySQL", "LaTeX"]
        }
    ],
    experience: [
        {
            id: "exp-1",
            company: "Aviation Industry Corporation of China / China Aviation Planning and Design Institute (Group)",
            title: "Business Manager",
            period: "July 2024 - June 2025",
            responsibilities: [
                "Business Negotiations: Led high-stakes business negotiations to secure new partnerships, developing market expansion strategies that resulted in a 15% annual growth rate from deals valued at over $2 million.",
                "Quotations and Client Relations: Managed detailed client quotations and implemented a new customer credit assessment system, reducing bad debt risk by 6%.",
                "Bidding and Documentation: Oversaw the end-to-end bidding process, coordinating with cross-functional teams to prepare and present compelling proposals, resulting in a high contract success rate."
            ]
        }
    ],
    education: [
        {
            id: "edu-1",
            institution: "Simon Business School, University of Rochester",
            degree: "Master of Science, Artificial Intelligence",
            period: "August 2025 - December 2026 (Expected)",
        },
        {
            id: "edu-2",
            institution: "Tsinghua University",
            degree: "Bachelor of Engineering, Civil Engineering",
            period: "August 2019 - June 2024",
        }
    ],
    projects: [
        {
            id: "proj-1",
            title: "Physical Simulation of Ground Motion in Valleys",
            context: "Undergraduate Diploma Project at Tsinghua University",
            description: [
                "Built a 3D numerical simulation model for physical simulation of ground motion.",
                "Applied machine learning techniques to predict soil property variability.",
                "Implemented a convolutional neural network (CNN) to improve predictive modeling precision."
            ],
            technologies: ["Python", "TensorFlow", "Keras", "Machine Learning"]
        }
    ]
};
