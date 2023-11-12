
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import LoginPage from './Pages/LoginPage';
import ProductPage from './Pages/ProductPage';

const App = () => {




    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                    <Route path='login' element={<LoginPage/>}/>
                    <Route path='product' element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;