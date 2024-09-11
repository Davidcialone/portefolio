import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // styles de base du carousel
import "../../App.css"
import { Carousel } from 'react-responsive-carousel';

export class HobbiesCarousel extends Component {
    render() {
        return (
            <div className="hobbies-carousel">
                <h2>Mes Passions</h2>
                <Carousel showThumbs={true} infiniteLoop={true} useKeyboardArrows={true} autoPlay>
                    <div>
                        <img src="https://fr.web.img4.acsta.net/pictures/24/01/26/10/18/5392835.jpg" alt="Slide 1" className="carousel-image" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://www.fredzone.org/wp-content/uploads/2021/10/dune_scenario_dos.jpg" alt="Slide 2" className="carousel-image" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://www.globaltimes.cn/Portals/0/attachment/2021/2021-10-19/70f03309-e25a-4393-8ea5-1acbd11d1282.jpeg" alt="Slide 3" className="carousel-image" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}
