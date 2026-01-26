"use client";

import { cn } from "@/components/ui/dot-pattern";
import { DotPattern } from "@/components/ui/dot-pattern";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function BackgroundDots() {
    const { theme } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    "inset-0 h-full w-full fill-neutral-500/50 dark:fill-neutral-400/50"
                )}
                style={{
                    maskPosition: `${mousePosition.x - 150}px ${mousePosition.y - 150}px`,
                    maskRepeat: "no-repeat"
                }}
            />
            {/* Static fallback for when mouse is not moving or outside content, ensures *some* dots are visible but faint? 
                 Actually the requirement was "move around the cursor". 
                 Let's add a second layer that is static and very faint, 
                 and the cursor layer reveals simpler/brighter dots. 
                 
                 Plan:
                 Layer 1: Static very low opacity grid covering everything.
                 Layer 2: Higher opacity grid masked by cursor.
              */}

            <DotPattern
                className={cn(
                    "inset-0 h-full w-full fill-neutral-500/20 dark:fill-neutral-400/20",
                )}
            />

            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    "inset-0 h-full w-full fill-neutral-500/80 dark:fill-neutral-400/80"
                )}
                style={{
                    maskPosition: `${mousePosition.x - 300 / 2}px ${mousePosition.y - 300 / 2}px`,
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: `${mousePosition.x - 300 / 2}px ${mousePosition.y - 300 / 2}px`,
                    WebkitMaskRepeat: "no-repeat"
                }}
            />
        </div>
    );
}
