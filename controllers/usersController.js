coonst pool = require('...dbconfig');


module.exports = {

	getByID: async (req, res) => {
		const = {id} = req.params;
		try {
			const   COPY PASTE .............
		}
	}
	getAll: async  (_, res) => {
		//res.send("good");
		try{
			const dbResponse = await pool.query('SELECT * FROM users');
			res.json({
				message: "Successful found all users",
				code: 200,
				description: "Array of all users in DB",
				data: dbResponse.rows
			})
		 }
		catch (e) {
			console.error(Error(e));
			res.sendStatus(500);
		}


	},
};

