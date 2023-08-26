import "./style.scss";
import HeroBanner from "./HeroBanner/HeroBanner";
import Trending from "./Trending/Trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default Home;
