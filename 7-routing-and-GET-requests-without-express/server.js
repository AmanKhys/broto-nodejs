let http = require('http');
let fs = require('fs');
let url = require('url');
http.createServer((req,res)=>{

  let q = url.parse(req.url,true);
  console.log(q);

  if(q.pathname === '/'){
    fs.readFile('./samplePage.html',(err,data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
    });
  }else if(q.pathname ==='/login'){
    fs.readFile('./login/login.html',(err,data)=>{
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(data);
      res.end();
    })
  }else if(q.pathname=== '/action'){

    console.log(q.query);
    
    // res.writeHead(200,{'Content-Type':'text/html'})
    //sometimes it is needed
    res.write(`<h1> ${q.query.firstName} </h1>`);
    res.end();
  }else{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('error');
    res.end();
  }
}).listen(4000,()=>console.log('http://localhost:4000'))