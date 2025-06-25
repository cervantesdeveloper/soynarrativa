import { BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import ServiceBranding from './pages/ServiceBranding';
import ServiceMedia from './pages/ServiceMedia';
import ServiceNaming from './pages/ServiceNaming';
import ServicePackaging from './pages/ServicePackaging';
import ServicePhoto from './pages/ServicePhoto';
import ServiceStationery from './pages/ServiceStationery';
import Error from './pages/Error';

import './scss/app.scss';
import Layout from './Layouts/Layout';
import LayoutServices from './Layouts/LayoutServices';






function App() {


    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                
                <Route element={<Layout/>}>
                    <Route path='about' element={<About />}/>
                    <Route path='portfolio' element={<Portfolio />}/>
                    <Route path='portfolio/:id' element={<ProjectDetail />}/>

                    <Route path='services' element={<LayoutServices />}>
                        <Route 
                            path='branding' 
                            element={<ServiceBranding/>} 
                        />

                        <Route 
                            path='media' 
                            element={<ServiceMedia/>} 
                        />

                        <Route 
                            path='packaging' 
                            element={<ServicePackaging/>} 
                        />

                        <Route 
                            path='stationery' 
                            element={<ServiceStationery/>} 
                        />

                        <Route 
                            path='photo' 
                            element={<ServicePhoto/>} 
                        />

                        <Route 
                            path='naming' 
                            element={<ServiceNaming/>} 
                        />
                    </Route>

                    <Route path='/contact' element={<Contact />}/>
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </HashRouter>
    )
  }

export default App
