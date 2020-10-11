import Router from 'express';
const router = Router();
import User from '../../database/models/User'
import Joi from '@hapi/joi';
import crypt from 'bcryptjs';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import verify from './private';

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

const loginSchema = Joi.object( {
    username: Joi.string()
        .min(6)
        .max(255)
        .required(),
    password: Joi.string()
        .min(6)
        .max(1024)
        .required()
});

const refreshSchema = Joi.object( {
    username: Joi.string()
        .min(6)
        .max(255)
        .required(),
    token: Joi.string()
        .min(6)
        .max(1024)
        .required()
});

router.get('/', (req,res) => {
    res.status(200).send('auth working.');
});

router.get('/register', async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*');

    regSchema.validate(req.query)
    .catch(err => {
        res.status(400).send(err.toString());
        console.timeEnd('reg');
        return;
    });

    const salt = await crypt.genSalt(10);

    let user = new User({
        name: req.query.username,
        email: req.query.email,
        password: await crypt.hash('' + req.query.password,salt),
        prefferedTheme: true,
        groups: []
    })

    const nameExist = await User.exists({name: req.query.username});
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

router.options('/login', async (req,res) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Methods", '*').send('');
})

router.post('/login', async (req,res) => {
    res.header('Access-Control-Allow-Origin','*');

    loginSchema.validate(req.query)
    .catch(err => {
        res.status(400).send(err.toString());
        return;
    });

    let userRef = await User.findOne({name: req.query.username});

    if (userRef == null || userRef == undefined) {
        try {
            res.status(400).send("Email or password is wrong!");
        } catch (error) {}
        return;
    }

    const match = await crypt.compare(req.body.password,userRef.toObject().password);

    if (match) {
        const token = jwt.sign({_id:userRef._id, date: Date.now()},process.env.TOKEN_SECRET);
        res.header('auth-token',token).header('Access-Control-Allow-Origin','*').send(token);
    }else {
        res.status(403).send('WrongPassword');
    }

    console.log(userRef);
});

router.post('/refresh', verify, async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*');

    refreshSchema.validate(req.query)
    .catch(err => {
        res.status(400).send(err.toString());
        return;
    });

    const userData : any = jwt.verify(req.header('auth-token'), process.env.TOKEN_SECRET);


    let userRef = await User.findOne({name: req.query.username});
    let tokenUser = await User.findById(userData._id);

    if (req.query.token != req.header('auth-token')) {
        try {
            res.status(400).send("Error: Username or token is wrong!");
        } catch (error) {}
        return;
    }

    if (userRef == null || userRef == undefined || tokenUser == null || tokenUser == undefined) {
        try {
            res.status(400).send("Error: Username or token is wrong!");
        } catch (error) {}
        return;
    }

    if (userRef.toObject().name != tokenUser.toObject().name) {
        try {
            res.status(400).send("Error: Username or token is wrong!");
        } catch (error) {}
        return;
    }

    const token = jwt.sign({_id:userRef._id, date: Date.now()},process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);
})

router.get('/verify', verify, (req,res) => {
    res.status(200).send('succes');
})

export default router;