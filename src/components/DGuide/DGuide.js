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
              <img src={guide1} className="col" alt="man carrying compost bin" />
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
              <img src={guide2} className="col" alt="man carrying compost bin outdoors" />
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
              <img src={guide3} className="col" alt="woman setting up compost box" />
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
              <img src={guide4} className="col" alt="plant growing from dirt in person's palm" />
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
              <img src={guide5} className="col" alt="cartoon landscape" />
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
              <img src={guide6} className="col" alt="cartoon piggy bank" />
            </div>
          </div>
        </div>
      </div>
      <div className="dash-comp container pb-4 mt-4">
        <div className="ml-4 pt-4">
          <h4>Box Setup</h4>
          <h5 className="mt-3">Step 1</h5>
          <p>
            Place twigs or alike materials on the bottom of your box. This layer
            will allow for drainage and aeration. Now cover the first layer with
            leaves.
          </p>
          <h5>Step 2</h5>
          <p>
            Alternate between layers of brown materials (carbon-rich) and green
            materials (nitrogen-rich).
          </p>
        </div>
      </div>
      <div className="dash-comp container pb-4 mt-4">
        <div className="ml-4 pt-4">
          <h4>Box Maintenance</h4>
          <h5 className="mt-3">Adding fresh material</h5>
          <p>
            When adding fresh material to your compost box, be sure to mix it in
            with the lower layers. <br />
            <span className="bold">
              We also reccomend using our Compost Tool to know exactly what can
              and cannot be compostable!
            </span>
          </p>

          <h5>Controlling Moisture</h5>
          <p>
            Your compost box should be as wet as a{' '}
            <span className="green bold">rung-out sponge</span>. <br />
            <span className="">Add water to make the mixture more wet.</span>
            <br />
            <span className="">
              Add dry materials like leaves or twigs to make the mixture more
              dry.
            </span>
          </p>

          <h5>Mix Regularly</h5>
          <p>
            Mix or turn the compost once a week to help the breakdown process
            and eliminate odor.
          </p>
        </div>
      </div>
    </>
  );
}

export default DGuide;
