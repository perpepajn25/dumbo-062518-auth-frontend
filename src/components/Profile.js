import React from 'react'
import { Redirect, Link } from 'react-router-dom'

const Profile = props => {
  return (
    <div className='container'>
      Here is your super interesting profile
      <Link to='/my_secret'> Show my secret </Link>
    </div>
  );
};

export default Profile
