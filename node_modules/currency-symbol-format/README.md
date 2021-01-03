# currency-symbol-format

Get the currency symbol from currency code

## Installation

    npm install currency-symbol-format --save

## Usage
```
import {getCurrencyCode, getNativeCode} from 'currency-symbol-format';

getCurrencyCode(currencyCode, locale = optional)

getCurrencyCode('AED')
getCurrencyCode('AED', 'ar')
getCurrencyCode('AED', 'en')
getNativeCode('AED')
getCurrencyCode('INR')

```

#### Credit

Currency data : http://www.localeplanet.com/api/auto/currencymap.html
