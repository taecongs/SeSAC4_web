import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import MainRouter from './MainRouter';
import '../Practice/index.scss';

import Commons from './Commons';


const Main = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainRouter />}></Route>
                    <Route path='student/:id' element={<Commons />}></Route>
                </Routes>
            
            </BrowserRouter>

        </div>
    );
}

export default Main;