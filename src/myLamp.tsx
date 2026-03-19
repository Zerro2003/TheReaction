import {useState} from "react";
export default function SmartLamp() {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [brightness, setBrightness] = useState<number>(50);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  if (brightness > 98 && isOn) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', border: '2px solid red' }}>
        <h2>💥 BOOM! The bulb burnt out!</h2>
        <p>You pushed it too hard.</p>
        <button onClick={() => setBrightness(50)}>Replace Bulb</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem' }}>
        {isOn ? "💡" : "🌑"}
      </h1>
      
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
      <hr />
      {isOn && (
        <div style={{ margin: '20px 0' }}>
          <p>Brightness Level: <strong>{brightness}%</strong></p>
          <input 
            type="range" 
            min="0" max="100" 
            value={brightness} 
            onChange={(e) => setBrightness(Number(e.target.value))} 
          />
          {brightness > 80 && <p style={{ color: 'orange' }}>Careful, it's getting hot!</p>}
        </div>
      )}

      <button onClick={() => setShowSettings(!showSettings)}>
        {showSettings ? "Hide Settings" : "Show Advanced Settings"}
      </button>

      {showSettings && (
        <div style={{ background: '#f0f0f0', padding: '10px', marginTop: '10px' }}>
          <h4>Advanced Controls</h4>
          <p>Serial Number: XP-9900-LITE</p>
          <button onClick={() => alert("System Resetting...")}>Factory Reset</button>
        </div>
      )}
    </div>
  );
}