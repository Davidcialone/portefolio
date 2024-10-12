import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/forms/homePage';
import {Project1} from './components/forms/project1';
import {Project2} from './components/forms/project2';
import {Project3} from './components/forms/project3';
import {ProjectsCarousel} from './components/forms/projectsCarousel';
import { HobbiesCarousel } from './components/forms/hobbiesCarousel';
import {Contact} from './components/forms/contact';
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
                    {/* <Route path="/projects" element={<ProjectsCarousel />} /> */}
                    <Route path="/portefolio/projects" element={<ProjectsCarousel />} />
                    {/* <Route path="/hobbies" element={<HobbiesCarousel />} /> */}
                    <Route path="/portefolio/hobbies" element={<HobbiesCarousel />} />
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    <Route path="/portefolio/contact" element={<Contact />} />
                    {/* Ajoutez d'autres routes ici si nécessaire */}
                </Routes>
            </div>
        </Router>
        </ChakraProvider>
    );
}

export default App;
