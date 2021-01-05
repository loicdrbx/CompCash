import React from 'react';
import './DBoxDisplay.css';

import * as FaIcons from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';

function DBoxDisplay(props) {
  return (
    <div className="">
      <div className="mx-4">
        <h5 className="">{props.boxTitle}</h5>
        <div className="row justify-content-start align-items-center mt-3">
          <div className="col-1">
            <FaIcons.FaBox className="p-0" size="1.5em" />
          </div>
          <ProgressBar
            style={{ backgroundColor: 'black' }}
            className="col-11 p-0"
            now={props.prcnt}
          />
        </div>
        <p className="text-center">
          {props.prcnt}% Completed | {props.daysLeft} Days Remaining
        </p>
      </div>
    </div>
  );
}

export default DBoxDisplay;
