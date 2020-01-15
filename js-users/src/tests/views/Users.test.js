import React from 'react';
import Users from '../../views/Users';
import '@testing-library/jest-dom/extend-expect'
import {render, screen, cleanup, act, wait} from '@testing-library/react';
import {users} from "../sample/users";
import * as API from '../../util/API';
import { MemoryRouter } from 'react-router-dom'


afterEach(cleanup);

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        page: 1
    }),
    useRouteMatch: () => ({ url: 'localhost:3000/users/1' }),
}));

test('Initiate fetching', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUsers');
    render(<Users/>);
    expect(mockFetch).toHaveBeenCalledWith();
    expect(screen.getByTestId("loader")).toBeInTheDocument()
});

test('Display loader', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUsers');
    render(<Users/>);
    expect(mockFetch).toHaveBeenCalledWith();
    expect(screen.getByTestId("loader")).toBeInTheDocument()
});

test('Display fetched users', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUsers');
    mockFetch.mockImplementation(() => Promise.resolve({data: users}));
    render(<Users/>, {wrapper: MemoryRouter});
    await wait(() => expect(screen.getByText("Users")).toBeInTheDocument());
    expect(screen.getByTestId('1')).toBeInTheDocument();
    expect(screen.getByTestId('192')).toBeInTheDocument();
});

test('Display error with error message', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUsers');
    mockFetch.mockImplementation(() => Promise.reject( 'Something went wrong :/'));
    render(<Users/>);
    await wait(() => expect(screen.getByTestId(/error/i)).toBeInTheDocument());
    await wait(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument());
});









