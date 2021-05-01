require('dotenv').config();
const express=require("express");
const mongoose=require("mongoose");
const productRouter = require('./Routes/ProductRoutes');
const userRouter = require('./Routes/UserRoutes');

const app=express();
app.use(express.json());

const PORT=process.env.PORT || 5000;
//Connection to MongoDB  
const CONNECTION_URL=`mongodb+srv://${process.env.MOGODB_CREDENDIALS}@cluster0.peuiq.mongodb.net/Amazona?retryWrites=true&w=majority`;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
//Listening to Server
.then(()=>app.listen(PORT,()=>console.log("serving at http://localhost:"+PORT)))
.catch(error=>console.log("Database Connection Failed "+error));


//handling routes
app.use('/api/users',userRouter);
app.use('/api/products',productRouter);

