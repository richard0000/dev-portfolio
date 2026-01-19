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
        email: "r.richard0000@gmail.com",
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
                url: "mailto:r.richard0000@gmail.com",
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
            company: "Arionkoder",
            link: "https://arionkoder.com",
            badges: ["Remote", "Ruby on Rails", "React"],
            title: "Full-Stack Software Engineer",
            start: "Apr 2024",
            end: "Present",
            description:
                "Developing microservices for American Express (ISeatz project). Part of a security team identifying vulnerabilities across 20+ services. Architecting new features using React, Ruby on Rails, and PostgreSQL.",
        },
        {
            company: "LPx",
            link: "",
            badges: ["Remote", "Tech Lead"],
            title: "Full-Stack Software Engineer / Tech Leader",
            start: "Apr 2023",
            end: "May 2024",
            description:
                "Led technical architecture redesign, reducing runtime by 25%. Migrated to PostgreSQL, accelerating query performance by 30%. Mentored a team of 3 engineers.",
        },
        {
            company: "GOAT",
            link: "https://www.goat.com",
            badges: ["Remote", "Golang", "Microservices"],
            title: "Full-Stack Software Engineer",
            start: "Jan 2022",
            end: "Jun 2023",
            description:
                "Migrated core services from Rails monolith to Golang microservices. Built GRPC-based microservices achieving 90% test coverage. Optimized high-traffic PostgreSQL endpoints.",
        },
        {
            company: "Learning Tapestry",
            link: "https://learningtapestry.com",
            badges: ["Remote", "EdTech"],
            title: "Full-Stack Software Engineer",
            start: "Jun 2020",
            end: "Jan 2022",
            description:
                "Delivered 10+ Rails MVPs for clients like Nickelodeon. Integrated payment gateways and third-party authentication. Established RSpec testing standards.",
        },
        {
            company: "Troly.io",
            link: "https://troly.io",
            badges: ["Start-up", "Docker"],
            title: "Full-Stack Software Engineer",
            start: "May 2019",
            end: "Jun 2020",
            description:
                "Implemented Docker containerization reducing deployment times by 50%. Resolved critical production issues and refactored legacy Rails code.",
        },
    ],
    skills: [
        "Ruby",
        "Ruby on Rails",
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Golang",
        "PostgreSQL",
        "Docker",
        "AWS",
        "GraphQL",
        "Tailwind CSS",
    ],
    projects: [
        {
            title: "American Express Travel",
            techStack: ["React", "Ruby on Rails", "PostgreSQL"],
            description:
                "Developed microservices and architected new features for Amex Travel at Arionkoder.",
            link: {
                label: "americanexpress.com",
                href: "https://www.americanexpress.com/en-us/travel/",
            },
        },
        {
            title: "Noggin",
            techStack: ["Rails", "React", "Video Streaming"],
            description:
                "A learning platform for kids featuring favorite characters. Includes parental monitoring and content management tools.",
            link: {
                label: "noggin.com",
                href: "https://www.noggin.com/",
            },
        },
        {
            title: "T3 Innovation Network",
            techStack: ["Web 3.0", "Open Source", "RDF"],
            description:
                "A Web 3.0 schema converter open-source project using a drag-and-drop interface for RDF schemas.",
            link: {
                label: "DESM - T3 Innovation Network",
                href: "https://www.t3networkhub.org/resources/data-ecosystem-schema-mapping-tool-desm",
            },
        },
        {
            title: "Teach Like a Champion",
            techStack: ["EdTech", "LMS"],
            description:
                "An educational app for teacher training with complex roles (admin, coach, teacher) and custom learning paths.",
            link: {
                label: "Teach Like a Champion Online",
                href: "https://tlaconline.com/",
            },
        },
    ],
} as const;
