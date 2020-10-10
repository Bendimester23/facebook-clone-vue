import Router from 'express';
import User from '../../database/models/User';
const router = Router();
import verify from './private'

router.get('/', verify, async (req:any,res) => {
    const user = await User.findById(req.user._id)
    res.send(user.toObject().name);
})

export default router;