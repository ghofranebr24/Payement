const express = require("express");
const router = express.Router();

const {
	create,
	categoryById,
	read,
	update,
	remove,
	list,
} = require("../controllers/category");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.param("userId", userById);
router.param("categoryId", categoryById);

router.get("/all", list);
router.get("/:categoryId", read);
router.post("/create/:userId", requireSignin, isAuth, isAdmin, create);
router.put("/:categoryId/:userId", requireSignin, isAuth, isAdmin, update);
router.delete("/:categoryId/:userId", requireSignin, isAuth, isAdmin, remove);

router.param("categoryId", categoryById);
router.param("userId", userById);
module.exports = router;
