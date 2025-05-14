'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Title } from '../../ui/Title/Title';
import styles from './Blogers.module.css';
import { bloggers } from '@/shared/lib/bloggers';
import { Section } from '../../ui/containers/Section/Section';
import { Container } from '../../ui/containers/Container/Container';
import { Button } from '../../ui/Button/Button';

export interface IBloggersProps {
  bloggers?: Array<{
    name: string;
    followers: string;
    image: string;
    href: string;
  }>;
}

export const Bloggers: React.FC<IBloggersProps> = ({ bloggers: propBloggers }) => {
  const displayBloggers = propBloggers || bloggers;
  const [visibleCount, setVisibleCount] = useState(12);
  const [cardsPerRow, setCardsPerRow] = useState(6);

  useEffect(() => {
    const updateCardsPerRow = () => {
      const newCardsPerRow = window.innerWidth > 1024 ? 6 : 3;
      setCardsPerRow(newCardsPerRow);
      setVisibleCount(newCardsPerRow * 2);
    };
    updateCardsPerRow();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + (cardsPerRow * 2)); 
  };

  const visibleBloggers = displayBloggers.slice(0, visibleCount);
  return (
    <Section>
      <Container>
        <Title>БЛОГЕРЫ РЕКОМЕНДУЮТ</Title>
    <div className={styles["bloggers-slider"]}>
      {visibleBloggers.map((blogger, index) => (
        <a
          key={index}
          href={blogger.href}
          target="_blank"
          rel="nofollow noreferrer"
          className={styles["blogger-card"]}
        >
          <div className={styles["blogger-info"]}>
            <Image src={blogger.image} alt={blogger.name} width={100} height={100} className={styles.img}/>
            <div className={styles["blogger-name"]}>{blogger.name}</div>
            <div className={styles["blogger-followers"]}>{blogger.followers}</div>
          </div>
        </a>
      ))}
    </div>
    {visibleCount < displayBloggers.length && (
      <div className={styles["show-more-container"]}>
        <Button size='normal' variant='primary' onClick={handleShowMore} className={styles["show-more-button"]}>
          Показать еще
        </Button>
      </div>
    )}
    </Container>
    </Section>
  );
};