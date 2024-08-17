import React from 'react';
// import {Welcome} from '../Welcome'
import { Wallet } from './WalletDashboard';
import { Card } from '../SIMPackages/Packages';
import { Video } from '../Movies/Movie';

const DashBoard = () => {
  return (
    <>
    <div>
      {/* <Welcome/> */}
      <Wallet/>
      <Card/>
      <Video/>
    </div>
    </>
  );
};

export default DashBoard;
