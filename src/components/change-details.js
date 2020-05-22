import React from 'react';

function ChangeDetails ({changeAmounts}) {
    if (!changeAmounts ) {
        return null;
    }

    return (
        <div>
            <div>This is your change:</div>
            <div>
                {changeAmounts.map(chgAmount => (
                    <div key={chgAmount.denomination.displayName}>
                        { chgAmount.print() }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ChangeDetails;