"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
    return (
        <Section id="projects" delay={0.3}>
            <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RESUME_DATA.projects.map((project) => (
                    <Card key={project.title} className="flex flex-col h-full hover:bg-white/10 transition-colors group">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{project.title}</h3>
                            {(project.link.href as string) !== "#" && (
                                <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-400 transition-colors">
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            )}
                        </div>

                        <p className="text-sm text-zinc-400 mb-4 flex-grow text-pretty">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.techStack.map((tech) => (
                                <Badge key={tech} className="text-[10px] px-2 py-0">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
