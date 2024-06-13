import React from 'react';
import './PhotoCollage.css'; // Import your CSS file for styling

const Home = ({ url }) => {
  return <img src={url} alt="collage" className="photo" />;
};

const PhotoCollage = () => {
  const photoUrls = ['./images/image1.png', 'images/image2.png', 'images/image3.png']; // Add your image URLs here

  return (
    <div className="photo-collage">
      {photoUrls.map((url, index) => (
        <Home key={index} url={url} />
      ))}
    </div>
  );
};

export default PhotoCollage;
