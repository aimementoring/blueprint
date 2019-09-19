export function capitalize(value) {
  return value && value.length ? `${value[0].toUpperCase()}${value.slice(1)}` : value;
}

export function camelCaseToWords(string) {
  return string
    .replace(/([A-Z])/g, match => ` ${match}`)
    .replace(/^./, match => match.toUpperCase());
}

export function wordsToCamelCase(string) {
  const [firstChar, ...rest] = string.split(' ').map(capitalizeWord);
  return firstChar.toLowerCase() + rest.join('');
}

function capitalizeWord([first, ...rest]) {
  return first.toUpperCase() + rest.join('');
}
