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

router.get('/global', verify, async (req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*');

    const posts = await Post.find({isGlobal: true});

    if (posts.length == 0)
        return res.status(404).send('Error: No posts!')
    
    res.status(200).send(posts);
})

export default router;