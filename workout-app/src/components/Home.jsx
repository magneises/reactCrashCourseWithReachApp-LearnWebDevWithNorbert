
import Title from "./Title"
import yogaPose2 from "../images/yogaPose2.png"

export default function Home() {
    return (
        <>
            <Title text="Home" color="purple" />
            <header>
                <h2>Welcome to the</h2>
                <h1>Workout App</h1>
            </header>
            <main>
                <div className="col">
                    <img src={yogaPose2} alt="yogaPose2" />
                </div>
            </main>
        </>
    );
}