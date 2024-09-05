import { useState } from 'react'; // You can remove this if you don't need state.
import BrandExample from './components/forms/brand';
import { ProjectCarousel } from './components/forms/carousel';
import { NavbarSite } from './components/forms/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
    return (
        <>
            <div>
            <BrandExample/>
                <h1>DAVID CIALONE</h1>
                <NavbarSite/>
                <ProjectCarousel />
            </div> 
        </>
    );
}

export default App;

