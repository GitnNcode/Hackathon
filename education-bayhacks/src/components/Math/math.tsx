import React, { useState } from "react";
import "./math.css";
import house from './house.png';
import unlocked from './unlocked_house.png';
import Algebra from "../Lessons/algebra.tsx";

const Math: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

    return (
        <>
            {selectedSubject === null ? (
                <>
                    <h1>MATH</h1>
                    <div className="subjects-container">
                        <div className="subject">
                            <img src={unlocked} alt="Algebra 1" className="octagon" />
                            <button className="subject-button" onClick={() => setSelectedSubject("Algebra 1")}>
                                ALGEBRA 1
                            </button>
                        </div>

                        <div className="subject">
                            <img src={unlocked} alt="Algebra 2 / Trigonometry" className="octagon" />
                            <button className="subject-button">ALGEBRA 2 / TRIGONOMETRY</button>
                        </div>

                        <div className="subject">
                            <img src={house} alt="Precalc" className="octagon" />
                            <button className="subject-button">PRECALC</button>
                        </div>

                        <div className="subject">
                            <img src={house} alt="Calculus 1" className="octagon" />
                            <button className="subject-button">CALCULUS 1</button>
                        </div>

                        <div className="subject">
                            <img src={house} alt="Calculus 2" className="octagon" />
                            <button className="subject-button">CALCULUS 2</button>
                        </div>

                        <div className="subject">
                            <img src={house} alt="Calculus 3" className="octagon" />
                            <button className="subject-button">CALCULUS 3</button>
                        </div>

                        <div className="subject">
                            <img src={house} alt="Differential Equations" className="octagon" />
                            <button className="subject-button">DIFFERENTIAL EQUATIONS</button>
                        </div>

                        <div className="subject">
                            <img src={house} alt="Linear Algebra" className="octagon" />
                            <button className="subject-button">LINEAR ALGEBRA</button>
                        </div>
                    </div>
                </>
            ) : (
                <Algebra />
            )}
        </>
    );
}

export default Math;