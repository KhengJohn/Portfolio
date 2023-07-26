import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import "./components/styles/home/style.css";

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
