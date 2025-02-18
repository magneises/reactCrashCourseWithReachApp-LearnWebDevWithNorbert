
import './App.css'
import { FaHome, FaUser, FaChartLine } from "react-icons/fa"
import { BsPlusCircleFill, BsBellFill } from "react-icons/bs"
import Title from "./components/Title"
import Home from "./components/Home"


function App() {
  // Keeping below for reference styling
  // let h1Style = {
  //   color: "red",
  //   backgroundColor: "blue",
  // }
  return <div className="App">
    <nav className="navbar">
      <li><FaHome/></li>
      <li><FaUser/></li>
      <li><BsPlusCircleFill/></li>
      <li><FaChartLine/></li>
      <li><BsBellFill/></li>
    </nav>
    <Home />
  </div>
}

export default App
