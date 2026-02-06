import React from 'react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}

export default MainLayout;