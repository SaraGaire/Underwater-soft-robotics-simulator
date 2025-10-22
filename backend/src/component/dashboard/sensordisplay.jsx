import React, { useEffect, useState } from "react";
import socket from "../../services/websocket";

export const SensorDisplay = () => {
  const [sensor, setSensor] = useState({});

  useEffect(() => {
    socket.on("sensor_broadcast", setSensor);
    return () => socket.off("sensor_broadcast");
  }, []);

  return (
    <div className="p-4 bg-blue-50 rounded">
      <h3 className="text-lg font-bold mb-2">Sensor Data</h3>
      <p>🌡️ Temperature: {sensor.temperature ?? "--"} °C</p>
      <p>💧 Turbidity: {sensor.turbidity ?? "--"} NTU</p>
      <p>📏 Depth: {sensor.depth ?? "--"} m</p>
    </div>
  );
};
