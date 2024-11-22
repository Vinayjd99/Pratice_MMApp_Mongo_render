const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());

app.get("/gm", (req,res) => {

   const url = "mongodb+srv://vj281999:9LWvtpXOL7TRNWDA@cluster0.aodfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
   const client = new MongoClient(url);
   const db = client.db("mm22nov24");
   const coll = db.collection("messages");
   coll.aggregate([{$sample: {size: 1}}]).toArray()
   .then(result => res.send(result))
   .catch(error => res.send(error))

});

app.listen(9000, () => {console.log("ready to serve @ 9000");});