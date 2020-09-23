import * as express from 'express'

const app = express();

export default function start() {
    app.listen(20004,() => {
        console.log('[http] Server started!');
    });
};
