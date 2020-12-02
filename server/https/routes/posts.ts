import Router from 'express';
import Post from '../../database/models/Post';
import User from '../../database/models/User';
const router = Router();
import verify from './private'

router.get('/', verify, async (req: any, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const user = await User.findById(req.user._id)
    res.send(user.toObject().name);
})

router.get('/post/:id', verify, async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const id = req.params.id;

    const post = await Post.findById(id);

    res.status(200).send(post.toJSON());
})

router.options('/create', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", 'Access-Control-Allow-Origin, auth-token, content-type').send('');
})

router.post('/create', verify, async (req: any, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const post = new Post({
        title: req.body.title,
        text: req.body.content,
        postedAt: new Date(Date.now()),
        hasImage: false,
        author: req.user._id,
        isGlobal: true
    });
    let resp;
    try {
        resp = await post.save();
    }catch {
        res.status(400).send('Error');
    }
    console.log(resp)
    res.send(resp)
})

router.get('/global', verify, async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const posts = await Post.find({ isGlobal: true });

    if (posts.length == 0)
        return res.status(404).send('Error: No posts!')

    res.status(200).send(posts);
})

export default router;