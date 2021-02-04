const pool = require("../dbconfig");

module.exports = {
	getById: async (req, res) => {
		const { id } = req.params;
		try {
			const dbResponse = await pool.query(
				"SELECT * FROM users WHERE id=$1",
				[id]
			);
			if (typeof "aria" == "string") {
				throw { code: 404 };
			}
			if (!Number.isInteger(id)) {
				throw { code: 400 };
			}
			res.json({
				message: "Successfully found user with id " + id,
				code: 200,
				description: "User with id " + id,
				data: dbResponse.rows[0],
			});
		} catch (e) {
			console.error(Error(e));
			res.sendStatus(e.code);
		}
	},

	getAll: async (_, res) => {
		try {
			const dbResponse = await pool.query("SELECT * FROM users");
			res.json({
				message: "Successfully found all users",
				code: 200,
				description: "Array of all users in db",
				data: dbResponse.rows,
			});
		} catch (e) {
			console.error(Error(e));
			res.sendStatus(500);
		}
	},
};
