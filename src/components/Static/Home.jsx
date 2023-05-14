import React from "react";
import BookDemo from "./BookDemo";

import "../../styles/Home.css";

const Home = () => {
  return (
    <section className="d-flex landing">
      <div className="text-center">
        <h1>
          <span>Complete</span> Inventory Management <span>System</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi impedit corporis,
          consequatur, doloribus accusamus voluptates mollitia voluptatibus exercitationem nam
          expedita eaque cum et distinctio atque perferendis fuga enim. Ad, nulla!
        </p>
        <BookDemo />
      </div>
      <img className="landing-image mb-5" src="/images/warehouse_landing.svg" alt="warehouse" />
    </section>
  );
};

export default Home;
