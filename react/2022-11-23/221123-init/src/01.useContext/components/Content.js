import React from 'react';

const Content = ({isDark}) => {
    return(
        <div className='content' style={{
            backgroundColor : isDark ? 'black' : 'white',
            color : isDark ? 'white' : 'black',
        }}>

            <p>방문해주신 고객님들께 감사드립니다.</p>
        </div>
    );
}

export default Content;