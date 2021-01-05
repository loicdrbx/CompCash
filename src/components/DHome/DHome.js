import React from 'react';
import './DHome.css';

import DBoxDisplay from '../DBoxDisplay/DBoxDisplay';

const boxesTestArray = [
  {
    boxTitle: "Amy's Box - Backyard Corner",
    prcnt: '60',
    daysLeft: '28',
  },
  {
    boxTitle: "2Amy's Box - Backyard Corner",
    prcnt: '20',
    daysLeft: '18',
  },
];

const boxesNum = boxesTestArray.length;

function DHome() {
  return (
    <>
      <div className="dash-comp container pb-4">
        <h4 className="ml-4 pt-4">Boxes Summary</h4>
        <div className="pt-4">
          {boxesTestArray.map((box) => (
            <DBoxDisplay
              boxTitle={box.boxTitle}
              prcnt={box.prcnt}
              daysLeft={box.daysLeft}
            />
          ))}
        </div>
      </div>
      <div className="dash-comp container mt-4 pb-3">
        <div className="ml-4 pt-4">
          <h4>Estimated Income</h4>
          <p>
            You have {boxesNum} boxes registered. With the sizes that you have
            selected, your estimated income will be
          </p>
          <h1>
            $<span className="green">37.48</span> CAD
          </h1>
        </div>
      </div>
    </>
  );
}

export default DHome;
