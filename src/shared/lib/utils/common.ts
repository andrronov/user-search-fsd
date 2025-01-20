export function isNumber(str: string) {
  return /^\d+$/.test(str);
}

export function fstLetterUppercase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
