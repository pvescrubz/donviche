import { Container } from "@/shared/components/ui/containers/Container/Container";
import { TFooter } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC<TFooter> = ({ className, ...rest }) => {
  return (
    <footer className={clsx(styles.footer, className)} {...rest}>
      <Container>footer</Container>
    </footer>
  );
};
