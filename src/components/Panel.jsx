import React from 'react';

// Card panel container used across sections
function Panel({ title, action, children, className = '' }) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-header">
        <h2 className="panel-title">{title}</h2>
        {action && <button type="button" className="panel-action">{action}</button>}
      </div>
      <div className="panel-body">{children}</div>
    </section>
  );
}

export default Panel;
