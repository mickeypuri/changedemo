import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AppRoute from './app-route';

test ('app renders and displays the intro page', () => {
    const history = createMemoryHistory({ initialEntries: ['/']});
    const { getByRole } = render(
        <Router history={history}>
            <AppRoute/>
        </Router>
    );
    expect(getByRole('heading')).toHaveTextContent(/tunstall test/i);
});

test ('app can navigate to the calculator page', () => {
    const history = createMemoryHistory({ initialEntries: ['/']});
    const { getByRole, getByText } = render(
        <Router history={history}>
            <AppRoute/>
        </Router>
    );
    fireEvent.click(getByText('Calculator'));
    expect(getByRole('heading')).toHaveTextContent(/change calculator/i);
});