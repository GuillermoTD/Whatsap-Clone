import { signOut } from "firebase/auth";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./FirebaseConfig";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";

export default function App() {
const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))

const signUserOut = ()=>{

signOut(auth).then(()=>{
  localStorage.clear()
  setIsAuth(false)
  window.location.pathname = "/login"
})        
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage 
          isAuth={isAuth}
          signUserOut={signUserOut}
          />}
          />
          <Route path="/login" element={<LoginPage 
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
