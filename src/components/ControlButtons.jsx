function ControlButtons({ generateColor, copy }) {
  return (
    <div className='control-buttons'>
      <button onClick={generateColor}>Generate Colors ✨</button>
      <button onClick={copy}>Copy Color 📋</button>
    </div>
  );
}

export default ControlButtons;
