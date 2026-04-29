import app from "./app";
import connectDB from "./config/db.config";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3000;

connectDB();

app.listen(PORT, () => {
 console.log(`Server running on ${PORT}`);
});