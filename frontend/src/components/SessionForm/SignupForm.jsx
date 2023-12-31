import React from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { closeModal } from '../../store/modal';


function SignupForm() {
    const dispatch = useDispatch();
    // const currentUser = useSelector( (state) => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.signup({
             email, 
             password,
             firstName,
             lastName
            })).catch(
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
        dispatch(closeModal())
        return dispatch(sessionActions.login({email: "demo@user.io", password: "password"}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <ul>
                {errors.map(error => {
                    <li key={error}>{error}</li>
                })}
            </ul>
            <div className='entry-field'>
                <label className="first-name-label">First name</label>
                <input 
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div className='entry-field'>
                <label className="last-name-label">Last name</label>
                <input 
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div className="entry-field">
                <label className="email-label">Email</label>
                <input
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="entry-field">
                <label className="password-label">Password</label>
                <input
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="line-separator" />
            <div>
                <button className="login-button" type="submit">Sign up</button>
            </div>
            <div>
                <button className="demo-button" onClick={handleDemo}>Log in with demo user</button>
            </div>
        </form>
    )
}

export default SignupForm;