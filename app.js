const http = require('http')      //1st step

const server = http.createServer((req,res)=>{      //2nd step
if(req.url ==='/'){
    res.end('welcome to the end')
}
if(req.url ==='/about'){
    res.end('welcome to about')
}
res.end('<h1>Oops</h1>')
})

server.listen(5000)              //3rd step