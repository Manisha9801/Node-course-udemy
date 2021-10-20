//creating a basic app using pure Node.js

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {   //The callback registered here is a request event listener which is registered in the web-api environment and will trigger as and when request is received
  const method = req.method;
  const url = req.url;
  if (url === "/") {
    res.write(
      '<html><body><form action="/message" method="POST" >Enter your name : <input name="message" type="text" /><button type="submit">SUBMIT</button></form></body></html>'
    );
    return res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => { //Here 'on' registers a 'data' event listener which will trigger whenever a new chunk of data is received 
      console.log("chunk", chunk);
      body.push(chunk);
    });
    return req.on("end", () => { //Here 'on' registers a 'end' event listener which will trigger whenever the data packages are ready to be read.
      const parseBody = Buffer.concat(body).toString();
      const msg = parseBody.split("=")[1];
      fs.writeFile("message.txt", msg, (err) => { //writeFile is non-blocking code , it registers a call back which will be called when the writing of the file is completed. If any error occurs during that process then we will receive error object otherwise it will be NUll
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body>Message sent successfully</body></html>");
  res.end();
});

server.listen(3000, "localhost");
