import React from 'react';
import {Route, Router,  useNavigate} from "react-router-dom";

const Test = () => {
    return (
        <div>

        </div>
    );
};

function Admin(){
return <div>Admin</div>
}

function Login(){
    let history = useNavigate();

    let login = () => {
        localStorage.setItem("accsesToken",true)
        history("/login")
    }
return <div>
    <h1>login</h1>
    <button onClick={(login)}>
        login
    </button>
</div>
}
export default Test;