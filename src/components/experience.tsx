"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
    return (
        <Section id="experience" delay={0.2}>
            <h2 className="text-2xl font-bold tracking-tight mb-8">Work Experience</h2>
            <div className="space-y-6">
                {RESUME_DATA.work.map((role, index) => (
                    <Card key={`${role.company}-${index}`} className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                                <h3 className="text-lg font-semibold">{role.company}</h3>
                                <p className="text-sm text-zinc-400">{role.title}</p>
                            </div>
                            <div className="flex flex-col sm:items-end gap-1">
                                <span className="text-sm font-mono text-zinc-500">
                                    {role.start} - {role.end}
                                </span>
                                {role.link && (
                                    <a href={role.link} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:text-indigo-300">
                                        {new URL(role.link).hostname}
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-sm text-zinc-300 leading-relaxed">
                            {role.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {role.badges.map((badge) => (
                                <Badge key={badge} variant="secondary">
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
