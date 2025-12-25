"use client"
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
const RobinsonCarousel = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
    });
    const images = [
        '/JeremiahJohnson/JeremiahJohnsonRivercomOfficerThumb.jpeg',
        '/Tow/towScandalLIES.jpg',
        '/JeremiahJohnson/ChelanSheriffsIncident_jeremiahJohnsonRoles.jpg',
    ];
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {images.map((image, index) => (
                    <div key={index} className="embla__slide">
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="embla__slide__img"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default RobinsonCarousel;