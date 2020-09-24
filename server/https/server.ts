import * as express from 'express'

const app = express();

app.get('/', (req,res) => {
    res.send("API working.");
});

export default function start() {
    app.listen(20004,() => {
        console.log('[http] Server started!');
    });
};
