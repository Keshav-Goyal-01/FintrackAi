import React from 'react';

// Single row item inside lists (subscriptions, bills, transactions)
function ListRow({ name, note, value, isPositive, isNegative }) {
  let valueClass = '';
  if (isPositive || value.startsWith('+')) {
    valueClass = 'text-success';
  } else if (isNegative || value.startsWith('-')) {
    valueClass = 'text-danger';
  }

  return (
    <div className="list-row">
      <div className="list-row-info">
        <p className="list-row-name">{name}</p>
        <p className="list-row-note">{note}</p>
      </div>
      <p className={`list-row-value ${valueClass}`}>{value}</p>
    </div>
  );
}

export default ListRow;
