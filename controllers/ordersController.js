const pool = require("../dbconfig");

module.exports = {
  deleteByUserId: async (req, res, next) => {
    const { id } = req.params;
    try {
      const queryString = 'DELETE FROM "orders" WHERE user_id = $1;';
      const dbResponse = await pool.query(queryString, [id]);
      next();
    } catch (e) {
      console.error(Error(e));
      res.status(500).json({
        error: "Could not delete orders for user of id " + id,
        code: 500,
      });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const dbResponse = await pool.query(
        "SELECT * FROM orders JOIN users ON users.id = orders.user_id  WHERE orders.id=$1",
        [id]
      );
      res.json({
        message: "Successfully found order with id " + id,
        code: 200,
        description: "Order with id " + id,
        data: dbResponse.rows[0],
      });
    } catch (e) {
      console.error(Error(e));
      res.sendStatus(e.code);
    }
  },
  getAll: async (_, res) => {
    try {
      const dbResponse = await pool.query(
        "SELECT * FROM orders JOIN users ON users.id = orders.user_id"
      );
      res.json({
        message: "Successfully found all orders",
        code: 200,
        description: "Array of all orders in db",
        data: dbResponse.rows,
      });
    } catch (e) {
      console.error(Error(e));
      res.sendStatus(500);
    }
  },
};
