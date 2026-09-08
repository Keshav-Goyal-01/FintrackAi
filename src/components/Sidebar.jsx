import React from 'react';

// Simple left navigation sidebar
function Sidebar() {
  const items = ['Home', 'Cards', 'History', 'Alerts', 'Goals'];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">FT</div>

      <nav className="sidebar-nav">
        {items.map((item, index) => (
          <div key={item} className={`nav-item ${index === 0 ? 'active' : ''}`}>
            <span className="nav-dot" />
            <span>{item}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
