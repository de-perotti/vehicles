export const maybeSurroundInQuotes = (value, should) => (
  should && typeof value === 'string' ? `"${value}"` : value);

export const gqlArgumentParser = (options, separator = ', ', maybeSurround = true) => Object.keys(options)
  .filter(option => options[option] !== undefined)
  .map(option => `${option}: ${maybeSurroundInQuotes(options[option], maybeSurround)}`)
  .join(separator);
