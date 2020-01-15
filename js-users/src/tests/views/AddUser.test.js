import React from 'react';
import AddUsers from '../../views/AddUser';
import '@testing-library/jest-dom/extend-expect'
import {render, screen, cleanup, act, wait, fireEvent} from '@testing-library/react';
import * as API from '../../util/API';
import renderer from "react-test-renderer";

afterEach(cleanup);

it('matches snapshot', () => {
    renderer.create(<AddUsers />).toJSON();
});

test('Adding user with empty input', async () => {
    const mockAdd = jest.spyOn(API, 'addUser');
    render(<AddUsers/>);
    fireEvent.click(screen.getByText(/save/i))
    expect(mockAdd).toHaveBeenCalledWith({"first_name": "", "last_name": "", "status": "active"});
});

test('Adding user with partially empty input', async () => {
    const mockAdd = jest.spyOn(API, 'addUser');
    render(<AddUsers/>);
    fireEvent.change(screen.getByLabelText(/last name/i), {
        target: {value: 'potter'},
    });
    fireEvent.click(screen.getByText(/save/i));
    expect(mockAdd).toHaveBeenCalledWith({"first_name": "", "last_name": "potter", "status": "active"});
});

test('Adding user with normal input', async () => {
    const mockAdd = jest.spyOn(API, 'addUser');
    render(<AddUsers/>);
    fireEvent.change(screen.getByLabelText(/first name/i), {
        target: {value: 'harry'},
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
        target: {value: 'potter'},
    });
    fireEvent.click(screen.getByText(/save/i))
    expect(mockAdd).toHaveBeenCalledWith({"first_name": "harry", "last_name": "potter", "status": "active"});
});

test('Button display loading on saving', async () => {
    jest.spyOn(API, 'addUser');
    render(<AddUsers/>);
    fireEvent.click(screen.getByText(/save/i));
    expect(screen.getByText('loading')).toBeInTheDocument();
});










