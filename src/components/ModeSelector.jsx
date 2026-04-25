function ModeSelector({ mode, changeMode }) {
  return (
    <div className='mode-selector'>
      <button
        onClick={() => changeMode('Simple')}
        className={`${mode === 'Simple' ? 'active' : ''}`}
      >
        🎨 Simple
      </button>
      <button
        onClick={() => changeMode('Hex')}
        className={`${mode === 'Hex' ? 'active' : ''}`}
      >
        🌈 Hex
      </button>
    </div>
  );
}

export default ModeSelector;
