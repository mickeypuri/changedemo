import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './calculator';

/**
 * getByLabelText and getByText will throw an error if not found
 */
test('ensure form has the required input elements', () => {
    const { getByLabelText } = render (<Calculator />);
    getByLabelText(/currency/i);
    getByLabelText(/presented/i);
    getByLabelText(/price/i);
    getByLabelText(/change/i);
});

