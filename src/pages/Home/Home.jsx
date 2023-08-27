import "./style.scss";
import HeroBanner from "./HeroBanner/HeroBanner";
import Trending from "./Trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <div style={{ height: "1000px" }}></div>
    </div>
  );
};

export default Home;
