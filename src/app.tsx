import { Route, Routes } from "react-router-dom"
import { Background } from "./Components/Background"
import Navbar from "./Components/Navbar"

import Home from "./Pages/Home"
import FoodInsecurity from "./Pages/Subpage/FoodInsecurity"
import FoodScarcity from "./Pages/Subpage/FoodScarcity"
import Solutions from "./Pages/Subpage/Solutions"

export const App: React.FC = () => {
    return <>
        <Background/>

        {/* Navbar */}
        <div className='z-1 relative'>
          <Navbar/>
        </div>

        {/* Main page stuff */}
        <div className='z-0 pt-2'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/FI" element={<FoodInsecurity/>} />
            <Route path="/FS" element={<FoodScarcity/>} />
            <Route path="/S" element={<Solutions/>} />
          </Routes>
        </div>
    </>
}