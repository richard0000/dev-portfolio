"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";

export function About() {
    return (
        <Section id="about" delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight mb-4">About</h2>
            <p className="text-muted-foreground text-pretty leading-relaxed">
                {RESUME_DATA.about}
            </p>
        </Section>
    );
}
