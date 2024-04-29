import React, { useState } from "react";

function State(){
    // Declare a state variable 'count' and a function 'setCount' to update it
    const[count, setCount] = useState(0)
    // Function to increment the count
    function incrementCount(){
        // Using functional update to safely update the state based on previous state
        setCount(prevCount => prevCount + 1)
    }
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={incrementCount}>Update</button>
        </div>
    )
}
export default State;