import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-teal-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Brand/Logo */}
        <div>
          <span className="text-white text-xl font-bold">Test System</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;