import React from 'react';
import NavBarAvatar from '../Common/NavBarAvater';
import Welcome from '../Welcome'
import Package from '../Wallet';
import Action from '../Action';
import { Card } from '../Data';
import { Video } from '../Movies/Movie';
import { Footer } from '../Footer';

const DashBoard = () => {
  return (
    <>
    <div>
      <NavBarAvatar />
      <Welcome/>
      <Package/>
      <Action/>
      <Card/>
      <Video/>
      <Footer/>
    </div>
    </>
  );
};

export default DashBoard;
