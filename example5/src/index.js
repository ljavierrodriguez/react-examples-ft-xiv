import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        console.log('listado de usuarios cargado...');
    }, [users])


    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }

    return (
        <>

            <table border="2" width="50%" align="center">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length == 0 ? (
                            <tr>
                                <td colSpan="3">Loading...</td>
                            </tr>
                        ): 
                        users.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));