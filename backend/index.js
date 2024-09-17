import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import routes from './routes/routes.js'
const app = express();
dotenv.config();

connectDB();


app.use(cors());
app.use(express.json());

app.use('/api',routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});