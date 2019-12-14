import React, {useState} from 'react';
import './App.css';
import convertNumeral from '../utils/converter'


function App() {

    const [numeral, setNumeral] = useState(0);
    const [resultWord, setResultWord] = useState();

    const onSubmit = e => {
        e.preventDefault();
        setResultWord(convertNumeral(numeral));
        setNumeral(0)
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <h3>Convert Numeral to Words</h3>
                <input
                    placeholder="Insert number"
                    onChange={(e) => setNumeral(e.target.value)}
                    value={numeral}
                    type="number"
                    className="numeralInput"
                />
                <button className={'submitButton'}>Convert!</button>
                <p className='result'>{resultWord}</p>
            </form>
        </div>
    );
}

export default App;
