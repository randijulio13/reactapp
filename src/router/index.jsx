import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Dashboard from "../views/Dashboard";
import Home from "../views/Home";
import * as Middleware from "../middleware";

function Index(props) {
  return (
    <div>
      <Routes>
        <Route element={<NavBar />}>
            
          <Route path="/" element={<Home />} />

          <Route element={<Middleware.Auth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route element={<Middleware.Guest />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default Index;
