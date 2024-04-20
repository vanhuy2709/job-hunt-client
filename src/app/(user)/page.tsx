import HomeHero from "@/components/homepage/home.hero";
import HomeAdvertise from "@/components/homepage/home.advertise";
import HomeCategory from "@/components/homepage/home.category";
import HomeFeatured from "@/components/homepage/home.featured";
import HomeLatest from "@/components/homepage/home.latest";

const HomePage = () => {

  return (
    <>
      <HomeHero />
      <HomeAdvertise />
      <HomeCategory />
      <HomeFeatured />
      <HomeLatest />
    </>
  )
}

export default HomePage;