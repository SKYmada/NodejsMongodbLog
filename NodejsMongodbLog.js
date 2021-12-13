const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://172.21.2.236:27017/190110910317');

const schema = {
    name:String,
    age:Number,
    health:String
}
const abc = mongoose.model('cat1s', schema);
// const kitty = new abc({name:"111"});
// kitty.save();


app.use('/',express.static('public'));      //将public文件夹映射到根目录下
app.get("/input",(req,res) => {
    res.send(req.query);
    const kitty = new abc({name: req.query.first, health: req.query.second});
    console.log("已写入"+req.query.first+"，"+req.query.second);
    kitty.save();
})

app.listen(10317);  //最大端口号为65530