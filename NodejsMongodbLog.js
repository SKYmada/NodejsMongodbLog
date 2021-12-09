const express = require("express");
const app = express();
app.use('/',express.static('public'));      //将public文件夹映射到根目录下
app.get("/input",(req,res) => {
    res.send("hello");
    console.log(req.query);
})
app.listen(10317);  //最大端口号为65530