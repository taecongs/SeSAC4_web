import React, { useContext } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import { ThemeContext } from '../context/ThemeContext';

const Page = () => {

    return(
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Page;