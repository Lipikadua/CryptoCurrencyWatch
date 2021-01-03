import React from 'react';
import data from './constant/data.json';

  function getCurrencyCode(currencyCode, locale) {
    locale = locale || 'en';
    if (typeof currencyCode !== 'string') return undefined;
    const code = currencyCode.toUpperCase();
    if(!data.hasOwnProperty(code)) return undefined;
    const codeSymbol = locale && data[code].locale && data[code].locale === locale ? data[code].symbol_native : data[code].symbol;
    return codeSymbol;
  }

  function getNativeCode(currencyCode) {
    if (typeof currencyCode !== 'string') return undefined;
    const code = currencyCode.toUpperCase();
    const codeObj = data.hasOwnProperty(code) ? data[code].symbol_native : undefined;
    return codeObj;
  }


export {getCurrencyCode};
export {getNativeCode};
