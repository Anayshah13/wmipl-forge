import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HexagonIconProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  size?: number;
}

export const HexagonIcon = ({
  icon: Icon,
  className,
  iconClassName,
  size = 100
}: HexagonIconProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center",
        className
      )}
      style={{
        width: size,
        height: size,
        clipPath: "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
      }}
    >
      <Icon className={cn("text-white", iconClassName)} size={size * 0.45} />
    </div>
  );
};
