import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';

const { Pool } = pkg;

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Error connecting the databse', err);
    } else {
        console.log('Connected to the databse at', res.rows[0].now);
    }
})

app.get('/', (req, res) => {
    res.json({message: 'Welcome to MentorConnect API'});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke!')
})