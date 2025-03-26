
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  hoverEffect?: boolean;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, description, icon, hoverEffect = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6 transition-all duration-300",
          hoverEffect && "hover:translate-y-[-5px] hover:shadow-lg",
          "bg-white/80 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-sm",
          className
        )}
        {...props}
      >
        {icon && <div className="mb-4 text-health-600 dark:text-health-400">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
