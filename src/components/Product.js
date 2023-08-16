import React, { useState , useEffect } from 'react';
import prevIcon from "../assets/left-chevron.png"
import nextIcon from "../assets/right-chevron.png"

const Product = () => {
    const [slideIndex, setSlideIndex] = useState(0); // Starting from 0
  const slides = [
    {
      imageUrl: 'https://image.ibb.co/kpmt3k/background_1.jpg',
      caption: 'Caption 1',
    },
    // {
    //   imageUrl: 'https://image.ibb.co/mGxNw5/background_2.jpg',
    //   caption: 'Caption 2',
    // },
    // {
    //   imageUrl: 'https://image.ibb.co/gd5gpQ/background_3.jpg',
    //   caption: 'Caption 3',
    // },
    // {
    //   imageUrl: 'https://image.ibb.co/jOgXw5/background_4.jpg',
    //   caption: 'Caption 4',
    // },
  ];

  function showNextSlide() {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }

  function showPrevSlide() {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  }

  function currentSlide(index) {
    setSlideIndex(index);
  }

    useEffect(() => {
    // Automatically switch to the next slide every 5 seconds
    const interval = setInterval(() => {
      showNextSlide();
    }, 5000);

    // Clear the interval when the component unmounts or slideIndex changes
    return () => clearInterval(interval);
  }, [slideIndex]);


  return (
    <div className='product-images'>
        <div className="slider-container">
        {/* Current slide */}
        <div className="slides fade active">
            <div className="slider-image">
                <img src={slides[slideIndex].imageUrl} alt={`background_${slideIndex + 1}`} className='slide'/>
            </div>
        </div>
        
        {/* Previous and Next buttons */}
        <div className='buttons'>
            <a className="prev" onClick={showPrevSlide}>
                <img src={ prevIcon } alt='icon' className='prev-icon' />
            </a>
            <a className="next" onClick={showNextSlide}>
                <img src={ nextIcon } alt='icon' className='next-icon' />
            </a>
        </div>
        
        {/* Slide bullets */}
        <div className="slider-bullets" id="slider-bullets">
            {/* Each dot corresponds to a slide */}
            {slides.map((_, index) => (
                <span
                key={index}
                className={`dots ${index === slideIndex ? 'active' : ''}`}
                onClick={() => currentSlide(index)}
                ></span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Product