import connect from './database/connect';
import server from './https/server'
import * as dotenv from 'dotenv';
dotenv.config();
connect('mongodb+srv://api:'+process.env.password+'@cluster001.7cmi1.mongodb.net/facebook-colen?retryWrites=true&w=majority');
server();