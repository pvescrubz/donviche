import { TButton } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Button.module.css";

interface IButton extends TButton {
  size?: "small" | "normal" | "large";
  variant?: "primary" | "secondary";
}

export const Button: FC<IButton> = ({
  children,
  className,
  size = "normal",
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.root,
        {
          [styles.small]: size === "small",
          [styles.normal]: size === "normal",
          [styles.large]: size === "large",
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
        },
        className
      )}
      {...rest}
    >
      <span className={styles.span}>{children}</span>
    </button>
  );
};
