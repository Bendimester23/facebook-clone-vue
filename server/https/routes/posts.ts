import Router from 'express';
import Post from '../../database/models/Post';
import User from '../../database/models/User';
const router = Router();
import verify from './private'

router.get('/', verify, async (req:any,res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    
    const user = await User.findById(req.user._id)
    res.send(user.toObject().name);
})

router.get('/post/:id', verify, async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    
    const id = req.params.id;

    const post = await Post.findById(id);

    res.status(200).send(post.toJSON());
})

export default router;