import { BuySkinsHome } from "@/shared/components/sections/BuySkins/BuySkins";
import { Hero } from "@/shared/components/sections/Hero/Hero";
import { Statistic } from "@/shared/components/sections/Statistics/Statistics";
import { Bloggers } from '../shared/components/sections/Blogers/Blogers';

export const HomePage = () => {
  return (
    <>

    <Hero />
    <BuySkinsHome />
    <Statistic />
    <Bloggers />
    </>
  );
};
