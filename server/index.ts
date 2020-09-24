import connect from './connect';
connect('mongodb+srv://api:'+process.env.password+'@cluster001.7cmi1.mongodb.net/facebook-colen?retryWrites=true&w=majority');