import React from "react";
import Card from "./Card"
import CardData from "./CardData";

const Home = () => {
  return (
    <>
      <div className="home-cards">
        <Card details={CardData}/>
      </div>
    </>
  );
}

export default Home;