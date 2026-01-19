"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" delay={0.5} className="pb-24">
            <Card className="flex flex-col items-center text-center p-10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
                <p className="text-muted-foreground max-w-md mb-8">
                    I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <div className="flex gap-4">
                    <a
                        href={`mailto:${RESUME_DATA.contact.email}`}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        Say Hello
                    </a>
                </div>

                <div className="mt-16 flex gap-6 text-zinc-500">
                    {RESUME_DATA.contact.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            <social.icon className="w-5 h-5" />
                            <span className="sr-only">{social.name}</span>
                        </a>
                    ))}
                </div>

                <p className="mt-8 text-xs text-zinc-600">
                    © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
                </p>
            </Card>
        </Section>
    );
}
