import ModeIndicator from './components/ModeIndicators';
import ModeSelector from './components/ModeSelector';
import './App.css';
import { useState } from 'react';
import ColorDisplay from './components/ColorDisplay';
import {
  generateHexColor,
  getContrastColor,
  getRandomSimpleColor,
} from './utils/colorUtils';
import ControlButtons from './components/ControlButtons';
import useColorFlipper from './hooks/useColorFlipper';

function App() {
  const { mode, currentColor, changeMode, generateColor, copyToClickboard } =
    useColorFlipper();

  return (
    <div className='App'>
      <h1>🎨 Color Flipper</h1>
      <header>
        <ModeIndicator mode={mode} />
      </header>
      <main>
        <ModeSelector
          mode={mode}
          changeMode={changeMode}
        />
        <ColorDisplay
          currentColor={currentColor}
          copy={copyToClickboard}
        />
        <ControlButtons
          generateColor={generateColor}
          copy={copyToClickboard}
        />
      </main>
    </div>
  );
}

export default App;
