const signUpUser = require('./4-user-promise').default;
const uploadPhoto = require('./5-photo-reject').default;

function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}

module.exports = handleProfileSignup;
