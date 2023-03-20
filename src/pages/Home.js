import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Home</h1>
          <p>This is the Home Page</p>

          <Link to="/posts" className="btn btn-primary">
            Read Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;