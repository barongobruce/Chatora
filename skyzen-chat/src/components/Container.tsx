import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

// Centralized max-width wrapper. Use this instead of re-declaring
// max-width/padding in every section.
export default function Container({
  children,
  as: Tag = "div",
  className = "",
}: ContainerProps) {
  return <Tag className={`container ${className}`.trim()}>{children}</Tag>;
}
