"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function Skills() {
    return (
        <Section id="skills" delay={0.4}>
            <h2 className="text-2xl font-bold tracking-tight mb-8">Skills</h2>
            <div className="flex flex-wrap gap-2">
                {RESUME_DATA.skills.map((skill, index) => (
                    <Badge
                        key={skill}
                        className="text-sm py-1 px-3 bg-white/5 hover:bg-white/10 border-white/10 text-zinc-300"
                    >
                        {skill}
                    </Badge>
                ))}
            </div>
        </Section>
    );
}
