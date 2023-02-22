import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbarjs from "./Component/Navbarjs";
import ReactDOM from "react-dom";
import Main from "./Component/Main";
// import New from "./Component/New";
// import CheckWeather from "./Component/CheckWeather";
export default function App() {
  return (
    <div className="App">
      <Navbarjs />

      <Main />
      {/* <New/> */}
    </div>
  );
}
