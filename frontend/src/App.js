import Home from "./components/Home";
import { HashRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <HashRouter basename='/' >
      <Routes>
       <Route path="/" exact element ={<Home/>}></Route>
      </Routes>
    </HashRouter >
    </div>
  );
}

export default App;
