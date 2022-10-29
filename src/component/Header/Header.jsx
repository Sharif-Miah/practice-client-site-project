import React, { useEffect, useState } from 'react';
import InputField from '../InputField/InputField';

const Header = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleClick = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        form.reset();
        const user = { email, name }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const currUser = [...users, data]
                setUser(currUser)
            })
            .catch(error => console.error(error))
        console.log(user);
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="text" name="name" id="" placeholder='name' /> <br />
                <input type="email" name='email' placeholder='Email' /> <br />
                <button>Click here</button>
            </form>
            <h1>User length {users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Header;