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
    </div>
  );
}

export default App;
