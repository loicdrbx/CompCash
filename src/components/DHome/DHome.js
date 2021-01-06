import React from 'react';
import './DHome.css';
import * as dbAPI from '../../firebase/dbApi';
import * as authAPI from '../../firebase/authApi';
import { db } from '../../firebase/index';

import DBoxDisplay from '../DBoxDisplay/DBoxDisplay';

class DHome extends React.Component{
  state = {
      boxesTestArray: [],
      boxesNum: 0
  }

// const boxesTestArray = [
//   {
//     boxTitle: "Amy's Box - Backyard Corner",
//     prcnt: '60',
//     daysLeft: '28',
//   },
//   {
//     boxTitle: "2Amy's Box - Backyard Corner",
//     prcnt: '20',
//     daysLeft: '18',
//   },
// ];

//const boxesNum = boxesTestArray.length;

  componentDidMount() {
    let boxesTestArray = [];
    this.state = { boxesNum: 2 };

    db().collection("Boxes").get().then((snapshot) => (
        snapshot.forEach((doc) => (
            boxesTestArray.push({
                id: doc.id,
                boxTitle: doc.data().nickname,
                prcnt: doc.data().boxsize
            })
        )),

        this.setState({ boxesTestArray })
      ));

  }

render() {

  return (
    <>
      <div className="dash-comp container pb-4">
        <h4 className="ml-4 pt-4">Boxes Summary</h4>
        <div className="pt-4">
        {this.state.boxesTestArray.map((box) => (
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
            You have {this.state.boxesNum} boxes registered. With the sizes that you have
            selected, your estimated income will be
          </p>
          <h1>
            $<span className="green">37.48</span> CAD
          </h1>
        </div>
      </div>

      <div className="dash-comp container mt-4 pb-3">
        <div className="ml-4 pt-4">
          <h4>Community Impact</h4>
          <p>
            You're a legend! With your contributions, CompCash has donated a
            total of
          </p>
          <h1>
            <span className="green">127 </span> trees.
          </h1>
        </div>
      </div>
    </>
  );
}
}
export default DHome;
