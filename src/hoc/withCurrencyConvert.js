import React, { useEffect, useState } from "react";
import { getCurrencyCode } from "currency-symbol-format";

const BASE_URL = "https://api.exchangeratesapi.io/latest";
const withCurrencyConvert = (WComponent) => {
  const WithCurrencyConvert = (props) => {
    const { setCurrencyName, setCurrencySymbol, setExchangeRate } = props;
    const [currencyOptions, setCurrencyOptions] = useState([]);

    useEffect(() => {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
          const firstCurrency = Object.keys(data.rates)[26];
          setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
          setExchangeRate(data.rates[firstCurrency]);
        });
    }, [setCurrencyOptions, setExchangeRate]);

    useEffect(() => {
      if ((props.currencyName != null) & (props.currencyName != "USD")) {
        fetch(`${BASE_URL}?base=${"USD"}&symbols=${props.currencyName}`)
          .then((res) => res.json())
          .then((data) => setExchangeRate(data.rates[props.currencyName]));
      }
    }, [props.currencyName, props.exchangeRate, setExchangeRate]);

    const handleSelect = (e) => {
      setCurrencyName(e);
      setCurrencySymbol(getCurrencyCode(e));
    };

    return (
      <WComponent
        currencyOptions={currencyOptions}
        onSelect={handleSelect}
        {...props}
      ></WComponent>
    );
  };
  return WithCurrencyConvert;
};
export default withCurrencyConvert;
