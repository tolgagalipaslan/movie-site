import React from "react";
import routes from "./routes/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
const App = () => {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route key={key} path={path} element={component} />
  ));
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{routeComponents}</Routes>
    </BrowserRouter>
  );
};

export default App;
