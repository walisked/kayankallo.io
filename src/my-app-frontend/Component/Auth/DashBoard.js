import React from 'react';
// import {Welcome} from '../Welcome'
import WalletDashboard from '../Dashboard/WalletDashboard';
import { Card } from '../SIMPackages/Packages';
import { Video } from '../Movies/Movie';

const DashBoard = () => {
  return (
    <>
    <div>
      {/* <Welcome/> */}
      <WalletDashboard/>
      <Card/>
      <Video/>
    </div>
    </>
  );
};

export default DashBoard;
