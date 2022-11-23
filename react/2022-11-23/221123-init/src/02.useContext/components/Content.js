import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UseContext';

const Content = () => {
    const {isDark} = useContext(ThemeContext);

    const user = useContext(UserContext);

    return(
        <div className='content' style={{
            backgroundColor : isDark ? 'black' : 'white',
            color : isDark ? 'white' : 'black',
        }}>

            <p>방문해주신 {user}님들께 감사드립니다.</p>
        </div>
    );
}

export default Content;