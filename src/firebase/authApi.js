import { auth } from './index';

const getUser = () => {
  return auth().currentUser;
};

const logOut = () => {
  auth()
    .signOut()
    .catch((error) => {
      alert(error.message);
    });
};

export {
  getUser,
  logOut,
};
