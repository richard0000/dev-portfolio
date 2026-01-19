"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    className?: string;
    children: ReactNode;
    id?: string;
    delay?: number;
}

export function Section({ className, children, id, delay = 0 }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
            >
                {children}
            </motion.div>
        </section>
    );
}
