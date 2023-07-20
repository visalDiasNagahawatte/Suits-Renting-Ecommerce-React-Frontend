import NavBar from "./components/NavBar";
import Slides from "./components/Slides";
import HomeCards from "./components/HomeCards";
import Footer from "./components/Footer";
import ShopNowCard from "./components/ShopNowCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <>
        <NavBar></NavBar>
      </>

      <>
        <Slides></Slides>
      </>
      <>
        <HomeCards></HomeCards>
      </>

      <>
        <ShopNowCard></ShopNowCard>
      </>

      <>
        <Footer></Footer>
      </>
    </>
  );
}
export default App;
