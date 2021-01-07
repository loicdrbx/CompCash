import { db } from './index';


/** Create a box */
const createBox = ({ nickname, size, userId }) => {
  // {
  //   boxsize: 0,
  //   nickname: "bla",
  //   userId: "1234",  GET USERID from authApi
  //   date: timestamp
  //   complete: true
  // }
}

/** Get box data */
 const getBoxData = (boxId) => {
  // Get the entire document
  // db().collection("Boxes").doc(boxId)
  //   .onSnapshot((doc)=>{
  //     console.log(doc.data());
  //   });
  // const nickname = doc.data().nickname
  // const daysRemaining
  // const percentComplete
  // const estimatedIncome
  //
}


/** Get user data */
const getUserData = (usrId) => {
  // const boxNumber;
  // const boxIds
  // const trees = impact * x
  //const doc = db().collection("users").doc(usrId).value;
  // return db().collection("users").doc(usrId).get();
}

/** Increment user impact */
const incrementUserImpact = (userId) => {
  // increments a new box is added
}

export {
  createBox,
  getBoxData,
  incrementUserImpact,
  getUserData,
};
