const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("rest-simulator/db.json");
const middlewares = jsonServer.defaults();
const path = require('path');

server.use(jsonServer.bodyParser);
server.use(middlewares);


// Custom middleware to access POST methids.
// Can be customized for other HTTP method as well.
server.use((req, res, next) => {
    console.log("POST request listener");
    const body = req.body;
    console.log(body);
    res.header('Content-Range', 'posts 0-20/20');
    if ((req.method === "POST") && (req.url.indexOf('page1') >= 0)) {
 
        res.header("Content-Type", 'application/json');
        res.sendFile(path.join(__dirname, 'responses/custom.json'));
    } else {
        //Not a post request. Let db.json handle it
        res.header("Content-Type", 'application/json');
        next();
    }
});

server.use(router);
const PORT =  5003;
server.listen(PORT, () => {
    console.log("JSON Server is running on port=", PORT );
});     