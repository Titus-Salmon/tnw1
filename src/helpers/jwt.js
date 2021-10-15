const expressJwt = require("express-jwt");

function authJwt() {
  const secret = process.env.BCRYPT_SECRET;
  const api = process.env.API_URL;
  return expressJwt({
    secret,
    algorithms: ["HS256"],
    isRevoked: isRevoked,
  }).unless({
    path: [
      { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
      { url: /\/api\/v1\/categories(.*)/, methods: ["GET", "OPTIONS"] },
      `${api}/users/login`,
      `${api}/users/register`,
      `/`,
      { url: /\/pages\/(.*)/ },
      { url: /\/client\/(.*)/ },
      { url: /\/img\/(.*)/ },
      { url: /\/manifest.json/ },
      { url: /\/global.css/ },
      { url: /\/logo-192.png/ },
    ],
  });
}

async function isRevoked(req, payload, done) {
  if (!payload.isAdmin) {
    done(null, true);
  }

  done();
}

module.exports = authJwt;
