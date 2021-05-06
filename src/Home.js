import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <h1> This is home</h1>
      <h4>Welcome to my home</h4>
      <button onClick={props.changeToPricingPage}>Pricing page</button>
    </div>
  );
};

export default Home;
