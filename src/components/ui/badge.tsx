import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
    className?: string;
    children: ReactNode;
    variant?: "default" | "secondary" | "outline";
}

export function Badge({ className, children, variant = "default" }: BadgeProps) {
    const variants = {
        default: "bg-primary/10 text-primary-foreground hover:bg-primary/20 border-primary/20",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "text-foreground border border-input",
    };

    // Override default style for a "glass" look if needed, but keeping it simple for now
    const variantStyles = {
        default: "bg-indigo-500/10 text-indigo-200 border border-indigo-500/20",
        secondary: "bg-zinc-800 text-zinc-300",
        outline: "border border-zinc-700 text-zinc-400",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variantStyles[variant],
                className
            )}
        >
            {children}
        </span>
    );
}
