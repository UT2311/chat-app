const express = require('express');
const path = require('path');
const publicpath = path.join(__dirname ,"../public");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(publicpath));
console.log(publicpath);

app.listen(port,()=>{
    console.log(`the server is listening to port ${port}`);
});