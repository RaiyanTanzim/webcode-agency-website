import { StrictMode } from "react";
import "sweetalert2/dist/sweetalert2.js";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import Pricing from "./pages/home/Pricing.jsx";
import Services from "./pages/home/Services.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      {/* nested routing [header, footer fixed] */}
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>

          {/* error page -- catch all route*/}
          <Route path="*" element={<ErrorPage />} />
        </Route>

        {/* authebtication */}
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
