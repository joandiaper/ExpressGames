import React, { useState, useEffect } from 'react';
import '../css/PPTLSResults.css';

function PPTLSResults() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/resultsPPTLS');
            const data = await response.json();
            setResults(data);
        };

        fetchData();
    }, []);

    return (
        <div>
        {/* <h2>Results:</h2> */}
        <table className='results-table mx-auto'>
            <thead>
                <tr>
                    <th className='p-1'>Date</th>
                    <th>Time</th>
                    <th>Name</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                    <tr key={index}>
                        <td className='p-1'>{result.date}</td>
                        <td>{result.time}</td>
                        <td>{result.name}</td>
                        <td>{result.result}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default PPTLSResults;
