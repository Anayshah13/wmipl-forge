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
  size = 64 
}: HexagonIconProps) => {
  return (
    <div 
      className={cn(
        "hexagon bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center",
        className
      )}
      style={{ width: size, height: size }}
    >
      <Icon className={cn("text-white", iconClassName)} size={size * 0.45} />
    </div>
  );
};
