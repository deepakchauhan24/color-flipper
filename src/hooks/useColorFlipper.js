import { useState } from 'react';
import { generateHexColor, getRandomSimpleColor } from '../utils/colorUtils';

function useColorFlipper() {
  const [currentColor, setCurrentColor] = useState('#2C3E50');
  console.log(currentColor);

  const [mode, setMode] = useState('simple');

  // generate colors
  const generateColor = (mode) => {
    let newColor;

    if (mode === 'simple') {
      newColor = getRandomSimpleColor();
    } else {
      newColor = generateHexColor();
    }
    setCurrentColor(newColor);
  };
  const changeMode = (newMode) => {
    setMode(newMode);
  };

  // click board to copy
  const copyToClickboard = async () => {
    try {
      await navigator.clipboard.writeText(currentColor);
      console.log('copy success');
    } catch (error) {
      console.log('Failled Copy');
    }
  };
  return { mode, changeMode, currentColor, generateColor, copyToClickboard };
}

export default useColorFlipper;
