import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from '../../components/UserForm';
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, screen, cleanup} from '@testing-library/react';

afterEach(cleanup);

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserForm save={() => {
    }} error={null} user={null} loading={false} title={'test'}/>, div);
});

test('save method is called upon button click', () => {
    const save = jest.fn();
    render(<UserForm user={null} title={'test title'} loading={false} error={null} save={save}/>);
    expect(screen.getByTestId('first_name')).toBeInTheDocument();
    expect(screen.getByTestId('last_name')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/save/i));
    expect(save).toHaveBeenCalled();
});

test('error message is shown', () => {
    const save = jest.fn();
    const mockError = {
        'last_name': "error in last name"
    };
    render(<UserForm user={null} title={'test title'} loading={false} error={mockError} save={save}/>);
    expect(screen.getByText('error in last name')).toBeInTheDocument();
});

test('button in loading state when saving', () => {
    const save = jest.fn();
    render(<UserForm user={null} title={'test title'} loading={true} error={null} save={save}/>);
    expect(screen.getByText('loading')).toBeInTheDocument();
});

