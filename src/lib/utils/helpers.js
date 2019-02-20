export function capitalize(value) {
  return value && value.length ? `${value[0].toUpperCase()}${value.slice(1)}` : value;
}
