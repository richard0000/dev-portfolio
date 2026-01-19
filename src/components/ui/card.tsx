import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    className?: string;
    children: ReactNode;
}

export function Card({ className, children }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20",
                className
            )}
        >
            {children}
        </div>
    );
}
