import React from 'react'

const TabButton = ({ selectTab, active, children }) => {
    return (
      <button
        onClick={selectTab}
        className={`mr-4 hover:text-white hover:border-b-2 hover:border-green transition text-green ${active ? 'border-b-2 border-green text-white' : ''}`}
      >
        {children}
      </button>
    );
  };
  
  export default TabButton;