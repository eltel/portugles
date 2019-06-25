const express = require("express");
const router = express.Router();
const authService = require("../services/auth");

const portfolioController = require("../controllers/portfolio");

router.post(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioController.savePortfolio
);

router.get("", portfolioController.getPortfolios);

router.get("/:id", portfolioController.getPortfolioById);

router.patch(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioController.updatePortfolio
);

router.delete(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioController.deletePortfolio
);

module.exports = router;
