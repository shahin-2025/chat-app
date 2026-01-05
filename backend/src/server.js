import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();


if(process.env.node_env === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend','dist','index.html'));
    });
}

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});