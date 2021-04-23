import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import CharFormPage from "../CharFormPage/CharFormPage";

import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/characters/new'>New Character</NavLink>
        <ProfileButton user={sessionUser} />
          {/* <CharPage/> */}
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal/>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink><br/>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;