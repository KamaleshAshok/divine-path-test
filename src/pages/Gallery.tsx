import React from 'react';
import Layout from '../components/layout/Layout';
import './Gallery.css';

const images = [
  '/assets/temple-construction.jpg',
  '/assets/pooja-items.jpg',
  '/assets/guru-swami.jpg',
  '/assets/guru-swamy-gadag.jpeg',
  '/assets/hero-temple.jpg',
  // Add more image paths as needed
];

const Gallery: React.FC = () => {
  return (
    <Layout>
      <div className="gallery-container">
        <h1 className="gallery-title">Gallery</h1>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div key={index} className="gallery-item">
              <img src={src} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;