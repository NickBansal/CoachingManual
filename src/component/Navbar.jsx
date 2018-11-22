import React from 'react';

const Navbar = () => {
    const style = {
        margin: '0',
        background: 'black',
        height: '65px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '30px',
        fontSize: '22px',
    }
    const icons = {
        marginRight: '10px'
    }
    return (
        <div>
            <h1 style={style}>
            <i style={icons} className="fas fa-2x fa-futbol"></i>{'<Logo />'}</h1>
        </div>
    )
}

export default Navbar;