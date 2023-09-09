import Hero from "../components/Hero";
import Discover from "../components/home/Discover";
import Earn from "../components/home/Earn";
import Exploring from "../components/home/Exploring";
import NewArrivals from "../components/home/NewArrivals";

const Home = () => {
  return (
    <section>
      <Hero />
      <Discover />
      <NewArrivals />
      <Earn />
      <Exploring />
    </section>
  );
};

export default Home;
