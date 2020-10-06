import express from 'express'

const app = express();

app.use(express.json());

//Routes
import authRoute from './routes/auth';


app.use('/api/auth', authRoute);

app.get('/', (req,res) => {
    res.send("API working.");
});

export default function start() {
    app.listen(20004,() => {
        console.log('[http] Server started!');
    });
};
