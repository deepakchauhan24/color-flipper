import ModeIndicator from './components/ModeIndicators';
import ModeSelector from './components/ModeSelector';
import './App.css';
import { useState } from 'react';
import ColorDisplay from './components/ColorDisplay';
import { getContrastColor, getRandomSimpleColor } from './utils/colorUtils';

function App() {
  const [mode, setMode] = useState('Simple');
  const changeMode = (mode) => {
    setMode(mode);
  };

  const color = getRandomSimpleColor();
  const textColor = getContrastColor(color);

  // click board to copy
  const copyToClickboard = async () => {
    try {
      await navigator.clipboard.writeText(color);
      console.log('copy success');
    } catch (error) {
      console.log('Failled Copy');
    }
  };

  return (
    <div
      className='App'
      style={{ background: `${color}`, color: `${textColor}` }}
    >
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
          color={color}
          copy={copyToClickboard}
        />
      </main>
    </div>
  );
}

export default App;
