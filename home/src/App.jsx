import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="" element={<Home />} />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
