"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Projects() {
    return (
        <Section id="projects" delay={0.3}>
            <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RESUME_DATA.projects.map((project) => {
                    const images = (project as any).images as readonly string[] | undefined;
                    const hasImages = !!images && images.length > 0;

                    return (
                        <Card 
                            key={project.title} 
                            className={cn(
                                "flex flex-col h-full hover:bg-white/10 transition-colors group",
                                hasImages && "p-0 overflow-hidden"
                            )}
                        >
                            {hasImages && images && (
                                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-white/5">
                                    {images.map((image, index) => (
                                        <Image
                                            key={image}
                                            src={image}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            fill
                                            className={cn(
                                                "object-cover transition-all duration-700 ease-in-out",
                                                index === 0
                                                    ? "opacity-100 group-hover:opacity-0 group-hover:scale-105"
                                                    : "opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-95"
                                            )}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ))}
                                </div>
                            )}

                            <div className={cn("flex flex-col flex-grow", hasImages ? "p-6" : "")}>
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
                            </div>
                        </Card>
                    );
                })}
            </div>
        </Section>
    );
}

