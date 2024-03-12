import React from 'react';

const OnlineTests= ({ tests }) => {
  return (
    <div>
      <h2>Online Tests</h2>
      <ul>
        {tests.map(test => (
          <li key={test.id}>
            <h3>{test.title}</h3>
            <p>Duration: {test.duration} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineTests;
