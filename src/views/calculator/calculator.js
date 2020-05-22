import React, { useState, useEffect } from 'react';
import Currencies from '../../constants/currencies';
import './calculator.css';
import calculateChange from '../../utils/calculate-change.ts';
import ChangeHeader from '../../components/change-header';
import ChangeFooter from '../../components/change-footer';
import ChangeDetails from '../../components/change-details';

function Calculator() {
    const [amount, setAmount] = useState('');
    const [price, setPrice] =useState('');
    const [currencyKey, setCurrencyKey] = useState('');
    const [change, setChange] = useState({});

    useEffect(() => {
        if (!amount || !price || !currencyKey) {
            setChange({});
        } else {
            const change = calculateChange(Currencies[currencyKey], amount, price);
            setChange(change);
        }
    }, [amount, price, currencyKey])

    const onChange = handler => e => handler(e.target.value);

    return (
        <>
            <div className="container">
                <h2>Change Calculator</h2>
                    <div>
                        <label htmlFor="currency">Currency</label>
                        <select id="currency" name="currency" value={currencyKey} onChange={onChange(setCurrencyKey)}>
                            <option value="" key="default">Please Select</option>
                            {Object.keys(Currencies).map(currKey => (
                                <option key={currKey} value={currKey}>
                                    {Currencies[currKey].name}
                                </option>
                            )
                            )}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="presented">Amount Presented</label>
                        <input id="presented" name="presented" value={amount} onChange={onChange(setAmount)}></input>
                    </div>
                    <div>
                        <label htmlFor="price">Product Price</label>
                        <input id="price" name="price" value={price} onChange={onChange(setPrice)}></input>
                    </div>
                <div>
                    <label htmlFor="change">Your Change</label>
                    <span id="change">
                        {(change?.supported === false) && (
                            <div>
                                Sorry but this currency is not yet supported
                            </div>)}
                    
                         <ChangeHeader currencyKey={currencyKey} amount={amount} price={price} />
                         <ChangeDetails changeAmounts={change.changeAmounts} />
                         <ChangeFooter currencyKey={currencyKey} totalChange={change.totalChange}  />
                    </span>
                    
                </div>
            </div>

        </>
    )
}

export default Calculator;