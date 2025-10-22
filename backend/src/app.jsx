import React, { useState } from "react";
import { ControlPanel } from "./components/Controls/ControlPanel";
import { SensorDisplay } from "./components/Dashboard/SensorDisplay";
import { WaterCanvas } from "./components/Canvas/WaterCanvas";

export default function App() {
  const [running, setRunning] = useState(false);
  return (
    <div className="App text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Marine Waste Collection</h1>
      <WaterCanvas />
      <ControlPanel
        isRunning={running}
        onPlay={() => setRunning(true)}
        onPause={() => setRunning(false)}
        onReset={() => window.location.reload()}
      />
      <SensorDisplay />
    </div>
  );
}
