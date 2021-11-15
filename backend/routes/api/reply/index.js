const router = require("express").Router();
const controller = require("./reply.controller");
const { checkRole } = require("./reply.controller");
const { ADMIN, OWNER, USER } = require("../../../config");

router
  .route("/:reviewId")
  .post(checkRole(ADMINA), controller.create)
  .patch(checkRole(ADMIN), controller.update)
  .delete(checkRole(ADMIN), controller.delete);

module.exports = router;
