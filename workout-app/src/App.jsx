import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import yogaPose2 from './images/yoga-pose-2.png'
import Title from "./components/Title"
import './App.css'

function App() {
  // Keeping below for reference styling
  // let h1Style = {
  //   color: "red",
  //   backgroundColor: "blue",
  // }


  return <div className="App">
    <Title />
      <header>
        <h2>Welcome to the</h2>
        <h1>Workout App</h1>
      </header>
      <main>
        <div className="col">
          <img src={yogaPose2} alt="homeimg" />
        </div>
      </main>
  </div>
}

export default App
