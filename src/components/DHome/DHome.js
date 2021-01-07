import React, { Component } from 'react';
import './DHome.css';
// import * as dbAPI from '../../firebase/dbApi';
// import * as authAPI from '../../firebase/authApi';
import { db } from '../../firebase/index';

import DBoxDisplay from '../DBoxDisplay/DBoxDisplay';

class DHome extends Component{
  state = {
    currentUser: "Srju0S7suvRvyG1HC7Az",
    totalBoxSize: 0,
    //income: 77.78, //depends on the box size  1-> 32.32 CAD
    //impactTrees: 1, //also depends on the box size 1->27trees
    boxesArray: []
  }

  componentDidMount() {
    let boxesArray = [];
    const currentDate = new Date().getTime();
    let totalSize = 0;

    db().collection("Boxes").get().then((snapshot) => {

        snapshot.forEach((doc) => {
          if(doc.data().userid == this.state.currentUser){
            //today - startday
            let daysDiff = Math.floor((currentDate - doc.data().startdate.toDate())/(1000 * 3600 * 24))
            //total day = boxsize*70
            let currentBoxSize = doc.data().boxsize
            let totalDaysRequired = currentBoxSize*70
            totalSize += currentBoxSize
            let prcnt = Math.floor(daysDiff/totalDaysRequired*100)
            let daysRemaining = totalDaysRequired - daysDiff

            boxesArray.push({
                id: doc.id,
                boxTitle: doc.data().nickname,
                prcnt: prcnt,
                daysLeft: daysRemaining
            })
          }})
          this.setState({ totalBoxSize: totalSize, boxesArray})
        }
      )

  }

render() {

  return (
    <>
      <div className="dash-comp container pb-4">
        <h4 className="ml-4 pt-4">Boxes Summary</h4>
        <div className="pt-4">
        {this.state.boxesArray.map((box) => (
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
            You have {this.state.boxesArray.length} boxes registered. With the sizes that you have
            selected, your estimated income will be
          </p>
          <h1>
            $<span className="green">{this.state.totalBoxSize * 32.31}</span> CAD
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
            <span className="green">{
              this.state.totalBoxSize * 27} </span> trees.
          </h1>
        </div>
      </div>
    </>
  );
}
}
export default DHome;
