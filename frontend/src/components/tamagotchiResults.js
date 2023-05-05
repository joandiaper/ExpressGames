import React, { useState, useEffect } from 'react';
import '../css/TamagotchiResults.css';

function TamagotchiResults() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/resultsTamagotchi');
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
                    <th className='p-1'>Name</th>
                    <th>Hunger</th>
                    <th>Happiness</th>
                    <th>Health</th>
                    <th>Years</th>
                    <th>Months</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, index) => (
                    <tr key={index}>
                        <td className='p-1'>{result.name}</td>
                        <td>{result.hunger}</td>
                        <td>{result.happiness}</td>
                        <td>{result.health}</td>
                        <td>{result.years}</td>
                        <td>{result.months}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default TamagotchiResults;
