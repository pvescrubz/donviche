import Link from "next/link";
import { FC } from "react";
import { IconLogo } from "../../ui/svg/IconLogo";
import styles from "./LogoLink.module.css";

export const LogoLink: FC = () => {
  return (
    <Link href={"/"} className={styles.logo}>
      <IconLogo />
    </Link>
  );
};
