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
  // const nickname = doc.data().nickname
  // const daysRemaining
  // const percentComplete
  // const estimatedIncome
  // 
}


/** Get user data */
const getUserData = () => {
  // const boxNumber;
  // const boxIds
  // const trees = impact * x
}

/** Increment user impact */
const incrementUserImpact = (userId) => {
  // increments a new box is added
}

export default {
  createBox,
  getBoxData,
  incrementUserImpact,
  getUserData,
};
