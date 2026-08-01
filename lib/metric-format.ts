export function parseMetric(value: string) {
  const match = value.match(/^([^\d-]*)(-?[\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const num = Number(numStr.replace(/,/g, ""));
  if (Number.isNaN(num)) return null;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const hasCommas = numStr.includes(",");
  return { prefix, num, suffix, decimals, hasCommas };
}

export function formatMetric(num: number, decimals: number, hasCommas: boolean) {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: hasCommas,
  });
}
