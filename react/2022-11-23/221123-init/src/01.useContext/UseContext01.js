import React, {useState} from 'react';
import './common.css';

import Page from './components/Page';

const UseContext01 = () => {
    const [isDark, setIsDark] = useState(false);
    return(
        <Page isDark={isDark} setIsDark={setIsDark} />
    );
}

export default UseContext01;