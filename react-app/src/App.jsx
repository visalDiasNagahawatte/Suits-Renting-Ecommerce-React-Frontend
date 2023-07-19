import NavBar from "./components/NavBar";
import Slides from "./components/Slides";
import HomeCards from "./components/HomeCards";
import Footer from "./components/Footer";
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
      <>
        <Footer></Footer>
      </>
    </>
  );
}
export default App;
