import Hero from "../components/Hero";
import Discover from "../components/home/Discover";
import Earn from "../components/home/Earn";
import NewArrivals from "../components/home/NewArrivals";

const Home = () => {
  return (
    <section>
      <Hero />
      <Discover />
      <NewArrivals />
      <Earn />
    </section>
  );
};

export default Home;
