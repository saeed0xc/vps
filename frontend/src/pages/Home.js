import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to VPS Hosting</h1>
      <p>Choose a plan that fits your needs!</p>
      <Link to="/plans">View Plans</Link>
    </div>
  );
};

export default Home;
