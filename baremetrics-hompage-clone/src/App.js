import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/1_Header";
import Title from "./myComponents/2_Title";
import Payment_providers from "./myComponents/3_Payment_providers";
import Feature_box1 from "./myComponents/4_Feature_box1";
import Companies_using from "./myComponents/5_Companies_using ";
import Feature_box2 from "./myComponents/6_Feature_box2";
import Review from "./myComponents/7_Review";
import Growth from "./myComponents/8_Growth";
import Notification from "./myComponents/9_Notification";
import Cancellation from "./myComponents/10_Cancellation";
import Recover from "./myComponents/11_Recover";
import Open_Startups from "./myComponents/12_Open_Startups";
import About from "./myComponents/13_About";
import Publications from "./myComponents/14_Publications";
import Started from "./myComponents/15_Started";
import Fotter from "./myComponents/16_Fotter";
import Model from "./myComponents/17_Model";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Payment_providers />
      <Feature_box1 />
      <Companies_using />
      <Feature_box2 />
      <Review />
      <Growth />
      <Notification />
      <Cancellation />
      <Recover />
      <Open_Startups />
      <About />
      <Publications />
      <Started />
      <Fotter />
      <Model />
    </div>
  );
}

export default App;
