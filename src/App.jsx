import { useState } from "react";

import "./App.css";
import Content from "./components/Content";
import TeamSection from "./components/TeamSection";
import LifeAtSpringdale from "./components/LifeAtSpringdale";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Content />
      {/* <TeamSection/> */}
      {/* <LifeAtSpringdale/> */}
      
      
    </>
  );
}

export default App;
