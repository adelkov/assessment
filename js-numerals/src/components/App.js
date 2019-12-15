import React, {useState} from 'react';
import './App.css';
import convertNumeral from '../utils/converter'


function App() {

    const [numeral, setNumeral] = useState('');
    const [resultWord, setResultWord] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        setResultWord(convertNumeral(numeral));
        setNumeral('')
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <h3 className='h3-header'>Convert Numeral to Words</h3>
                <input
                    required
                    step="1"
                    max="999999999999999"
                    placeholder="Insert number"
                    onChange={(e) => setNumeral(e.target.value)}
                    value={numeral}
                    type="number"
                    className="numeralInput"
                />
                <button className='submitButton'>Convert!</button>
                <p className='result'>{resultWord}</p>
            </form>
        </div>
    );
}

export default App;
