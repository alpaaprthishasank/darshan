import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem('token'); 

        // Create the axios configuration with the Authorization header
        const config = {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        };

        // Make the GET request to /api/profile with the token
        const response = await axios.get('/api/profile', config); 
        setUser(response.data);
      } catch (err) {
        console.error(err);
        // Handle errors (e.g., redirect to login)
      }
    };

    fetchUser();
  }, []); 

  // Rest of your Profile.js component
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
};

export default Profile;