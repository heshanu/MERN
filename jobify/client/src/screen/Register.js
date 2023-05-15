import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const show=()=>{
        console.log(name);
    }

    return (
        <>
            <h1 onClick={show()}>Register!</h1>
            <TextField id="filled-basic" value={name} label="name" variant="filled" /><br/>
            <TextField id="filled-basic" value={email} label="email" variant="filled" /><br/>
            <TextField id="filled-basic" value={password} label="password" variant="filled" /><br/>
        </>
    );
};
export default Register;