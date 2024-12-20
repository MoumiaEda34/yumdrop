import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../Data.json'; // Importing the JSON file

const FoodDetail = () => {
  const { id } = useParams();
  const cuisine = data.food.find(c => c.id === parseInt(id));

  return (
    <div className='cuisine-details'>
      <h1>{cuisine.cuisine} Cuisine</h1>
      
      <ul>
        {cuisine.items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} width="270" />
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
            <button>
              <Link to={`/cuisine/${cuisine.id}/item/${item.id}`}>
                View Details
              </Link>
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default FoodDetail;
