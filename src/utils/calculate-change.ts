import denominations from '../constants/denominations';
import Currency from '../models/currency';
import ChangeAmount from '../models/change-amount';

const calculateChange = (currency: Currency, amount: Number, price: Number) => {
    const currencyDenoms = denominations[currency.name];
    if (!currencyDenoms) {
        return {
            supported: false
        };
    }
    const totalChange = Number(amount) - Number(price);
    const changeUnits = totalChange * 100;
    const initial: {balance: number, denoms: ChangeAmount[]} = {
        balance: changeUnits,
        denoms: [] 
    };

    const changeDenoms = currencyDenoms.reduce((interim, denom) => {
        if (denom.value < interim.balance) {
            const amountsOfDenom = Math.floor(interim.balance / denom.value);
            interim.denoms.push(new ChangeAmount(denom, amountsOfDenom));
            interim.balance = interim.balance - amountsOfDenom * denom.value;
        }
        return interim;
    }, initial);


    return {
        supported: true,
        totalChange,
        change: changeDenoms.denoms
    }
};

export default calculateChange