import express from 'express'
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//Routes
import authRoute from './routes/auth';
import postsRoute from './routes/posts'


app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);

app.get('/', (req,res) => {
    res.send("API working.");
});

export default function start() {
    app.listen(20004,() => {
        console.log('[http] Server started!');
    });
};
