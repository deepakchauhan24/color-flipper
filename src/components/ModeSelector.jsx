function ModeSelector({ mode, changeMode }) {
  return (
    <div className='mode-selector'>
      <button
        onClick={() => changeMode('simple')}
        className={`${mode === 'simple' ? 'active' : ''}`}
      >
        🎨 Simple
      </button>
      <button
        onClick={() => changeMode('hex')}
        className={`${mode === 'hex' ? 'active' : ''}`}
      >
        🌈 Hex
      </button>
    </div>
  );
}

export default ModeSelector;
