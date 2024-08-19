import React, { useState } from 'react';
import './App.css';

function reverseWords(sentence) {
    const words = sentence.match(/[a-zA-Z]+|[.,\s]/g);

    const reversedWords = words.map(word => {
        if (/^[a-zA-Z]+$/.test(word)) {
            return word.split('').reverse().join('');
        }
        return word;
    });

    return reversedWords.join('');
}

function App() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleReverseWords = () => {
        const reversed = reverseWords(input);
        setOutput(reversed);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Reverse Words App</h1>
                <textarea 
                    value={input} 
                    onChange={handleInputChange} 
                    placeholder="Enter your sentence here..."
                    rows="5"
                    cols="50"
                />
                <br />
                <button onClick={handleReverseWords}>Reverse Words</button>
                <br />
                <h2>Output:</h2>
                <p>{output}</p>
            </header>
        </div>
    );
}

export default App;