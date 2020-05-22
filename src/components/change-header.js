import React from 'react';
import currencies from '../constants/currencies';

function ChangeHeader ({currencyKey, amount, price}) {
    if (!currencyKey || !amount || !price ) {
        return null;
    }

    const symbol = currencies[currencyKey].symbol;
    return (
        <div>
            {`You supplied ${symbol}${amount}, with a product price of ${symbol}${price}`}
        </div>
    )
}

export default ChangeHeader;