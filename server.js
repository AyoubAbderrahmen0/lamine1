//require express !
const  express = require('express');
const connect = require("./connectDB/config")

//create instance
const app=express()

//middleWare
app.use(express.json())
const cors=require("cors"); //access to send requests
const corsOptions ={ origin:'*', credentials:true, //access-control-allow-credentials:true
 optionSuccessStatus:200, } 
 app.use(cors(corsOptions))

require('dotenv').config()
const PORT = process.env.PORT
//create server
app.listen(PORT,(error)=>{
    error?console.log(error):console.log(`server is running on PORT ${PORT}`)
})
connect()
app.use("/api/user",require("./Routes/User"))  

