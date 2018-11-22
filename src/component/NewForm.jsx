import React from 'react';

const NewForm = () => {
    const formStyle = {
        display: 'flex',
        justifyContent: 'center'
    }

    const formItems = {
        display: 'flex',
        width: '550px',
        height: '350px',
        padding: '0'
    }

    const buttonStyle = {
        padding: '19px 39px 18px 39px',
        color: '#FFF',
        background: '#4bc970',
        fontSize: '18px',
        textAlign: 'center',
        fontStyle: 'normal',
        borderRadius: '5px',
        width: '70%',
        border: '1px solid #3ac162',
        borderWidth: '1px 1px 3px',
        boxShadow: '0 -1px 0 rgba(255, 255, 255, 0.1)',
        margin: 'auto'
    }

    const inputStyle = {
        margin: 'auto',
        width: '80%'
    }

    const titleStyle = {
        background: '#4bc970',
        margin: '0',
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div>
            <h1>Form</h1>
            <form style={formStyle}>
                <fieldset style={formItems}>
                    <p style={titleStyle}>Login to the Coaching Manual</p>

                    <label for="email">Email address</label>
                    <input style={inputStyle} type="email" placeholder="Please enter your email..." id="email" required />

                    <label for="email">Password</label>
                    <input style={inputStyle} type="password" placeholder="Password" id="email" required />

                    <button style={buttonStyle} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default NewForm;