import { TDiv } from "@/shared/typing/elements.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Container } from "../../ui/containers/Container/Container";
import { Section } from "../../ui/containers/Section/Section";
import { Title } from "../../ui/Title/Title";
import styles from "./BuySkins.module.css";
export const BuySkinsHome: FC<TDiv> = () => {
  return  (
  <Section>
    <Container>
      <Title>
    КУПИТЬ СКИНЫ
      </Title>
      <div className={styles.wrapper}>
        <Link href="href" className={styles.link}>
        <Image src="/images/CS.webp" alt="alt" fill quality={100} className={styles.img} />
        </Link>
        <Link href="href" className={styles.link}>
        <Image src="/images/Dota.webp" alt="alt" fill quality={100}  className={styles.img} />
        </Link>
        <Link href="href" className={styles.link}>
        <Image src="/images/Rust.webp" alt="alt" fill quality={100} className={styles.img} />
        </Link>
      </div>
    </Container>  
    
    </Section>
  )
};