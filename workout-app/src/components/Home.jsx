
import Title from "./Title"
import yogaPose2 from "../images/yogaPose2.png"

export default function Home() {
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
                            <button className='btn btn-light btn-sm'>-</button>
                            <span style={{ margin: '.5rem' }}>min</span>
                            <button className='btn btn-light btn-sm'>+</button>
                        </div>
                        <h2>Workout Time</h2>
                    </div>
                </div>
                <div className='col '>
                    <img src={yogaPose2} alt="yogaPose2" />
                </div>
                <a href='/'></a>
            </main>
        </>
    );
}