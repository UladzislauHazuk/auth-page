const {
    pool
} = require('../DB');

const foundUser = async (email) => {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users WHERE email = $1';
    const data = (await client.query(sql, [email])).rows;
    return data;
};

const createUserDB = async (email, pwd) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const sql = 'INSERT INTO users (email, pwd) VALUES ($1, $2)';
        await client.query(sql, [email, pwd]);

        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(`createUser: ${error.message}`);
        throw new Error(error.message);
    }
};

module.exports = {
    foundUser,
    createUserDB
};