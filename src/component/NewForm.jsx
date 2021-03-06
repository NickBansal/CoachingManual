import React from 'react';
import './Form.css'

const NewForm = () => {
    return (
        <div>
            <form className="formStyle">
                <fieldset className="formItems">
                    <p className="titleStyle"><i className="icons fas fa-key"></i>Login to the Coaching Manual</p>

                    <label className="labelStyle">Email address:</label>
                    <input className="inputStyle" type="email" placeholder="Please enter your email..." id="email" required />

                    <label className="labelStyle">Password:</label>
                    <input className="inputStyle" type="password" placeholder="Password" id="password" required />

                    <button className="buttonStyle" type="submit">Submit</button>
                    <div className="bottomWording">
                        <p className="newColor Hovering">Forgot Password?</p>
                        <p>No account? <span className="newColor Hovering">Please sign up</span></p>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default NewForm;