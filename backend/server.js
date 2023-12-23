import express from 'express';
import  Connection  from './database/db.js';
import router from './routes/route.js';
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import morgan from 'morgan';
const app = express();


const port = 8080;
dotenv.config()
// app.use('/',router);
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000', // Replace with the actual domain of your frontend
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    })
);
app.use(morgan('tiny'));
app.disable('x-powered-by');
app.use(bodyParser.json({ limit: '1gb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '1gb', extended: true }));

app.get('/',(req,res)=>{
    res.status(201).json("hello")
});

app.use('/api',router)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

const username = process.env.USER_ENV;
const password = process.env.USER_PASSWORD;
Connection(username,password)
