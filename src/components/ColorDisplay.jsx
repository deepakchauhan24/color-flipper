import { getContrastColor, getRandomSimpleColor } from '../utils/colorUtils';

function ColorDisplay({ color, copy }) {
  const textColor = getContrastColor(color);
  return (
    <div
      className='color-display'
      style={{ backgroundColor: `${color}`, color: `${textColor}` }}
      onClick={copy}
    >
      {color}
      <div
        className='copy-color'
        style={{ background: `${textColor}`, color: `${color}` }}
      >
        ClickToCopy
      </div>
    </div>
  );
}

export default ColorDisplay;
