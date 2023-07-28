import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Accomodation from "./pages/Accomodation";
import Error from "./pages/Error";
import "./scss/layout.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </HashRouter>
  </React.StrictMode>
);
