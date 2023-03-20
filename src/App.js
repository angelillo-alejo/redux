import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./components/Post";
import Post from "./components/Post";
import PostPage from "./pages/PostPage";
import { Menu } from "./components/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/posts" element={<Posts/>} />
        <Route exact path="/posts/:postId" element={<Post/>} />
       <Route to="/" /> {/*  Cualquier ruta que marquemos que no se corresponda a posts nos redirigirá a la Home*/}
      </Routes>
    </Router>
  );
}

export default App;