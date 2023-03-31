import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LevelMeter } from "./components/LevelMeter/LevelMeter";
import { useState } from "react";

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}

function App() {
  const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;
  const iOS = typeof requestPermission === "function";
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const permission = async () => {
    const response = await requestPermission!();
    alert(response);
    setHasPermission(response === "granted");
  };

  return (
    <div className="App">
      <div className="logos">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="global-heading">Level Meter PWA</h1>
      {!iOS || hasPermission ? <LevelMeter /> : <button onClick={permission}>Grant Permission</button>}
    </div>
  );
}

export default App;
