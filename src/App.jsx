import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import Layout from './Layouts/Layout';





function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route element={<Layout/>}>
                    <Route path='/about'/>
                    <Route path='/portfolio'/>
                    <Route path='/services'/>
                    <Route path='/contact'/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
  }

export default App
