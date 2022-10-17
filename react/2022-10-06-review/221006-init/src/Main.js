import React, {BrowserRouter, Routes,  Route} from 'react-router-dom';
import MainRouter from './MainRouter';
import ViewPage from './ViewPage';

const Main = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainRouter />}></Route>

                    <Route path='student/:id' element={<ViewPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;