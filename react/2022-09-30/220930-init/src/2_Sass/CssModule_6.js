import React from 'react';
import style from '../2_Sass/CssModule_6.module.css';


const CssModule_6 = () => {
    return(
        <div className={`${style.box1} ${style.center}`}>
            <h1>CSS Module</h1>
        </div>
    );


    // 두번째 방법은? classnames 라이브러리 설치
    // 1. npm i classnames 설치
    // 2. import Names from 'classnames'; 불러온다.
    // <div className={Names(style.box1, style.center)} /> </div>
}

export default CssModule_6;