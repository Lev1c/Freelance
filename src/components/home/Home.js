import Search from "./Home-components/Search";
import Statistics from "./Home-components/Statistics";
import Categories from "./Home-components/Categories";
import Why from "./Home-components/Why";
import Work from "./Home-components/Work";

function Home() {
    return (
      <div className="Home">
        <Search/>
        <Statistics/>
        <Categories/>
        <Why/>
        <Work/>
      </div>
    );
  }
  
  export default Home;