import { useState } from 'react';

function ModeIndicator({ mode }) {
  return (
    <p className='mode-indicators'>
      {mode === 'Simple' ? `Simple 🎨` : `Hex 🌈`}
    </p>
  );
}

export default ModeIndicator;
