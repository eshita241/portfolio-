import React from 'react'

const TabButton = ({ selectTab, active, children }) => {
    return (
      <button
        onClick={selectTab}
        className={`mr-4 hover:text-green transition text-white ${active ? 'border-b-2 border-green text-green' : ''}`}
      >
        {children}
      </button>
    );
  };
  
  export default TabButton;