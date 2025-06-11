export function calculatePercentage(randomValue, maxValue) {
  const percentage = Math.round((randomValue / maxValue) * 100);
  return percentage;
}
