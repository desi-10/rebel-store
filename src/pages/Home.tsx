import Hero from "../components/Hero";
import TopBlogs from "../components/blog/TopBlogs";
import Discover from "../components/home/Discover";
import Earn from "../components/home/Earn";
import Exploring from "../components/home/Exploring";
import Mission from "../components/home/Mission";
import NewArrivals from "../components/home/NewArrivals";
import Review from "../components/home/Review";
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
      <TopBlogs />
      <Review />
    </section>
  );
};

export default Home;
