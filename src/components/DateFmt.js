export default function DateFmt({ value, ...options }) {
  const date = toDate(value);
  if (!date) return null;
  return date.toLocaleString(navigator.languages, options);
}

function toDate(value) {
  if (value instanceof Date) return value;
  if (typeof value === 'string') return new Date(value);
}
