import React, { Component } from 'react';
import './DHome.css';
import { db, auth } from '../../firebase/index';

import DBoxDisplay from '../DBoxDisplay/DBoxDisplay';

class DHome extends Component {
  state = {
    currentUser: auth().currentUser.uid,
    income: 0,
    boxesArray: [],
  };

  componentDidMount() {
    let boxesArray = [];
    const currentDate = new Date().getTime();
    let totalIncome = 0;

    //box size and income dicionary
    let incomeDict = {
      1: 12.26,
      2: 98.02,
      3: 232.35,
    };

    //box size and daysRemaining dictionary
    let requiredDaysDict = {
      1: 180,
      2: 150,
      3: 120,
    };

    let boxSizeDict = {
      1: "Small",
      2: "Medium",
      3: "Large"
    }

    db()
      .collection('Boxes')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          if (doc.data().userid === this.state.currentUser) {
            //today - startday
            let daysDiff = Math.floor(
              (currentDate - doc.data().startdate.toDate()) / (1000 * 3600 * 24)
            );
            //total day = boxsize*70
            let currentBoxSize = doc.data().boxsize;
            let currentIncome = incomeDict[currentBoxSize];
            let totalDaysRequired = requiredDaysDict[currentBoxSize];
            let prcnt = 0,
              daysRemaining = totalDaysRequired;
            //startdate != current date
            if (daysDiff !== 0) {
              prcnt = Math.floor((daysDiff / totalDaysRequired) * 100);
              daysRemaining = totalDaysRequired - daysDiff;
            }

            //to get impact and esitimated income
            totalIncome += currentIncome;

            boxesArray.push({
              id: doc.id,
              boxTitle: doc.data().nickname,
              prcnt: prcnt,
              daysLeft: daysRemaining,
              boxsize: boxSizeDict[currentBoxSize]
            });
          }
        });
        this.setState({ income: totalIncome, boxesArray });
      });
  }

  render() {
    return (
      <>
        <div className="dash-comp container pb-4">
          <h4 className="ml-4 pt-4">Boxes Summary</h4>
          <div className="mt-4">
            {this.state.boxesArray.map((box) => (
              <DBoxDisplay
                boxTitle={box.boxTitle}
                prcnt={box.prcnt}
                daysLeft={box.daysLeft}
                size={box.boxsize}
              />
            ))}
          </div>
        </div>

        <div className="dash-comp container mt-4 pb-3">
          <div className="ml-4 pt-4">
            <h4>Estimated Income</h4>
            <p>
              You have {this.state.boxesArray.length} boxes registered. With the
              sizes that you have selected, your estimated income will be
            </p>
            <h1>
              $<span className="green">{this.state.income}</span> CAD
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
              <span className="green">
                {(this.state.income / 106).toFixed(1)}{' '}
              </span>{' '}
              trees.
            </h1>
          </div>
        </div>
      </>
    );
  }
}
export default DHome;
