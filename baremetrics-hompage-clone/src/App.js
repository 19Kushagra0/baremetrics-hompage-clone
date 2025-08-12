import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/1_Header";
import Title from "./myComponents/2_Title";
import Payment_providers from "./myComponents/3_Payment_providers";
import Feature_box1 from "./myComponents/4_Feature_box1";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Payment_providers />
      <Feature_box1 />
    </div>
  );
}

export default App;
