import Image from "next/image";
import { cn } from "@/lib/utils";

interface LocalAvatarProps {
    src?: string;
    alt?: string;
    className?: string;
}

export function LocalAvatar({ src, alt = "Avatar", className }: LocalAvatarProps) {
    return (
        <div
            className={cn(
                "relative rounded-full overflow-hidden border border-white/10 bg-muted flex items-center justify-center text-muted-foreground",
                className
            )}
        >
            {src ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    priority
                />
            ) : (
                <span className="text-xs font-semibold uppercase">
                    {alt.substring(0, 2)}
                </span>
            )}
        </div>
    );
}
