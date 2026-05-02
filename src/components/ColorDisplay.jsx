import { getContrastColor, getRandomSimpleColor } from '../utils/colorUtils';

function ColorDisplay({ currentColor, copy }) {
  const textColor = getContrastColor(currentColor);
  return (
    <div
      className='color-display'
      style={{ backgroundColor: `${currentColor}`, color: `${textColor}` }}
      onClick={copy}
    >
      {currentColor}
      <div
        className='copy-color'
        style={{ background: `${textColor}`, color: `${currentColor}` }}
      >
        ClickToCopy
      </div>
    </div>
  );
}

export default ColorDisplay;
