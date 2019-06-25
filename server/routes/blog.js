const express = require("express");
const router = express.Router();
const authService = require("../services/auth");

const blogController = require("../controllers/blog");

router.get("", blogController.getBlogs);

router.get(
  "/me",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  blogController.getUserBlogs
);

router.get("/s/:slug", blogController.getBlogBySlug);

router.post(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  blogController.createBlog
);

router.get("/:id", blogController.getBlogById);

router.patch(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  blogController.updateBlog
);

router.delete(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  blogController.deleteBlog
);

module.exports = router;
