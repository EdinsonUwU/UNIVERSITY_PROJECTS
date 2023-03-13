import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [nickname, setNickname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        //props.onFormSwitch('page')
    }

    return (
        <div className="auth-form-container">
            <h2>register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="nickname">Nickname</label>
                <input value={nickname} onChange={(e) => setNickname(e.target.value)} name="nickname" id="nickname" placeholder="awesomeNickname" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@email.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" >REGISTER</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}