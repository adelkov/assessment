import React from 'react';
import EditUsers from '../../views/EditUser';
import '@testing-library/jest-dom/extend-expect'
import {render, screen, cleanup, act, wait, fireEvent} from '@testing-library/react';
import * as API from '../../util/API';
import renderer from "react-test-renderer";
import {MemoryRouter} from 'react-router-dom'

afterEach(cleanup);

beforeEach(() => {
    console.error = jest.fn()
});

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: jest.fn(),
    }),
    useParams: () => ({
        userId: 1
    })
}));

it('matches snapshot', () => {
    renderer.create(<EditUsers/>).toJSON();
});

test('Triggers fetch user for editing', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUser');
    render(<EditUsers/>);
    expect(mockFetch).toHaveBeenCalledWith(1);
});

test('Loading status when fetching user', async () => {
    jest.spyOn(API, 'fetchUser');
    render(<EditUsers/>);
    await wait(() => expect(screen.getByText('loading')).toBeInTheDocument())
});

test('Display edit user title', async () => {
    jest.spyOn(API, 'fetchUser');
    await render(<EditUsers/>, {wrapper: MemoryRouter});
    await wait(() => expect(screen.getByText(/edit user/i)).toBeInTheDocument())
});

test('Display loaded user in input fields', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUser');
    const user = {first_name: 'harry', last_name: "potter"};
    mockFetch.mockImplementation(() => Promise.resolve({data: user}));
    await render(<EditUsers/>, {wrapper: MemoryRouter});
    await wait(() => screen.getByTestId('last_name'));
    const lastName = screen.getByTestId('last_name');
    const firstName = screen.getByTestId('first_name');
    expect(lastName.value).toBe('potter');
    expect(firstName.value).toBe('harry');
});

test('Edit user with partially empty input', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUser');
    const mockAdd = jest.spyOn(API, 'updateUser');
    const user = {first_name: 'harry', last_name: "potter"};
    mockFetch.mockImplementation(() => Promise.resolve({data: user}));
    render(<EditUsers/>);
    await wait(() => screen.getByText(/save/i));
    fireEvent.change(screen.getByLabelText(/last name/i), {
        target: {value: 'potter'},
    });
    fireEvent.change(screen.getByLabelText(/first name/i), {
        target: {value: ''},
    });

    fireEvent.click(screen.getByText(/save/i));
    expect(mockAdd).toHaveBeenCalled()
    expect(mockAdd).toHaveBeenCalledWith({"id": 1, "first_name": "", "last_name": "potter"});
});

test('Edit user with normal input', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUser');
    const mockAdd = jest.spyOn(API, 'updateUser');
    const user = {first_name: 'harry', last_name: "potter"};
    mockFetch.mockImplementation(() => Promise.resolve({data: user}));
    render(<EditUsers/>);
    await wait(() => screen.getByText(/save/i));
    fireEvent.change(screen.getByLabelText(/last name/i), {
        target: {value: 'potter'},
    });
    fireEvent.change(screen.getByLabelText(/first name/i), {
        target: {value: 'harry'},
    });

    fireEvent.click(screen.getByText(/save/i));
    expect(mockAdd).toHaveBeenCalled()
    expect(mockAdd).toHaveBeenCalledWith({"id": 1, "first_name": "harry", "last_name": "potter"});
});


test('Button display loading on saving', async () => {
    const mockFetch = jest.spyOn(API, 'fetchUser');
    const mockAdd = jest.spyOn(API, 'updateUser');
    const user = {first_name: 'harry', last_name: "potter"};
    mockFetch.mockImplementation(() => Promise.resolve({data: user}));
    render(<EditUsers/>);
    await wait(() => screen.getByText(/save/i));
    fireEvent.click(screen.getByText(/save/i));
    expect(mockAdd).toHaveBeenCalled()
    expect(mockAdd).toHaveBeenCalledWith({"id": 1, "first_name": "", "last_name": "potter"});
});










