import { Document, Schema, Model, model} from "mongoose";
import { IPerson } from "./person.interface";

export interface IPersonModel extends IPerson, Document {
  fullName(): string;
}

export const PersonSchema: Schema = new Schema({
  email: String,
  firstName: String,
  lastName: String
});

export const Person: Model<IPersonModel> = model<IPersonModel>("Person", PersonSchema);
