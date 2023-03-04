let http =require('http');
let fs = require('fs');
http.createServer(((req,res)=>{
  fs.readFile('./res-folder/index.html',(err,data)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    //res is not a html file ready to be sent... its content is.. its head is used to send some other object
      res.write(data);
      res.end();
  });
})).listen(8990);
//server is code running in vscode through node server.js 
//client is the browser  