import React from 'react';

const InputField = () => {

    const handleClick = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const passeord = form.password.value;
        form.reset();
        const info = { email, passeord }
        console.log(info);
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <input type="email" name='email' placeholder='Email' /> <br />
                <input type="password" name="password" id="" placeholder='passeord' /> <br />
                <button>Click here</button>
            </form>
        </div>
    );
};

export default InputField;