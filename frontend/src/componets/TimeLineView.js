import React from 'react';
// import './TimeLine.css';

const TimeLine = ({ punches }) => {
  // Create an array of edges based on the punches data
  const edges = [];
  for (let i = 0; i < punches.length - 1; i++) {
    const punch1 = punches[i];
    const punch2 = punches[i + 1];
    if (punch1.type === 'out' && punch2.type === 'in') {
      edges.push({
        id: i,
        type: 'presence',
        start: punch1.time,
        end: punch2.time,
      });
    } else if (punch1.type === 'in' && punch2.type === 'out') {
      edges.push({
        id: i,
        type: 'absence',
        start: punch1.time,
        end: punch2.time,
      });
    }
  }

  return (
    <div className="timeline">
      {punches.map((punch, i) => (
        <div key={i} className={`punch ${punch.type}`}>
          <span>{punch.time}</span>
        </div>
      ))}
      {edges.map((edge) => (
        <div
          key={edge.id}
          className={`edge ${edge.type}`}
          style={{ left: edge.start, width: edge.end - edge.start }}
        ></div>
      ))}
    </div>
  );
};

export default TimeLine;
