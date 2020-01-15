import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render, screen, cleanup, act, wait, fireEvent} from '@testing-library/react';
import renderer from "react-test-renderer";
import Navigation from '../../views/Navigation/Navigation';
import {BrowserRouter} from "react-router-dom";
import * as API from "../../util/API";
import {NotificationContext} from "../../Providers/Notification";

afterEach(cleanup);

it('matches snapshot', () => {
    renderer.create(<BrowserRouter><Navigation/> </BrowserRouter>).toJSON();
});

test('Shows notification', async () => {
    render(<BrowserRouter>
        <NotificationContext.Provider
            value={{
                message: "notify"
            }}
        >
            <Navigation/>
        </NotificationContext.Provider>
    </BrowserRouter>);

    expect(screen.getByText('notify')).toBeInTheDocument()
});


test('Does not show notification', async () => {
    render(<BrowserRouter>
        <NotificationContext.Provider
            value={{
                message: false
            }}
        >
            <Navigation/>
        </NotificationContext.Provider>
    </BrowserRouter>);

    expect(screen.queryByTestId('notify')).toBe(null);
});









