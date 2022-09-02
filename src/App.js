import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const App = () => (
    <div className="Container">
        <BrowserRouter>
            <Routes>
                <Route index element={<Products />} />
                <Route path=":id" element={<ProductDetails />} />
            </Routes>
        </BrowserRouter>
    </div>
)

export default App;
