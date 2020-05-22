import calculateChange from './calculate-change';
import Currencies from '../constants/currencies';
import * as denoms from '../constants/denominations';
import denominations from '../constants/denominations';
import ChangeAmount from '../models/change-amount';

test ('calling with an unsupported currency returns message', () => {
    const result = calculateChange(Currencies.EUR, 200, 10);
    const expectedResult = {
        supported: false
    };
    expect(result).toEqual(expectedResult);
});

test('calling with GBP returns the correct result', () => {
    const result = calculateChange(Currencies.GBP, 200, 49.21);
    const expectedResult = {
        supported: true,
        totalChange: 150.79,
        changeAmounts: [
            new ChangeAmount(denoms.gbpFiftyPound, 3),
            new ChangeAmount(denoms.gbpFiftyPence, 1),
            new ChangeAmount(denoms.gbpTwentyPence, 1),
            new ChangeAmount(denoms.gbpFivePence, 1),
            new ChangeAmount(denoms.gbpTwoPence, 2)
        ]
    };
    expect(result).toEqual(expectedResult);
});