const formatNumber = (num: number, decimals: number = 1): string => {
  if (num < 1000) {
    return num.toString(); // 小于 1000，直接返回
  }

  const units = ["", "K", "M", "B", "T"]; // K 表示千，M 表示百万，B 表示十亿，T 表示万亿
  let unitIndex = 0;

  while (num >= 1000 && unitIndex < units.length - 1) {
    num /= 1000;
    unitIndex++;
  }

  return `${num.toFixed(decimals)}${units[unitIndex]}`;
};
export { formatNumber };
