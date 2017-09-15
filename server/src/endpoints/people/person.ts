import { Document, Schema, Model } from 'mongoose';
import { IPerson } from './person.interface';
import { connectToMongo } from '../../mongo';


export interface IPersonModel extends IPerson, Document {
  fullName(): string;
}


export const PersonSchema: Schema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
});


function makeModel(connection): IPersonModel {
  return connection.model('Person', PersonSchema);
}


export const Person: Promise<Model<IPersonModel>> = connectToMongo().then(makeModel);
