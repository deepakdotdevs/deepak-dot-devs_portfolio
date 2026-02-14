import Hero from "@/components/Hero";
import ImageStack from "@/components/sections/ImageStack";
import WhatSetsMeApart from "@/components/sections/WhatSetsMeApart";
import HomeAboutGrid from "@/components/sections/HomeAboutGrid";


export default function Home() {
  return (
    <>
      <Hero />
      <ImageStack />
      <WhatSetsMeApart />
      <HomeAboutGrid />

    </>
  );
}
