import express from 'express'
import morgan from 'morgan';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json())
app.use(morgan("dev"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, auth-token");
    next();
  });

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
