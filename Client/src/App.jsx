import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import HomePage from "./Components/Home/HomePage.jsx";

function App() {
  

  return (
    <div>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hombre" element={<h1>Hombre</h1>} />
        <Route path="/mujer" element={<h1>Mujer</h1>} />
        <Route path="/accesorios" element={<h1>Accesorios</h1>} />
      </Routes>
    </div>

  )
}

export default App
