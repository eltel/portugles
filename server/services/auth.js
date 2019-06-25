const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const config = require("../config");

const NAMESPACE = config.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsperMinute: 50,
    jwksUri: "https://dev-hyxywe40.auth0.com/.well-known/jwks.json"
  }),
  audience: "vVvNb09t7jvheby81mzhkYmvOugCDvCX",
  issuer: "https://dev-hyxywe40.auth0.com/",
  algorithms: ["RS256"]
});

exports.checkRole = role => (req, res, next) => {
  const user = req.user;
  if (user && user[NAMESPACE + "/role"] && user[NAMESPACE + "/role"] === role) {
    next();
  } else {
    return res.status(401).send({
      title: "Unauthorized",
      details: "You are not authorized to access this content"
    });
  }
};
