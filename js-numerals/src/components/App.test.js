import React from 'react';
import ReactDOM from 'react-dom';
import {act, findRenderedDOMComponentWithClass} from "react-dom/test-utils";

import App from './App';

let container;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe("App form component", () => {
    it('renders without crashing', () => {
        act(() => {
            const div = document.createElement('div');
            ReactDOM.render(<App/>, div);
            ReactDOM.unmountComponentAtNode(div);
        })
    });

    test("accepts user input w/o losing focus", async () => {
        await act(async () => {
            ReactDOM.render(<App/>, container);
        });

        const input = container.getElementsByClassName("numeralInput");
        expect(input.value).toBe(undefined);

        await act(async () => {
            input.value = 123
        });
        expect(input.value).toBe(123)
    });


    test("displays result and clears input on submission", async () => {
        await act(async () => {
            ReactDOM.render(<App/>, container);
        });

        const input = container.getElementsByClassName("numeralInput")[0];
        expect(input.value).toBe('');

        await act(async () => {
            input.value = 1;
        });

        const submitButton = container.getElementsByClassName('submitButton')[0];


        await act(async () => {
            submitButton.dispatchEvent(new MouseEvent("click"));
        });
        const result2 = container.getElementsByClassName('result')[0];

        expect(input.value).toBe('')
    });


});
