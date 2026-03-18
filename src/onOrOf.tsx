import { useState } from "react";
export default function OnOrOff(){
    const [isOn, setIsOn] = useState<boolean>(false);
    const [showSettings, setShowSettings] = useState<boolean>(false);
    return(
        <div>
            <h1>{isOn? "🌑":"☀️"}</h1>
            
        </div>
    )    
}
