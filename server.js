const { parse } = require("url");
// const { readFileSync } = require("fs");
const next = require("next");
// const sslPort = 443;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

if (dev) {
  const { createServer } = require("http");

  app
    .prepare()
    .then(() => {
      createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
      }).listen(3000, err => {
        if (err) throw err;
        console.log(" > Ready on http://localhost:3000");
      });
    })
    .catch(err => console.error(new Date(), err));
}
