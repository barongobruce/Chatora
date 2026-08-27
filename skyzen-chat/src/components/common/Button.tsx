import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

// Shared CTA button with a subtle hover lift and press animation.
// Renders as an anchor when `href` is provided, otherwise a button —
// swap the anchor for a React Router <Link> later without touching callers.
export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim();

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] as const },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
      {icon}
    </motion.button>
  );
}
