import React, { useState } from 'react';
import './Main.css';

function Main() {
  const projects = [
    {
      id: 1,
      title: 'Landing Ice-cream',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      link: '#'
    },
    {
      id: 2,
      title: 'Universe Web App',
      description: 'Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel. Etiam euismod egestas mauris nec mollis.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      link: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <main className="main-section">
      <div className="main-container">
        
        <h2 className="main-title">PORTFOLIO</h2>

        <div className="slider-wrapper">
          
          <button className="slider-btn btn-left" onClick={prevSlide} aria-label="Previous">
            &#8592;
          </button>

          <div className="portfolio-card">
            <div className="card-image-box">
              <img src={currentProject.img} alt={currentProject.title} />
            </div>

            <div className="card-info-box">
              <h3 className="project-title">{currentProject.title}</h3>
              <p className="project-desc">{currentProject.description}</p>
              <a href={currentProject.link} className="more-link">
                More &rarr;
              </a>
            </div>
          </div>

          <button className="slider-btn btn-right" onClick={nextSlide} aria-label="Next">
            &#8594;
          </button>

        </div>

      </div>
    </main>
  );
}

export default Main;