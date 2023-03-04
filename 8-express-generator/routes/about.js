let express = require('express');
var router = express.Router();

//get about page

router.get('/',(req,res,next)=>{
  res.render('about',{value:'this is about page'});

});

module.exports = router;