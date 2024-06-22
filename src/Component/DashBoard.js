import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import GroupList from '../components/GroupList';
import GroupForm from '../components/GroupForm';

const Dashboard = ({ user }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch groups from the API
    // setGroups(fetchedGroups);
  }, []);

  const handleCreateGroup = (group) => {
    // Call API to create group
    setGroups([...groups, group]);
  };

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <h2>Welcome, {user.name}</h2>
      <GroupForm onSubmit={handleCreateGroup} />
      <GroupList groups={groups} />
    </div>
  );
};

export default Dashboard;
