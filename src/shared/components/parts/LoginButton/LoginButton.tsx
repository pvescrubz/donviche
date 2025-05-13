import { FC } from "react";
import { Button } from "../../ui/Button/Button";
import { IconSteam } from "../../ui/svg/IconSteam";
import styles from "./LoginButton.module.css";

export const LoginButton: FC = () => {
  return (
    <Button
      className={styles.root}
      variant="secondary"
      size="small"
      icon={<IconSteam className={styles.svg} />}
    >
      <span className={styles.span}>ВОЙТИ</span>{" "}
      <span className={styles.hidden}>ЧЕРЕЗ STEAM</span>
    </Button>
  );
};
