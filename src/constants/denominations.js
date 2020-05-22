import currencies from './currencies';
import Denomination from '../models/denomination';

// British Denominations only declared here
export const gbpOnePence = new Denomination(currencies.GBP, 1, '1p');
export const gbpTwoPence = new Denomination(currencies.GBP, 2, '2p');
export const gbpFivePence = new Denomination(currencies.GBP, 5, '5p');
export const gbpTenPence = new Denomination(currencies.GBP, 10, '10p');
export const gbpTwentyPence = new Denomination(currencies.GBP, 20, '20p');
export const gbpFiftyPence = new Denomination(currencies.GBP, 50, '50p');
export const gbpOnePound = new Denomination(currencies.GBP, 100, '£1');
export const gbpTwoPound = new Denomination(currencies.GBP, 200, '£2');
export const gbpFivePound = new Denomination(currencies.GBP, 500, '£5');
export const gbpTenPound = new Denomination(currencies.GBP, 1000, '£10');
export const gbpTwentyPound = new Denomination(currencies.GBP, 2000, '£20');
export const gbpFiftyPound = new Denomination(currencies.GBP, 5000, '£50');

/**
 * Could have defined elements in the array directly, but felt its more readable this way
 * TODO: need to put in a test, that ensures that all the elements in this array are in
 * decreasing value order, and that all of them have got a GBP currency!
 */
const gbpDenominations = [
    gbpFiftyPound,
    gbpTwentyPound,
    gbpTenPound,
    gbpFivePound,
    gbpTwoPound,
    gbpOnePound,
    gbpFiftyPence,
    gbpTwentyPence,
    gbpTenPence,
    gbpFivePence,
    gbpTwoPence,
    gbpOnePence,
];

export default {
    [currencies.GBP.name]: gbpDenominations
};

