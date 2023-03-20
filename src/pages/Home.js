import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Home</h1>
          <p>Esta es la Home</p>
          <Link to="/posts" className="btn btn-primary">
            Leer Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;