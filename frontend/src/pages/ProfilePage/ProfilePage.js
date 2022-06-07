import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userActions';

import './ProfilePage.css'
const ProfilePage = () => {
  const dispatch = useDispatch();
  const onLogout = ()=>{
    dispatch(logout());
  }
  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default ProfilePage