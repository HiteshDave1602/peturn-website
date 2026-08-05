export const serviceAccents = [
  "#e0a72e",
  "#d6631f",
  "#7c5cbf",
  "#1d6cdb",
  "#268dbc",
  "#1f9d6f",
] as const;

export function hexToRgb(hex: string) {
  const value = parseInt(hex.slice(1), 16);
  return `${(value >> 16) & 255} ${(value >> 8) & 255} ${value & 255}`;
}
