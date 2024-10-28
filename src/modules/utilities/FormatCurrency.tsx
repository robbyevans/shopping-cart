const formatterCache: { [key: string]: Intl.NumberFormat } = {};

export const formatCurrency = (
  number: number,
  locale: string = "en-US",
  currency: string = "USD"
): string => {
  const cacheKey = `${locale}-${currency}`;
  let formatter = formatterCache[cacheKey];

  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    });
    formatterCache[cacheKey] = formatter;
  }

  return formatter.format(number);
};
