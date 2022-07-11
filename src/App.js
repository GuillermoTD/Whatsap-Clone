import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
