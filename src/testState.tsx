import React from "react"
export default function TestState(){
    const [count, setCount] = React.useState([])
    function add(){
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