import React from "react";
import routes from "./routes/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route key={key} path={path} element={component} />
  ));
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{routeComponents}</Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
