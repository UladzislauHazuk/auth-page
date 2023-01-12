const {
    foundUser,
    createUserDB
} = require('../repository/api.repository');

const createUser = async (email, pwd) => {
    const user = await foundUser(email);
    if(user.length) throw new Error('Such user already exists');
    await createUserDB(email, pwd);
}

module.exports = {
    createUser
};