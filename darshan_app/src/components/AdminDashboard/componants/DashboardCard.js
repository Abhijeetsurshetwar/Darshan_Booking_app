import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body d-flex align-items-center">
        <div className="me-3">
          <i className={`bi ${icon} fs-2 text-primary`}></i>
        </div>
        <div>
          <h5 className="card-title mb-1">{title}</h5>
          <p className="card-text fw-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
