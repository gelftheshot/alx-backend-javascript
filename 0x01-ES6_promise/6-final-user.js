const { default: signUpUser } = require('./4-user-promise');
const { default: uploadPhoto } = require('./5-photo-reject');

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((value) => value);
}

module.exports = handleProfileSignup;
