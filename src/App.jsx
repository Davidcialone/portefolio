import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/forms/homePage';
import Project1 from './components/forms/project1';
import Project2 from './components/forms/project2';
import Project3 from './components/forms/project3';
import ProjectsCarousel from './components/forms/projectsCarousel';
import { HobbiesCarousel } from './components/forms/hobbiesCarousel';
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';

function App() {
    return (
        <ChakraProvider> 
            <Router>
            <div>
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/portefolio" element={<HomePage />} />
                    <Route path="/project1" element={<Project1 />} />
                    <Route path="/project2" element={<Project2 />} />
                    <Route path="/project3" element={<Project3 />} />
                    <Route path="/projects-carousel" element={<ProjectsCarousel />} />
                    <Route path="/hobbies" element={<HobbiesCarousel />} />
                    {/* Ajoutez d'autres routes ici si nécessaire */}
                </Routes>
            </div>
        </Router>
        </ChakraProvider>
    );
}

export default App;
