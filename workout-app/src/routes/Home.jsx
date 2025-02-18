
import Title from "../components/Title"
import yogaPose2 from "../images/yogaPose2.png"
import Button from "../components/Button"
import {BsFillPlayCircleFill} from "react-icons/bs"

import { useState } from "react";

export default function Home() {
    const [workoutTime, setWorkoutTime] = useState(0);

    return (
        <>
            <Title text="Home" color="purple" />

            <header className='text-start my-5 ms-4'>
                <h2 className='text-secondary fw-light'>Welcome to the</h2>
                <h1 className='display-1 fw-bold'>Workout App</h1>
            </header>
            <main className='card row text-left text-white m-4 p-4 bg-orange'>
                <div className="col text-start">
                    <h1>Start your daily training</h1>
                    <p>with over 32 workout videos for you.</p>
                    <div className='card bg-purple d-flex flex-row justify-content-between p-3'>
                        <div className="text-end">
                            <Button 
                                classes={"light btn-sm"} 
                                text={"-"} 
                                onClick={() => setWorkoutTime(workoutTime - 1)}
                                />
                            <span style={{ margin: '.5rem' }}>{workoutTime} min</span>
                            <Button 
                                classes={"light btn-sm"} 
                                text={"+"} 
                                onClick={() => setWorkoutTime(workoutTime + 1)}
                                />
                        </div>
                        <h2>Workout Time</h2>
                    </div>
                </div>
                <div className='col '>
                    <img src={yogaPose2} alt="yogaPose2" style={{ maxWidth: "420px"}} />
                </div>
                <a href='/'>
                    <Button 
                        classes={"purple rounded-pill my-4"} 
                        text={"Get started"} 
                        icon={<BsFillPlayCircleFill className="fs-1 me-1" />} 
                    
                    />
                </a>
            </main>
        </>
    );
}