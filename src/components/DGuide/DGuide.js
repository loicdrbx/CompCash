import React from 'react';
import './DGuide.css';

import guide1 from '../../assets/Guide/1.svg';
import guide2 from '../../assets/Guide/2.svg';
import guide3 from '../../assets/Guide/3.svg';
import guide4 from '../../assets/Guide/4.svg';
import guide5 from '../../assets/Guide/5.svg';
import guide6 from '../../assets/Guide/6.svg';

function DGuide() {
  return (
    <>
      <div className="dash-comp container pb-4">
        <div className="ml-4 pt-4">
          <h4>The Secret Formula</h4>
          <p>
            Use this comprehensive guide when composting to maximize your
            output!
          </p>
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <h5>Step 1: Choose a box size</h5>
              <p>
                Buy a box or make your own compost bin. The size of the box
                should be selected based on the amount of compostable material
                you generate.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img src={guide1} className="col" />
            </div>
          </div>

          <div className="row justify-content-between align-items-center mt-5">
            <div className="col-12 col-md-6">
              <h5>Step 2: Choose a location for the box</h5>
              <p>
                Choose a convenient location that is easily accessible (e.g.
                during wintertime), flat, well-drained, and sunny.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img src={guide2} className="col" />
            </div>
          </div>

          <div className="row justify-content-between align-items-center mt-5">
            <div className="col-12 col-md-6">
              <h5>Step 3: Box initial setup</h5>
              <p>
                Before embarking on your composting jounrey, you need to do some
                initial setup on the box first! See the{' '}
                <span className="green bold">Box Setup</span> Section below.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img src={guide3} className="col" />
            </div>
          </div>

          <div className="row justify-content-between align-items-center mt-5">
            <div className="col-12 col-md-6">
              <h5>Step 4: Add your waste and let the magic happen!</h5>
              <p>
                Need help deciding what is compositable? Use our Composting
                tool! Click on the{' '}
                <span className="green bold">Compost Tool</span> tab to access.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img src={guide4} className="col" />
            </div>
          </div>

          <div className="row justify-content-between align-items-center mt-5">
            <div className="col-12 col-md-6">
              <h5>Step 5: Maintain your box</h5>
              <p>
                This process is super easy! We will send your regular updates on
                what to do. See the{' '}
                <span className="green bold">Box Maintenance</span> section
                below for the details!
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img src={guide5} className="col" />
            </div>
          </div>

          <div className="row justify-content-between align-items-center mt-5">
            <div className="col-12 col-md-6">
              <h5>Step 6: Cash in and feel good!</h5>
              <p>
                When your box is ready, we will send you an email with drop off
                details. After inspection, a final figure will be deposited into
                your account.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <img src={guide6} className="col" />
            </div>
          </div>
        </div>
      </div>
      <div className="dash-comp container pb-4 mt-4">
        <div className="ml-4 pt-4">
          <h4>Box Setup</h4>
          <h5>Step 1</h5>
        </div>
      </div>
    </>
  );
}

export default DGuide;
