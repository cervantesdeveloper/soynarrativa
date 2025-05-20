import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

import './scss/app.scss';
import Layout from './Layouts/Layout';






function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route element={<Layout/>}>
                    <Route path='/about' element={<About />}/>
                    <Route path='/portfolio' element={<Portfolio />}/>
                    <Route path='/portfolio/:id' element={<ProjectDetail />}/>
                    <Route path='/services' element={<Services />}/>
                    <Route path='/contact' element={<Contact />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
  }

export default App
