import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import "./CSS/responsive.css"
function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSide = () => {
    setIsSideOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleSide={toggleSide} />
      <div className="master">
        <Main isSideOpen={isSideOpen} />
      </div>
    </>
  );
}

export default App;
