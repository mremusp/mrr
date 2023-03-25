import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((item, idx) => (
        <AnimalShow type={item} key={idx} />
    ));

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <p>{animals}</p>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}

export default App;
