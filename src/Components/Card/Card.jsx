import React from 'react';
import './Card.css';

function Card() {
  const services = [
    { id: 1, title: 'Product Design', icon: '🖋️' },
    { id: 2, title: 'UX/UI Design', icon: 'UX/UI' },
    { id: 3, title: 'Icon Design', icon: '☰' },
    { id: 4, title: 'Logo Design', icon: '⧉' },
    { id: 5, title: 'Backend', icon: '</>' },
    { id: 6, title: 'Frontend', icon: '🖥️' },
    { id: 7, title: 'Motion', icon: '❏' },
  ];

  return (
    <section className="card-section">
      <div className="card-container">

        <div className="services-grid">
          {services.map((item) => (
            <div key={item.id} className="service-card">
              <div className="card-icon">{item.icon}</div>
              <p className="card-title">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="about-wrapper">
          <div className="circle-bg circle-white"></div>
          <div className="circle-bg circle-yellow"></div>
          <div className="circle-bg circle-cyan"></div>

          <div className="about-img img-top-left">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Avatar 1" />
          </div>

          <div className="about-img img-bottom-left">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" alt="Avatar 2" />
          </div>

          <div className="about-img img-right">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" alt="Avatar 3" />
          </div>

          <div className="about-content">
            <h2>ABOUT ME</h2>
            <p>
              Hello again everyone! So, you already know that my name is Gleb. A little about myself: student, 18 y.o., athlete-football player, I love creativity since childhood. I live in Donetsk, Ukraine.
            </p>
            <p>
              Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel. At the moment I specialize in web design, front-end and back-end development, turnkey websites.
            </p>
            <p>
              Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself. By trusting me, you will get the maximum return for your project.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Card;