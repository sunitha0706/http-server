 import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>My Server</h1>");
    res.write("<p> this is response from server</p>");
    res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
