import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';

const Header = ({ handleSidebar }) => {
  return (
    <div className="flex items-center px-4 pt-4 gap-4">
      <HiMenuAlt2
        size={30}
        onClick={handleSidebar}
        className="cursor-pointer"
      />
      <h2 className="font-semibold text-lg">Dashboard</h2>
    </div>
  );
};

export default Header;
