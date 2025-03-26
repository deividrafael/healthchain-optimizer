
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface AnimatedTextProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  animation?: "fade-in" | "slide-up" | "slide-down" | "slide-in-right" | "slide-in-left" | "blur-in";
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

const AnimatedText = forwardRef<HTMLDivElement, AnimatedTextProps>(
  ({ 
    className, 
    text, 
    animation = "fade-in", 
    delay = 0, 
    duration = 0.5, 
    as: Component = "div", 
    ...props 
  }, ref) => {
    const animationClass = {
      "fade-in": "animate-fade-in",
      "slide-up": "animate-slide-up",
      "slide-down": "animate-slide-down",
      "slide-in-right": "animate-slide-in-right",
      "slide-in-left": "animate-slide-in-left", 
      "blur-in": "animate-blur-in",
    };

    const style = {
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
    };

    return (
      <Component
        ref={ref}
        className={cn(animationClass[animation], "opacity-0", className)}
        style={style}
        {...props}
      >
        {text}
      </Component>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
