import { Container } from "@/shared/components/ui/containers/Container/Container";
import { TDiv } from "@/shared/typing/elements.type";
import Image from "next/image";
import { FC } from "react";
import styles from "./HeroSecondary.module.css";

export const HeroSecondary: FC<TDiv> = ({}) => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.wrapper_item}>
        <Image
          src="/images/heroicon1.webp"
          alt="alt"
          quality={100}
          width={80}
          height={80}
          className="image"
        />
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>Широкий выбор скинов</h2>
          <p className={styles.text}>
            У нас представлены тысячи редких и эксклюзивных скинов для Dota 2
            и CS2.
          </p>
        </div>
      </div>
      <div className={styles.wrapper_item}>
        <Image
          src="/images/heroicon2.webp"
          alt="alt"
          quality={100}
          width={80}
          height={80}
          className="image"
        />
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>Мгновенная доставка</h2>
          <p className={styles.text}>
            После оплаты скины моментально доставляются на ваш аккаунт.
          </p>
        </div>
      </div>
      <div className={styles.wrapper_item}>
        <Image
          src="/images/heroicon3.webp"
          alt="alt"
          quality={100}
          width={80}
          height={80}
          className="image"
        />
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>Доступные цены</h2>
          <p className={styles.text}>
            Мы предлагаем конкурентные цены и регулярные скидки.
          </p>
        </div>
      </div>
      <div className={styles.wrapper_item}>
        <Image
          src="/images/heroicon4.webp"
          alt="alt"
          quality={100}
          width={80}
          height={80}
          className="image"
        />
        <div className={styles.text_wrapper}>
          <h2 className={styles.title}>Безопасные платежи</h2>
          <p className={styles.text}>
            Ваши данные защищены. Покупайте скины с уверенностью в полной
            безопасности.
          </p>
        </div>
      </div>
    </Container>
  );
};
