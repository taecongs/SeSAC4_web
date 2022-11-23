import React, { useState } from 'react';
import './common.css';

import Page from './components/Page';

import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UseContext';

const UseContext01 = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <UserContext.Provider value={'사용자'}>
            {/* value : 전달하고자 하는 데이터 */}
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                {/* ThemeContext.Provider로 감싸고 있는 모든 하위 컴포넌트가 value에 접근 할 수 있다. */}
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export default UseContext01;