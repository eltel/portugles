const express = require("express");
// added { createServer } for PWA
const { createServer } = require("http");
const compression = require("compression");
const path = require("path");
const next = require("next");
const mongoose = require("mongoose");
const routes = require("../routes");
const bodyParser = require("body-parser");
// added { parse } for PWA
const { parse } = require("url");

const bookRoutes = require("./routes/book");
const portfolioRoutes = require("./routes/portfolio");
const blogRoutes = require("./routes/blog");

// SERVICE
const authService = require("./services/auth");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const config = require("./config");

const Book = require("./models/book");

const robotsOptions = {
  root: path.join(__dirname, "../static"),
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  }
};

const secretData = [
  {
    title: "secretData 1",
    description: "Plans for how to build a spaceship"
  },
  {
    title: "secretData 2",
    description: "Passwords and stuff"
  }
];

(() =>
  mongoose
    .connect(
      config.DB_URI,
      { useNewUrlParser: true }
    )
    .then(() => console.log("DB Connected!")))();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    server.use(bodyParser.json());
    // addedcreateServer for PWA
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;

      // handle GET request to ../service-worker.js
      if (pathname === "../service-worker.js") {
        const filePath = join(__dirname, ".next", pathname);

        app.serveStatic(req, res, filePath);
      } else {
        handle(req, res, parsedUrl);
      }
    });

    server.use("/api/v1/books", bookRoutes);
    server.use("/api/v1/portfolios", portfolioRoutes);
    server.use("/api/v1/blogs", blogRoutes);

    server.get("/robots.txt", (req, res) => {
      return res.status(200).sendFile("robots.txt", robotsOptions);
    });

    server.get("/api/v1/secret", authService.checkJWT, (req, res) => {
      return res.json(secretData);
    });

    server.get(
      "/api/v1/onlysiteowner",
      authService.checkJWT,
      authService.checkRole("siteOwner"),
      (req, res) => {
        return res.json(secretData);
      }
    );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(function(err, req, res, next) {
      if (err.name === "UnauthorizedError") {
        res
          .status(401)
          .send({ title: "Unauthorized", detail: "Unauthorized Access!!" });
      }
    });

    const PORT = process.env.PORT || 3000;

    server.use(handle).listen(PORT, err => {
      if (err) throw err;
      console.log("> Ready on port " + PORT);
    });
    // added if() for PWA
    // handle GET request to /service-worker.js
    // if (pathname === "/service-worker.js") {
    //   const filePath = join(__dirname, ".next", pathname);
    //
    //   app.serveStatic(req, res, filePath);
    // } else {
    //   handle(req, res, parsedUrl);
    // }
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
