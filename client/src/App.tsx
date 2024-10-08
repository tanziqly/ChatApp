import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./components/ui/SignIn";
import Chat from "./pages/Chat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
