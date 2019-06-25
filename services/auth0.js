// src/Auth/Auth.js
import axios from "axios";
import auth0 from "auth0-js";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import { getCookieFromReq } from "../helpers/utils";

const CLIENT_ID = process.env.CLIENT_ID;

class Auth0 {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-hyxywe40.auth0.com",
      clientID: CLIENT_ID,
      redirectUri: `${process.env.BASE_URL}/callback`,
      responseType: "token id_token",
      scope: "openid profile"
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    // this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
          alert(`Error: ${err.error}. Check the console for further details.`);
        }
      });
    });
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the Access Token will expire at
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    Cookies.set("jwt", authResult.idToken);
  }
  logout() {
    Cookies.remove("jwt");

    this.auth0.logout({
      returnTo: process.env.BASE_URL,
      clientID: CLIENT_ID
    });
  }

  login() {
    this.auth0.authorize();
  }

  // isAuthenticated() {
  //   // Check whether the current time is past the
  //   // access token's expiry time
  //   const expiresAt = Cookies.getJSON("expiresAt");
  //   return new Date().getTime() < expiresAt;
  // }

  async getJWKS() {
    const res = await axios.get(
      "https://dev-hyxywe40.auth0.com/.well-known/jwks.json"
    );
    const jwks = res.data;
    return jwks;
  }

  async verifyToken(token) {
    if (token) {
      const decodedToken = jwt.decode(token, { complete: true });

      if (!decodedToken) return undefined;
      const jwks = await this.getJWKS();
      const jwk = jwks.keys[0];

      // BUILD CERTIFICATE
      let cert = jwk.x5c[0];
      cert = cert.match(/.{1,64}/g).join("\n");
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
      //

      if (jwk.kid === decodedToken.header.kid) {
        try {
          const verifiedToken = jwt.verify(token, cert);
          const expiresAt = verifiedToken.exp * 1000;

          return verifiedToken && new Date().getTime() < expiresAt
            ? verifiedToken
            : undefined;
        } catch (err) {
          return undefined;
        }
      }
    }
  }

  async clientAuth() {
    const token = Cookies.getJSON("jwt");
    const verifiedToken = await this.verifyToken(token);

    return verifiedToken;
  }

  //   serverAuth(req) {
  //     if (req.headers.cookie) {
  //       const expiresAtCookie = req.headers.cookie
  //         .split(";")
  //         .find(c => c.trim().startsWith("expiresAt="));
  //
  //       if (!expiresAtCookie) {
  //         return undefined;
  //
  //         const expiresAt = expiresAtCookie.split("=")[1];
  //         return new Date().getTime() < expiresAt;
  //       }
  //     } else {
  //       return undefined;
  //     }
  //   }
  // }
  async serverAuth(req) {
    if (req.headers.cookie) {
      const token = getCookieFromReq(req, "jwt");
      const verifiedToken = await this.verifyToken(token);
      return verifiedToken;
    }
    return undefined;
  }
}

const auth0Client = new Auth0();

export default auth0Client;
