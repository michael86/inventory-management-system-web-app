export const getRandRgba = () => {
  const getRandInt = () => Math.floor(Math.random() * 255) + 1;

  return `rgba(${getRandInt()}, ${getRandInt()},${getRandInt()}, 0.5)`;
};
