import React from 'react';

const Reports = ({ reports }) => {
  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map(report => (
          <li key={report.id}>
            <h3>{report.title}</h3>
            <p>{report.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
