import dotenv from 'dotenv';    
import app from './app.js';
import connectDb from './config/db.js';

dotenv.config();
connectDb();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`);
    
})