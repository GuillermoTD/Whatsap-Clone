import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index path="login" element={<LoginPage />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
