const Category = require("../models/category");
const { errorHandler } = require("../helpers/dbErrorsHandler");

exports.categoryById = (req, res, next, id) => {
	Category.findById(id).exec((err, category) => {
		if (err || !category) {
			return res.status(400).json({
				error: "Category not found",
			});
		}
		req.category = category;
		next();
	});
};

exports.read = (req, res) => {
	res.json({
		category: req.category,
	});
};
exports.create = (req, res) => {
	const category = new Category(req.body);
	category.save((err, data) => {
		if (err) {
			return res.status(400).json({
				error: errorHandler(err),
			});
		}
		return res.json({ data });
	});
};

exports.update = (req, res) => {
	const category = req.category;
	category.name = req.body.name;
	category.save((err, category) => {
		if (err || !category) {
			return res.status(400).json({
				message: "category couldn't been updated",
			});
		}
		return res.json({ category });
	});
};


exports.remove = (req, res) => {
	const category = req.category;

	category.remove((err, category) => {
		if (err || !category) {
			return res.status(400).json({
				message: "category couldn't been deleted",
			});
		}
		return res.json({ message: "category deleted" });
	});
};
exports.list = (req, res) => {
	Category.find().exec((err, data) => {
		if (err) {
			console.log("Iam here");
			return res.status(400).json({
				error: errorHandler(err),
			});
		}
		res.json(data);
	});
};
