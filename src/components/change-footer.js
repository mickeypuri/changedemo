import React from 'react';
import currencies from '../constants/currencies';

function ChangeFooter ({currencyKey, totalChange}) {
    if (!currencyKey || !totalChange ) {
        return null;
    }

    return (
        <div>
            {`Total change: ${currencies[currencyKey].symbol}${totalChange}`}
        </div>
    )
}

export default ChangeFooter;