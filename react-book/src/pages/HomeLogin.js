import React, {useState} from 'react';
import {Redirect} from "react-router-dom";

const HomeLogin = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    let handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    let handleChangePass = (event) => {
        setPassword(event.target.value);
    }

    const setParam = () => {
        console.log(email,password)
        if(password == 'admin' && email == 'admin@gmail.com'){
           return window.location.href = '/admin'
        }
        else if(password == 'nhom4' && email == 'nhom4@gmail.com'){
            return window.location.href = '/customer'

        }else {
            alert('password or email no success')
        }
    }
    return (
        <div>
            <input type="email"
                   onChange={handleChangeEmail}
                   />
            <input type="password"
                   onChange={handleChangePass}
                   />
            <button onClick={setParam}>login</button>
        </div>
    );
};

export default HomeLogin;