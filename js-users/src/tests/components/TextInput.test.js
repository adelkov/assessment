import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../../components/TextInput';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    let value = 'test';
    ReactDOM.render(<TextInput name={'Test'} error={null} onChange={() => {
    }} value={value}/>, div);
});


it('matches snapshot', () => {
    renderer.create(<TextInput name={'Test'} error={null} onChange={() => {
    }} value={'value'}/>).toJSON();
});