import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navigation,
  Footer,
  Home,
  About,
  Resume,
} from "./components";

ReactDOM.render(
  <Router >
    <Navigation />
    <Routes>
      <Route path="/" element={<Home className="home" />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} >
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
