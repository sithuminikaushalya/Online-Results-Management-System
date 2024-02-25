import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ActionLogTable() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        // Fetch the action logs from your server
        axios.get('http://localhost:3001/actionLogs')
            .then(result => setLogs(result.data))
            .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <h1>Action Logs</h1>
            <table>
                <thead>
                    <tr>
                        <th>Action</th>
                        <th>User</th>
                        <th>Data</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => (
                        <tr key={index}>
                            <td>{log.action}</td>
                            <td>{log.user}</td>
                            <td>{JSON.stringify(log.data)}</td>
                            <td>{log.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
