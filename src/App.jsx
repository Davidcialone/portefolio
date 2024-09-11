import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BrandExample from './components/forms/brand';
import { NavbarSite } from './components/forms/navbar';
import Presentation from './components/forms/presentation';
import Project1 from './components/forms/project1';
import Project2 from './components/forms/project2';
import Project3 from './components/forms/project3';
import { HobbiesCarousel } from './components/forms/hobbiesCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <BrandExample className="brand"/>
                <h1>DAVID CIALONE</h1>
                <NavbarSite/>
                <Routes>
                    <Route path="/" element={<Presentation />} />
                    <Route path="/portefolio" element={<Presentation />} />
                    <Route path="/project1" element={<Project1 />} />
                    <Route path="/project2" element={<Project2 />} />
                    <Route path="/project3" element={<Project3 />} />
                    <Route path="/hobbies" element={<HobbiesCarousel />} />
                    {/* Ajoutez d'autres routes ici si nécessaire */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
