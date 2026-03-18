import React from "react"
// TestState: demonstrates useState with arrays
// Using the spread operator to add items to state arrays
export default function TestState(){
    const [count, setCount] = React.useState([])
    function add(){
        // spread the existing array and add new item
        setCount(count=>[...count,1])
    }
    return(
        <div>
            <h1>Test State</h1>
            <button onClick={add}>add one</button>
            <p className="text-9xl">{count}</p>
        </div>
    )
}
