import { TDiv } from "@/shared/typing/elements.type";
import { FC } from "react";

import { ButtonLink } from "@/shared/components/ui/Button/ButtonLink";
import { Container } from "@/shared/components/ui/containers/Container/Container";
import styles from "./HeroBasic.module.css";

export const HeroBasic: FC<TDiv> = () => {
  return (
    <>
      <div className={styles.root}>
        <picture className={styles.image}>
          <source
            media="(max-width: 768px)"
            className={styles.image}
            srcSet="/images/hero_small.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px) and (max-width: 1224px)"
            srcSet="/images/hero_medium.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 1325px)"
            className={styles.image}
            srcSet="/images/hero_big.webp"
            type="image/webp"
          />
          <img
            src="/images/hero_big.webp"
            alt="Hero Background"
            className={styles.image}
          />
        </picture>
        <Container className={styles.wrapper}>
          <h1 className={styles.title}>КУПИТЬ СКИНЫ CS2 & DOTA 2</h1>
          <p className={styles.text}>
            Получи уникальные скины которые выделят тебя на поле боя! Широкий
            выбор редких предметов, доступные цены и мгновенная доставка.
          </p>
          <div className={styles.buttons_wrapper}>
            <ButtonLink
              isPublicLink
              href="/skins"
              size="large"
              variant="primary"
              className={styles.red_btn}
            >
              КУПИТЬ СКИНЫ
            </ButtonLink>
            <ButtonLink
              isPublicLink
              href="/skins"
              size="large"
              variant="secondary"
              className={styles.gray_btn}
            >
              КУПИТЬ ВАЛЮТУ
            </ButtonLink>
          </div>
        </Container>
      </div>
    </>
  );
};
