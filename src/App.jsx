import "./App.css";
import Header from "./myComponents/1_Header";
import Title from "./myComponents/2_Title";
import PaymentProviders from "./myComponents/3_Payment_providers";
import FeatureBox1 from "./myComponents/4_Feature_box1";
import CompaniesUsing from "./myComponents/5_Companies_using ";
import FeatureBox2 from "./myComponents/6_Feature_box2";
import Review from "./myComponents/7_Review";
import Growth from "./myComponents/8_Growth";
import Notification from "./myComponents/9_Notification";
import Cancellation from "./myComponents/10_Cancellation";
import Recover from "./myComponents/11_Recover";
import OpenStartups from "./myComponents/12_Open_Startups";
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
      <PaymentProviders />
      <FeatureBox1 />
      <CompaniesUsing />
      <FeatureBox2 />
      <Review />
      <Growth />
      <Notification />
      <Cancellation />
      <Recover />
      <OpenStartups />
      <About />
      <Publications />
      <Started />
      <Fotter />
      <Model />
    </div>
  );
}

export default App;
