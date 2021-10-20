const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url
    const method = req.method
    console.log(url,method)
    if(url === '/') {
        res.setHeader('Content-Type','text/html')
        res.write('<html><head><title>Assigment 1</title><body><form action="/createuser" method="POST">Enter User Name <input name="username" type="text" /><button type="submit">SUBMIT</button></form></body></head></html>')
        return res.end()
    }
    else if(url === '/createuser' && method=== 'POST'){
        //res.statusCode=200
        const body = []
        req.on('data', (chunk) => {
            console.log("chunk", chunk);
            body.push(chunk)
        })
        return req.on('end',() => {
            const username = Buffer.concat(body).toString()
            const msg = username.split('=')[1]
            res.write('<html><body><p>Created User :'+ msg +'</p></body></html>')
            return res.end()
        })
    }
    else if( url === '/users'){
        res.write('<html><body><p>Users</p><br /> <ul><li>Manisha</li><li>Sachin</li></ul></body></html>')
        return res.end
    }
})

server.listen(3000,'localhost')