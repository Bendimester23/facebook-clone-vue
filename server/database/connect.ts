import mongoose from 'mongoose';

export default (db: string) => {
  
  const connect = () => {
      console.log('[DB] Connecting...')
    mongoose
      .connect(
        db,
        { 
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )
      .then(() => {
        return console.info(`[DB] Successfully connected!`);
      })
      .catch(error => {
        console.error('[DB] Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};