import React from 'react';


function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h2>{user.name}'s Profile</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Crops: {user.crops}</p>
    </div>
  );
}

export default UserProfile;
