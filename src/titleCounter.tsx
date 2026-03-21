import {useEffect, useState} from "react";
export default function TitleCounter(){
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        const timer = setInterval(()=>{
            setCount(prev => prev + 1)
        },1000)
        document.title = `You clicked ${count} times`;
        return () => clearInterval(timer);
    }, [count]);
    
    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}
