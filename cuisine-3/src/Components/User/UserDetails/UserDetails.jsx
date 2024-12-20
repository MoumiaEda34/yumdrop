import React from 'react';
import { useParams } from 'react-router-dom';
import UserData from '../Data.json'; // Adjust the path if necessary

const UserDetails = () => {
  let { uid } = useParams();
  let singleUser = UserData.food.items.find(user => user.id == uid)
  console.log("Single user",singleUser);

  return (
    <div>
   User Details
   
    </div>
  );
};

export default UserDetails;
