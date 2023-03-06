var express = require('express');
var router = express.Router();
var MongClient = require('mongodb').MongoClient;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'aman KHYS KING...ALL HAIL HIM... ',req: `${req._read()}` });
});
router.post('/submit',(req,res)=>{
  console.log(req.body);
  MongClient.connect('mongodb://localhost:27017',function (err,client){
  if(err)
    console.log('eroor');
  else  
    console.log('database connceted')
})
  res.send("data sent ot server")
});

module.exports = router;
