import Router from 'express';
const router = Router();
import User from '../../database/models/User'
import Joi from '@hapi/joi';
import crypt from 'bcryptjs';

const regSchema = Joi.object( {
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
});

router.get('/', (req,res) => {
    res.status(200).send('auth working.');
});

router.get('/register', async (req,res) => {
    regSchema.validate(req.body)
    .catch(err => {
        res.status(400).send(err.toString());
        return;
    });
    let user = new User({
        name: req.body.username,
        email: req.body.email,
        password: crypt.hashSync(req.body.password,1)
    })

    const nameExist = await User.exists({name: req.body.username});
    if (nameExist) {
        try {
            res.json({
                status: "error",
                error: "Already registered!"
            });
        } catch (error) {
        }
        return;
    }

    try {
        const saved = await user.save();
        try {
            res.status(200).send(saved);
        } catch (error) {
        }
        return;
    }catch (err) {
        console.error(err);
        try {
            res.send("Err: IDK");
        } catch (error) {
        }
        return;
    }
});

export default router;