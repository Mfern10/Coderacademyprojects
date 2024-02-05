import React from "react";
import Home from "./Home";
import CategorySelection from "./CategorySelection";
import NewEntry from "./NewEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category" element={<CategorySelection />}></Route>
          <Route path="/entry">
            <Route path="new/:cat_id" element={<NewEntry />}></Route>
          </Route>
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
