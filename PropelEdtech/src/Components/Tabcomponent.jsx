import React, { useState } from 'react';
//import './Tabs.css'; // Import CSS for styling

export default function Tabcomponent(){
  // State to manage active tab
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle tab click
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {/* Tab 1 */}
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab1
        </div>

        {/* Tab 2 */}
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>

        {/* Tab 3 */}
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </div>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === 1 && <div>This is content for Tab 1</div>}
        {activeTab === 2 && <div>This is content for Tab 2</div>}
        {activeTab === 3 && <div>This is content for Tab 3</div>}
      </div>
    </div>
  );
};


