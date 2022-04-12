const mongoose = require('mongoose');
import { IWilderCreate, IWilder } from '../Interfaces/IWilder';

const Schema = mongoose.Schema;


const WilderSchema = new Schema({
  name: {type: String, unique: true, required: true},
  city: String,
  skills: [{ title: String, votes: Number }],
});

export default mongoose.model("wilder", WilderSchema); 