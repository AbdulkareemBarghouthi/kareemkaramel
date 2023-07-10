import React, { useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const mouseAnimationStuff = useCallback((e: any) => {
    console.log(e, 'e')
  }, []);


  useEffect(() => {
    document.body.addEventListener("click", mouseAnimationStuff);
    return () => {
      document.body.removeEventListener("click", mouseAnimationStuff);
    };
  }, [mouseAnimationStuff]);

  return (
    <div className="App">
      <div className="content">
        <div className="who-am-i-section section">
        </div>
        <div className="what-do-i-do-section section">
        </div>
        <div className="portal section">
        </div>
      </div>
    </div>
  );
}

export default App;
