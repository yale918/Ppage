const express = require("express")
const path = require("path");

const app = express()
const port = 5555

/*
app.get('/',(req,res)=>{
    console.log("in /")
    express.static('../client/public')
})
*/

app.use('/',express.static('../client/public'))
/*
app.use('/profile',express.static('../client'))
app.use('/wschat',express.static('../client'))
app.use('/igclone',express.static('../client'))
*/





app.listen(port, ()=>{
    console.log("app server is running: ",port)
})
