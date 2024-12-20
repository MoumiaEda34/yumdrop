import React from 'react';
import { Link } from 'react-router-dom';
import data from '../Data.json'; // Importing the JSON file
import './FoodList.css'; // Importing the CSS file

const FoodList = () => {
  const bannerImage = './assets/images/banner.jpg'; // Path to the banner image

  return (
    <div className='food-details' style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className='overlay'>
        <span className='highlight'>
        <h1>YumDrop Cuisines</h1>
        <p>Your favorite cuisines, just a click away.</p>
        </span>
        <ul>
          {data.food.map(cuisine => (
            <li key={cuisine.id}>
              <Link to={`/cuisine/${cuisine.id}`}>{cuisine.cuisine}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FoodList;
