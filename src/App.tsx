import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import ResponsiveAppBar from "./components/Nav";
import Home from "./components/Home";
import List from "./components/List";
import Tile from "./components/Tile";
import Add from "./components/Add";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="List" element={<List />} />
        <Route path="Tile" element={<Tile />} />
        <Route path="Add" element={<Add />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
