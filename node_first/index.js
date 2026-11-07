import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'

http.createServer((req,res) =>{
  try {
    let link = url.parse(req.url);
    let pathname = '.' + link.pathname;
    
    if(pathname === './'){
      pathname = './index.html'
    }
    
    fs.readFile(pathname, (err,data)=>{
      if(err){
        return fs.readFile('./404.html', (err404,data404)=>{
          res.writeHead(404, {'Content-Type': 'text/html'});
          err404 ? 'ERROR 404' : res.write(data404);
          res.end();
        })
      }      
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    })
  } catch (error) {
    console.log(error);
  }
}).listen(8000, ()=>{
  console.log("Dziala");
})