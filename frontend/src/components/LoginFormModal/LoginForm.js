import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        
        return dispatch(sessionActions.login({ email, password}))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    };

    const handleDemo = (e) => {
        e.preventDefault();
        setEmail('demo@user.io');
        setPassword('password');
        return dispatch(sessionActions.login({email: 'demo@user.io', password: 'password'}));
    }

    return (
        <>
            <h1></h1>
            <form onSubmit={handleSubmit}>

            </form>
        </>
    )
}
