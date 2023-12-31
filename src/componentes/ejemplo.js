import React, { useState, useEffect} from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/api/data')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

    return(
        <div>
            <h1>API DATA</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
} 

export default App;