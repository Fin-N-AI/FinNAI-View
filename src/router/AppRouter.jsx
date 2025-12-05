import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Company from "../pages/Company";
import NewsDetail from "../pages/NewsDetail";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp"; 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:id" element={<Company />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
