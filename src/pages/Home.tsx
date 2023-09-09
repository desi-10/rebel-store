import Hero from "../components/Hero";
import Discover from "../components/home/Discover";
import Earn from "../components/home/Earn";
import Exploring from "../components/home/Exploring";
import Mission from "../components/home/Mission";
import NewArrivals from "../components/home/NewArrivals";
import Trending from "../components/home/Trending";

const Home = () => {
  return (
    <section>
      <Hero />
      <Discover />
      <NewArrivals />
      <Mission />
      <Earn />
      <Exploring />
      <Trending />
    </section>
  );
};

export default Home;
