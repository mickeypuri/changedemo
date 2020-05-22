import Currency from '../models/currency';

const GBP = new Currency('GBP', 1, '£');
const EUR = new Currency('EUR', 0.87, '€');
const USD = new Currency('USD', 0.7, '$');

export default { GBP, EUR, USD };

