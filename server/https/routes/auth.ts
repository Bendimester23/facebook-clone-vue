import Router from 'express';
const router = Router();
import User from '../../database/models/User'
import Joi from '@hapi/joi';

const regSchema = {
    username: Joi.string()
        .min(6)
        .max(255)
        .required(),
    email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email(),
    password: Joi.string()
        .min(6)
        .max(1024)
        .required()
};

router.get('/', (req,res) => {
    res.status(200).send('auth working.');
});

router.get('/register', async (req,res) => {
    Joi.attempt(req.body, regSchema)
    .catch(err => {
        res.status(400).send(err);
        console.log(err);
        return;
    });
    let user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const saved = await user.save();
        res.status(200).send(saved);
    }catch (err) {
        res.status(400).send(err);
    }
});

export default router;