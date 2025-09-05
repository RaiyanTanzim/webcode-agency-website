import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* nested routing [header, footer fixed] */}
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<div>services page</div>}></Route>
        <Route path="/blogs" element={<div>Blogs page</div>}></Route>
        
      </Route>
    </Routes>
  </BrowserRouter>
);
