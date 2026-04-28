// ======================================
// COLOR UTILITY FUNCTIONS
// ======================================

export const simpleColors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#F1C40F',
  '#9B59B6',
  '#1ABC9C',
  '#E67E22',
  '#2C3E50',
  '#ECF0F1',
  '#000000',
];

export const generateHexColor = () => {
  const hex =
    '#' +
    Math.floor(Math.random() * 16777216)
      .toString()
      .padStart(6, 0);
  return hex;
};

export const getRandomSimpleColor = () => {
  const colorIndex = Math.floor(Math.random() * simpleColors.length);
  return simpleColors[colorIndex];
};

export const getContrastColor = (hexColor) => {
  // Convert hex to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};
