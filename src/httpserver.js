const http = require("http");
const c = require("../util/colog");
const fs = require("fs");

module.exports = {
    execute(port, host) {
        // HTTP Server Listener
        const requestListener = function (req, res) {
            // Handle Favicon Error
            if (req.url === '/favicon.ico') {
                res.writeHead(200, {'Content-Type': 'image/x-icon'} );
                res.end();
                return;
            }


            try {
                
                res.writeHead(200, { "Content-Type": "text/html" });
                console.log(c.colog(94, "[HTTP] REQ URL: %s"), req.url);
                const file = require("../genshin/" + req.url.split("?")[0]);

                file.execute(req, res);
            }
            catch (e) {
                res.writeHead(200, { "Content-Type": "text/html" });
                console.log(c.colog(22, "[HTTP] Module %s wasnt found."), req.url);
                res.end('{"code":0}');
                
            }
        }
        //Creates the HTTP server
        const httpserver = http.createServer(requestListener);


        // On HTTP Server Start.
        httpserver.listen(port, host, () => {
            console.log(c.colog(94, `[HTTP] Server is running on http://${host}:${port}`));
        });
    },
}
