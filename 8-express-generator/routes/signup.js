let express = require('express');
var router = express.Router();

//get about page

router.get('/',(req,res,next)=>{
  res.render('signup',{});
});
router.post('/submit',(req,res)=>{
  console.log(req.body);
  res.send('got it')
});

module.exports = router;