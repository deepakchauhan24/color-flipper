import ModeIndicator from './components/ModeIndicators';
import ModeSelector from './components/ModeSelector';
import './App.css';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('Simple');
  const changeMode = (mode) => {
    setMode(mode);
  };

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
      </main>
    </div>
  );
}

export default App;
