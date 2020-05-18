exports.productValidator = (req, res, next) => {
	req.check("name", "Name is required").notEmpty();
	req.check("description", "description is required").notEmpty();
	req
		.check("price", "price is required")
		.notEmpty()
		.isFloat({ gt: 1.0 })
		.withMessage("lowest price is 1$");
	req
		.check("quantity", "quantity is required")
		.isInt({ gt: 0 })
		.withMessage("quantity must be positive");
	req.check("shipping", "Shipping is required").notEmpty();
	req.check("photo", "photo is required").notEmpty();

	const errors = req.validationErrors();
	if (errors) {
		const firstError = errors.map((error) => error.msg)[0];
		return res.status(400).json({ error: firstError });
	}
	next();
};
