
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassmorphicCardProps extends HTMLAttributes<HTMLDivElement> {
  intensity?: "high" | "medium" | "low";
  border?: boolean;
  hoverEffect?: boolean;
  delay?: number;
}

const GlassmorphicCard = forwardRef<HTMLDivElement, GlassmorphicCardProps>(
  ({ className, children, intensity = "medium", border = true, hoverEffect = false, delay, ...props }, ref) => {
    const intensityMap = {
      high: "backdrop-blur-xl bg-white/40 dark:bg-black/40",
      medium: "backdrop-blur-md bg-white/30 dark:bg-black/30",
      low: "backdrop-blur-sm bg-white/20 dark:bg-black/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          intensityMap[intensity],
          border && "border border-white/20 dark:border-white/10",
          hoverEffect && "transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg",
          delay !== undefined && {
            "animation-delay": `${delay}s`,
          },
          "rounded-xl shadow-md",
          className
        )}
        style={delay !== undefined ? { animationDelay: `${delay}s` } : undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassmorphicCard.displayName = "GlassmorphicCard";

export { GlassmorphicCard };
