const express = require("express");
const router = express.Router();

const { requireSignin, isAdmin, isAuth } = require("../controllers/auth");
const { userById, read, update } = require("../controllers/user");

router.param("userId", userById); //Any time we have userID param, userById method will be executed

router.get("/:userId", requireSignin, isAuth, read);
router.put("/:userId", requireSignin, isAuth, update);
router.get("/secret/:userId", requireSignin, (req, res) => {
	res.json({
		user: req.profile,
	});
});

router.param("userId", userById); //Any time we have userID param, userById method will be executed

module.exports = router;
