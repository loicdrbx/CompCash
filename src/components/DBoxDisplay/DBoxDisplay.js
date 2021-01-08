import React from 'react';
import './DBoxDisplay.css';

import * as FaIcons from 'react-icons/fa';
import ProgressBar from 'react-bootstrap/ProgressBar';

function DBoxDisplay(props) {
  return (
    <div className="">
      <div className="mx-4">
        <h5 className="mb-0">{props.boxTitle}</h5>
        <p>Size: {props.size}</p>
        <div className="row justify-content-start align-items-center mt-3">
          <div className="col-1">
            <FaIcons.FaBox
              className="p-0"
              size="1.5em"
              style={{ color: '#2f2e41' }}
            />
          </div>
          <div className="col-10 col-md-11">
            <ProgressBar
              style={{ backgroundColor: '#2f2e41' }}
              className="col-12 p-0"
              now={props.prcnt}
            />
          </div>
        </div>
        <p className="text-left text-md-center">
          {props.prcnt}% Completed | {props.daysLeft} Days Remaining
        </p>
      </div>
    </div>
  );
}

export default DBoxDisplay;
