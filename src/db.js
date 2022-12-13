import mongoose from 'mongoose';
import {DB_DATABASE,
        DB_HOST,
        DB_USER,
        DB_PASSWORD,
        DB_PORT} from './config.js'

//Creating connection and permissions
mongoose.connect("mongodb://mongo:UKMgZMQyVZ3UkiB8Yjj7@containers-us-west-105.railway.app:5595/test", {useNewUrlParser: true});

const db= mongoose.connection;
export const db2= mongoose.connection.useDb('optica'); 
//export const db = mongoose.connection.useDb('optica'); 
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
/*
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// Compile model from schema
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);
const awesome_instance = new SomeModel({ name: "awesome" });

awesome_instance.save((err) => {
  if (err) return handleError(err);
  // saved!
  console.log('Guardado')
});*/