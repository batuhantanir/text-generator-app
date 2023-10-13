import React from "react";
import Header from "./components/Header";
import TextContainer from "./components/TextContainer";

function App() {
  return (
    <div className="flex flex-col items-center bg-[#222222] min-h-screen text-white">
      <Header />
      <TextContainer />
    </div>
  );
}

export default App;
