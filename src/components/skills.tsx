"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export function Skills() {
    return (
        <Section id="skills" delay={0.4}>
            <h2 className="text-2xl font-bold tracking-tight mb-8">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {Object.entries(RESUME_DATA.skills).map(([category, list]) => (
                    <div key={category} className="space-y-3">
                        <h3 className="text-sm font-semibold text-zinc-400 border-b border-white/5 pb-1">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {list.map((skill) => (
                                <Badge
                                    key={skill}
                                    className="text-xs py-1 px-2.5 bg-white/5 hover:bg-white/10 border-white/10 text-zinc-300"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
