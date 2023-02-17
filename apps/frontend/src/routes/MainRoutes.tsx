import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NoteCreate } from "../pages/NoteCreate";
import { NoteProfile } from "../pages/NoteProfile";
import { Signup } from "../pages/Signup";
import { Activation } from "../pages/Activation";

export const MainRoutes = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/activation/:activationToken"
        element={!user ? <Activation /> : <Navigate to="/" />}
      />
      <Route
        path="/note/create"
        element={user ? <NoteCreate /> : <Navigate to="/login" />}
      />
      <Route
        path="/note/:noteId"
        element={user ? <NoteProfile /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};
