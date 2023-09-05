import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCategory from "./pages/AddCategory";
import AddImage from "./pages/AddImage";
import Header from "./pages/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-category" element={<AddCategory />} />
        <Route exact path="/add-image" element={<AddImage />} />
      </Routes>
    </>
  );
};

export default App;
