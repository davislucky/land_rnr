import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function SessionForm() {
    const dispatch = useDispatch();
    const currentUser = useSelector( (state) => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password })).catch(
          async (res) => {
            let data;
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text(); 
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          }
        );
    };

    const handleDemo = (e) => {
        e.preventDefault();
        setEmail("demo@user.io");
        setPassword("password");
        return dispatch(sessionActions.login({email: "demo@user.io", password: "password"}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => {
                    <li key={error}>{error}</li>
                })}
            </ul>
            <div className="entry-field">
                <input
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label className="email-label">Email</label>
            </div>
            <div className="entry-field">
                <input
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label className="password-label">Password</label>
            </div>
            <div className="line-separator" />
            <div>
                <button className="login-button" type="submit">Log in</button>
            </div>
            <div>
                <button className="demo-button" onClick={handleDemo}>Log in with demo user</button>
            </div>
        </form>
    )
}

export default SessionForm;