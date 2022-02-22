import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from 'react-ga';

import {
  Navigation,
  Footer,
  Home,
  About,
  Resume,
  Projects,
  Art,
} from "./components";

ReactGA.initialize('UA-110570651-1');
ReactGA.pageview(window.location.pathname);

ReactDOM.render(
  <Router >
    <div class="bg-image"></div>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home className="home" />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />   
      <Route path="/art" element={<Art />}>
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
