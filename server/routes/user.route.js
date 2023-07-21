const router = require("express").Router();
const userController = require("../controller/user.controller");

router.post("/users", userController.createUser);
router.get("/getusers", userController.getAllUsers);

module.exports = router;
