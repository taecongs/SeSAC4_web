import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UseContext';

const Header = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);

    console.log(isDark);

    console.log(user);

    return(
        <header className='header' style={{
            backgroundColor : isDark ? 'black' : 'lightgray',
            color : isDark ? 'white' : 'black',
        }}>
            <h1>Welcome My Homepage! to.. {user}</h1>
        </header>
    );
}

export default Header;