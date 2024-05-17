  import AboutUs from "./about";
  import Categories from "./categorie";
  import Featured from "./features";
  import Feeds from "./feeds";
  import Team from "./teams";
  import WhatWeDo from "./whatwedo";
import GetInTouch from "./hero/GetInTouch";
import Hero from "./hero/hero";
  
  const Home = () => {
    return (
      <div className=" pt-10">
        <Hero />
        {/* <Filters /> */}
        <div className="mt-10 px-[3%] md:px-[6%]">
          <AboutUs />
          <WhatWeDo />
          <Featured />
          <Categories />
          <GetInTouch />
          <Team />
          
          <Feeds />
          
        </div>
      </div>
    );
  };
  
  export default Home;
  