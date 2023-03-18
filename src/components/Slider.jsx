import { useState } from "react";


export const Slider = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                { images.map((image, index) => (
                <div className="slider-slide" key={index}>
                    <img src={image.url} alt={`Slide ${image.id}`} />
                </div>
                ))}
            </div>
            <button className="slider-prev" onClick={goToPrevSlide}>
                &#10094;
            </button>
            <button className="slider-next" onClick={goToNextSlide}>
                &#10095;
            </button>
        </div>
    );
};
