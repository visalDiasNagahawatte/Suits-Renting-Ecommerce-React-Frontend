import NavBar from "./components/NavBar";
import ShopNowCard from "./components/ShopNowCard";
import Slides from "./components/Slides";
import HomeCards from "./components/HomeCards";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <>
        <NavBar></NavBar>
      </>
      {/* <>
        <ShopNowCard></ShopNowCard>
      </> */}
      <>
        <Slides></Slides>
      </>
      <>
        <HomeCards></HomeCards>
      </>
    </>
  );
}
export default App;
