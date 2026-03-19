import {useEffect, useState} from "react";
export default function TitleCounter(){
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        const timer = setInterval(()=>{
            setCount(count + 1)
        },1000)
        document.title = `You clicked ${count} times`;
        if(count===10){
            clearInterval(timer)
        }
    }, [count]);
    
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}
