export default function isNullOrWhitespace(str: string) {
  return str === null || str.trim() === '';
}
