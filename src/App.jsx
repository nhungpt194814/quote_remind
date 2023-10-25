import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Bottom from "./components/Bottom/Bottom";
import './App.css'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Slider></Slider>
      <Bottom></Bottom>
      <Footer></Footer>
    </div>
  );
}

export default App;
