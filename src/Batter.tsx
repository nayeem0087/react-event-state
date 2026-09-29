import { useState } from "react";

function Batter() {

    const [runs, setRuns] = useState(0);

    const handleRuns = () =>{
        setRuns(runs + 1);
    }
    const handleAddFour = ()=>{
        setRuns(runs + 4);
    }
    const handleAddSix = ()=>{
        setRuns(runs + 6);
    }

    return (
        <div>
            <p>----------</p>
            <h2>Score:{runs} </h2>
            <button onClick={handleRuns}>Run</button>
            <button onClick={handleAddFour}>Add 4</button>
            <button onClick={handleAddSix}>Add 6</button>
        </div>
    );
};

export default Batter;