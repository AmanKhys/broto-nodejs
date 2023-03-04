const express = require('express');
const router = express.Router(); 

router.get('/',(req,res,next)=>{
  const values = ['aman','bilal','haroon','hafza','sareena','kadeejumma'];
  const Person={name:'Aman',age:20,comments:{comment:'this is a sample comment', date:'04-03-2023'}};
  Person.admin = false;

  res.render('aman',{Person,values,aman : 'THE GREATEST KING OF ALL TIME, KING KHYS'});
});

module.exports = router;