import React, { useState } from "react";
import Math from "../Math/math.tsx";
// Import other subject components as needed

const Home: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

    // Define the subject components in an object for easy access
    const subjectComponents: Record<string, React.ReactNode> = {
        Math: <Math />,
        English: <div>English Content</div>, // Replace with actual component
        Geography: <div>Geography Content</div>, // Replace with actual component
        Science: <div>Science Content</div>, // Replace with actual component
        History: <div>History Content</div>, // Replace with actual component
    };

    return (
        <>
            {selectedSubject === null ? (
                <div>
                    <h1>What Would You Like to Learn?</h1>
                    <div>
                        <button onClick={() => setSelectedSubject("Math")}>Math</button>
                        <button onClick={() => setSelectedSubject("English")}>English</button>
                        <button onClick={() => setSelectedSubject("Geography")}>Geography</button>
                        <button onClick={() => setSelectedSubject("Science")}>Science</button>
                        <button onClick={() => setSelectedSubject("History")}>History</button>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Render the selected subject component */}
                    {subjectComponents[selectedSubject]}
                    {/* Optionally, add a button to go back */}
                    <button onClick={() => setSelectedSubject(null)}>Back</button>
                </div>
            )}
        </>
    );
}

export default Home;
