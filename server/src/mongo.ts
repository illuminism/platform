import * as mongoose from 'mongoose';

let cache_ = void 0;

export function connectToMongo() {
  const uri = 'mongodb://mongodb:27017/test';
  let connection;
  if(!cache_){
    connection = mongoose.createConnection(uri, {
      useMongoClient: true
    });
  }

  (mongoose as any).Promise = Promise;
  return connection;
}

