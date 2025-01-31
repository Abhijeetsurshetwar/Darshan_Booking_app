import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="card shadow-sm bg-warning text-white p-3 rounded">
      <div className="card-body text-center">
        <div className="mb-2">
          <i className={`bi ${icon} fs-1`}></i>
        </div>
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text fw-bold fs-4">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
