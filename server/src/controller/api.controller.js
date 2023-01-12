const express = require('express');
const {
    createUser
} = require('../service/api.service');
const route = express.Router();

route.post('/reg', async (req, res) => {
    try {
        const {
            email,
            pwd
        } = req.body;
        await createUser(email, pwd);
        res.status(200).send('Success');
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.post('/auth', async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send('Success');
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = route;