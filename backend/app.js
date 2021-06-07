require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;

//express middleware usage.
app.use(express.json());


//mongoose connection.

mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.xgkw0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',function(){
	console.log('You are connected to the database');
}).on('error', function(error){
	console.log('error :', error);
})


//Import routers here.
const authRouter = require("./routes/authentication/authRouter");
const registerNewRider = require("./routes/rider/registerNewRider");
const registerNewRequester = require("./routes/requester/registerNewRequester")

app.get("/", (req, res)=>{
	res.send("Hey I am alive!");
});


//Use routers here.

app.use("/auth", authRouter);
app.use("/registerRider", registerNewRider);
app.use("/registerRequester", registerNewRequester)


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
