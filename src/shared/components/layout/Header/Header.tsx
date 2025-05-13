import { Container } from "@/shared/components/ui/containers/Container/Container";
import { TFooter } from "@/shared/typing/elements.type";
import clsx from "clsx";
import { FC } from "react";
import { HeaderNav } from "../../parts/HeaderNav/HeaderNav";
import { LoginButton } from "../../parts/LoginButton/LoginButton";
import { LogoLink } from "../../parts/LogoLink/LogoLink";
import { MenuButton } from "../../parts/MenuButton/MenuButton";
import styles from "./Header.module.css";

export const Header: FC<TFooter> = ({ className, ...rest }) => {
  return (
    <header className={clsx(styles.root, className)} {...rest}>
      <Container className={styles.container}>
        <LogoLink />
        <HeaderNav />
        <LoginButton />
        <MenuButton />
      </Container>
    </header>
  );
};
