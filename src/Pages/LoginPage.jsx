import React from 'react';
import Menu from '../component/Menu';
import { useParams } from 'react-router-dom';

const LoginPage = () => {
    let {name, password} = useParams();
    return (
        <div>
            <Menu/>
            <h1>Login Successfull</h1>
            <h1>name : {name}</h1>
            <h1>Password : {password}</h1>
        </div>
    );
};

export default LoginPage;