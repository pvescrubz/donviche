import { TAnchor } from "@/shared/typing/elements.type";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import styles from "./Button.module.css";

export interface IButton extends TAnchor {
  size?: "small" | "normal" | "large";
  variant?: "primary" | "secondary";
  isPublicLink?: boolean;
  href: string;
}

export const ButtonLink: FC<IButton> = ({
  children,
  className,
  size = "normal",
  variant = "primary",
  isPublicLink = false,
  href,
  ...rest
}) => {
  return (
    <>
      {!isPublicLink && (
        <Link
          href={href}
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
        </Link>
      )}
      {isPublicLink && (
        <a
          href={href}
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
        </a>
      )}
    </>
  );
};
