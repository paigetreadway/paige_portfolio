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
  Painting,
  Paintings,
  Blog,
  Post,
  Posts,
} from "./components";

ReactGA.initialize('UA-110570651-1');
ReactGA.pageview(window.location.pathname);

ReactDOM.render(
  <Router >
    <Navigation />
    <Routes>
      <Route path="/" element={<Home className="home" />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>      
      <Route path="/art" element={<Art />}>
        <Route path="" element={<Paintings />} />
        <Route path=":postSlug" element={<Painting />} />
      </Route>
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
