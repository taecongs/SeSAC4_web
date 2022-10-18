import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';

import Main from '../Pages/Main';
import Search from '../Pages/Search';
import About from '../Pages/About';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;