import React, { useState } from 'react';
import axios from 'axios';

const OpenAIComponent = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const apiKey = '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'; // Replace with your actual API key

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/engines/davinci/completions',
                {
                    prompt: inputText,
                    max_tokens: 100,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`,
                    },
                }
            );

            setOutputText(response.data.choices[0].text);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text for AI completion"
            />
            <button onClick={handleSubmit}>Submit</button>
            {outputText && (
                <div>
                    <h3>AI Response:</h3>
                    <p>{outputText}</p>
                </div>
            )}
        </div>
    );
};

export default OpenAIComponent;
