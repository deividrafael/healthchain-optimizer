
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface AnimatedGradientProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "x" | "y" | "radial";
  intensity?: "high" | "medium" | "low";
  colors?: string[];
}

const AnimatedGradient = forwardRef<HTMLDivElement, AnimatedGradientProps>(
  ({ 
    className, 
    children, 
    direction = "x", 
    intensity = "medium", 
    colors = ["from-health-600", "via-blue-500", "to-indigo-600"], 
    ...props 
  }, ref) => {
    const directionMap = {
      x: "animate-gradient-x",
      y: "animate-gradient-y",
      radial: "bg-gradient-radial",
    };

    const intensityMap = {
      high: "bg-gradient-to-r",
      medium: "bg-gradient-to-r",
      low: "bg-gradient-to-r opacity-75",
    };

    return (
      <div
        ref={ref}
        className={cn(
          intensityMap[intensity],
          directionMap[direction],
          ...colors,
          "bg-[length:200%_200%]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimatedGradient.displayName = "AnimatedGradient";

export { AnimatedGradient };
