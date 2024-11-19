const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database')

exports.register = async (req, res) => {
    const {name, email, password, role} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.query(
            'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $3) RETURNING id, name, email, role',
            [name, email, password, role]
        );

        const token = jwt.sign({ userId: result.rows[0].id }, process.env.JWT_SECRET, {expiresIn: 'id'})
    }
}