import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
//import Post from "./components/Post";

import { Menu } from "./components/Menu";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/posts" element={<Posts/>} />
        <Route exact path="/posts/:postId" element={<PostPage/>} />
       <Route to="/" /> {/*  Cualquier ruta que marquemos que
        no se corresponda a posts nos redirigirá a la Home*/}
      </Routes>
    </Router>
  );
}

export default App;