import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/fonts/cereal/cereal.css'
import './index.css';
import Us from './pages/Us';
import Home from './pages/Home';
import FrontLayout from './components/FrontLayout';
import Product from './pages/Product';
import Commitment from './pages/Commitment';
import Work from './pages/Work';
import SingleProd from './pages/SingleProd';
import ProductLayout from './components/ProductLayout';
import Articles from './pages/Article';
import Certificate from './pages/Certificate';
import Certification from './pages/Certification';



function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<FrontLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/us' element={<Us/>}/>
        <Route path='/product' element={<ProductLayout/>}>
        <Route index element={<Product/>}/>
        <Route path=':id' element={<SingleProd/>}/>
        </Route>
        <Route path='/commitment' element={<Commitment/>}/>
        <Route path='/certif/:id' element={<Certificate/>}/>
        <Route path='/certif' element={<Certification/>}/>
        <Route path='/works' element={<Work/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
