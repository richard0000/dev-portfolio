import { Github, Linkedin, Mail } from "lucide-react";

export const RESUME_DATA = {
    name: "Ricardo Gamarra",
    initials: "RG",
    location: "Buenos Aires, Argentina",
    locationLink: "https://www.google.com/maps/place/Buenos+Aires",
    about:
        "Senior Full-Stack Software Engineer with 5+ years of specialized experience in Ruby on Rails and React. Expert in building microservices architectures, optimizing database performance, and implementing comprehensive testing strategies.",
    summary:
        "I am a Senior Full-Stack Engineer with a passion for building scalable, high-performance applications. With extensive experience in Ruby on Rails, React, and Microservices, I have led technical migrations, optimized high-traffic systems, and mentored engineering teams. Currently focusing on delivering robust solutions for global clients.",
    avatarUrl: "/avatar.png",
    personalWebsiteUrl: "https://ricardog.dev",
    contact: {
        email: "hello@ricardog.dev",
        tel: "",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/richard0000",
                icon: Github,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ricardo-gamarra/",
                icon: Linkedin,
            },
            {
                name: "Email",
                url: "mailto:hello@ricardog.dev",
                icon: Mail,
            },
        ],
    },
    education: [
        {
            school: "Universidad Nacional de La Plata",
            degree: "Maestría en Ingeniería de Software (Thesis Pending)",
            start: "2018",
            end: "Present",
        },
        {
            school: "Universidad Nacional de La Plata",
            degree: "Analista Programador Universitario",
            start: "2012",
            end: "2017",
            grade: "GPA: 9/10",
        },
    ],
    work: [
        {
            company: "QuieroMiTurno",
            link: "https://quieromiturno.com",
            badges: ["Founder", "Side Project / SaaS", "Next.js", "React", "PostgreSQL"],
            title: "Founder & Lead Developer",
            start: "Jan 2024",
            end: "Present",
            description: [
                "Founded, architected, and built a multi-tenant booking and management SaaS platform supporting over 200 active beauty salons.",
                "Engineered a high-performance booking system, interactive calendar, and automated WhatsApp client notification system, significantly reducing appointment cancellations.",
                "Developed a comprehensive real-time business intelligence dashboard showcasing billing metrics, services demand, and revenue estimation."
            ],
        },
        {
            company: "Arionkoder",
            link: "https://arionkoder.com",
            badges: ["Remote", "Ruby on Rails", "React"],
            title: "Full-Stack Software Engineer",
            start: "Apr 2024",
            end: "Present",
            description: [
                "Engineered critical microservices for American Express (ISeatz project), ensuring high availability and processing volume.",
                "Audited and resolved security vulnerabilities across 20+ microservices, establishing higher security and compliance benchmarks.",
                "Designed and built new features leveraging React, Ruby on Rails, and PostgreSQL."
            ],
        },
        {
            company: "LPx",
            link: "",
            badges: ["Remote", "Tech Lead"],
            title: "Full-Stack Software Engineer / Tech Leader",
            start: "Apr 2023",
            end: "May 2024",
            description: [
                "Led a comprehensive technical architecture redesign that reduced system runtime by 25%.",
                "Orchestrated database migration to PostgreSQL, resulting in a 30% query performance acceleration.",
                "Mentored and guided 3 software engineers, fostering agile best practices and clean code standards."
            ],
        },
        {
            company: "GOAT",
            link: "https://www.goat.com",
            badges: ["Remote", "Golang", "Microservices"],
            title: "Full-Stack Software Engineer",
            start: "Jan 2022",
            end: "Jun 2023",
            description: [
                "Deconstructed a legacy Rails monolith, migrating core functionalities into high-performance Golang microservices.",
                "Built robust gRPC-based microservices with strict testing standards, achieving 90% code coverage.",
                "Optimized high-traffic PostgreSQL database queries, reducing response latencies for critical endpoints."
            ],
        },
        {
            company: "Learning Tapestry",
            link: "https://learningtapestry.com",
            badges: ["Remote", "EdTech"],
            title: "Full-Stack Software Engineer",
            start: "Jun 2020",
            end: "Jan 2022",
            description: [
                "Delivered 10+ Ruby on Rails MVPs for high-profile EdTech clients including Nickelodeon.",
                "Integrated payment gateways and third-party authentication services seamlessly.",
                "Established RSpec testing standards and automated testing suites across projects."
            ],
        },
        {
            company: "Troly.io",
            link: "https://troly.io",
            badges: ["Start-up", "Docker"],
            title: "Full-Stack Software Engineer",
            start: "May 2019",
            end: "Jun 2020",
            description: [
                "Implemented Docker containerization for application services, reducing deployment times by 50%.",
                "Resolved critical production bottlenecks and refactored legacy Rails code to improve maintainability."
            ],
        },
    ],
    skills: {
        "Languages": ["Ruby", "TypeScript", "Golang", "JavaScript", "SQL"],
        "Frameworks & Libraries": ["Ruby on Rails", "React", "Next.js", "Node.js"],
        "Databases & APIs": ["PostgreSQL", "GraphQL", "gRPC"],
        "DevOps & Tools": ["Docker", "AWS", "Tailwind CSS", "Git"],
    },
    projects: [
        {
            title: "QuieroMiTurno",
            techStack: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "WhatsApp API"],
            description:
                "Founder and lead developer of a SaaS booking and management platform for beauty salons. Features real-time appointment scheduling, automated WhatsApp reminders, and a business dashboard with advanced revenue analytics, serving 200+ salons.",
            // images: [
            //     "/quieromiturno-landing.png",
            //     "/quieromiturno-dashboard.png",
            // ],
            link: {
                label: "quieromiturno.com",
                href: "https://quieromiturno.com",
            },
        },
        {
            title: "American Express Travel",
            techStack: ["React", "Ruby on Rails", "PostgreSQL"],
            description:
                "Engineered critical microservices and architected new booking features for American Express Travel at Arionkoder, using React, Rails, and PostgreSQL.",
            link: {
                label: "americanexpress.com",
                href: "https://www.americanexpress.com/en-us/travel/",
            },
        },
        {
            title: "Noggin",
            techStack: ["Rails", "React", "Video Streaming"],
            description:
                "Developed and scaled kid-focused learning platform Noggin, implementing robust parental monitoring and content management tools using Rails and React.",
            link: {
                label: "noggin.com",
                href: "https://www.noggin.com/",
            },
        },
        {
            title: "T3 Innovation Network",
            techStack: ["Web 3.0", "Open Source", "RDF"],
            description:
                "Built the drag-and-drop schema converter interface for Web 3.0 RDF mapping tools as part of an open-source project.",
            link: {
                label: "DESM - T3 Innovation Network",
                href: "https://www.t3networkhub.org/resources/data-ecosystem-schema-mapping-tool-desm",
            },
        },
        {
            title: "Teach Like a Champion",
            techStack: ["EdTech", "LMS"],
            description:
                "Developed a teacher-training LMS platform supporting complex user roles, custom learning paths, and progress tracking.",
            link: {
                label: "Teach Like a Champion Online",
                href: "https://tlaconline.com/",
            },
        },
    ],
} as const;
