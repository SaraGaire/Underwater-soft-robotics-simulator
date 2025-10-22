import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export const ControlPanel = ({ onPlay, onPause, onReset, isRunning }) => (
  <div className="flex gap-4 justify-center p-4">
    {isRunning
      ? <button onClick={onPause}><Pause /> Pause</button>
      : <button onClick={onPlay}><Play /> Start</button>}
    <button onClick={onReset}><RotateCcw /> Reset</button>
  </div>
);
