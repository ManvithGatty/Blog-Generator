import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());









// Server start
const PORT = 5000 
app.listen(PORT,function(){
    console.log(`Server running on PORT ${PORT}`);
})