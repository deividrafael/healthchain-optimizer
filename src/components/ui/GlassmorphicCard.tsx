
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
      high: "backdrop-blur-xl bg-white/5 dark:bg-black/30",
      medium: "backdrop-blur-md bg-white/5 dark:bg-black/20",
      low: "backdrop-blur-sm bg-white/5 dark:bg-black/10",
    };

    return (
      <div
        ref={ref}
        className={cn(
          intensityMap[intensity],
          border && "border border-white/10 dark:border-white/5",
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
