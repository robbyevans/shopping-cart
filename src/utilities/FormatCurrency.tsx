import React, { FC } from "react";
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{currency:'USD',style:'currency'})

interface FormatCurrencyProps {
  number:number;
}

const formatCurrency: FC<FormatCurrencyProps> = ({number}) => {
  
  return CURRENCY_FORMATTER.format(number)
};

export default formatCurrency;
