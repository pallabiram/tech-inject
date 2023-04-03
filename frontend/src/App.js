import React from 'react';
import SideBar from './componets/Sidebar';
import TimeLine from './componets/TimeLineView';

function App() {
  const employee = {
    name: 'John Doe',
    id: '12345',
    phone: '555-555-5555'
  };
  const punches = [
    {
      id: 1,
      type: 'in',
      timestamp: '2022-04-01T08:00:00.000Z',
    },
    {
      id: 2,
      type: 'out',
      timestamp: '2022-04-01T12:00:00.000Z',
    },
    {
      id: 3,
      type: 'in',
      timestamp: '2022-04-01T13:00:00.000Z',
    },
    {
      id: 4,
      type: 'out',
      timestamp: '2022-04-01T17:00:00.000Z',
    },
  ];

  return (
    <div className="app">
      <SideBar name={employee.name} id={employee.id} phone={employee.phone} />
      {/* The rest of your app goes here */}
      <TimeLine punches={punches} />
      {/* <TodaysDetails
        presentTime="8 hours"
        absentTime="0 hours"
        exemptionTime="0 hours"
        deductionTime="0 hours"
      /> */}
    </div>
  );
}

export default App;
