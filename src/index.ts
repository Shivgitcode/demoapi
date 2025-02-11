import express from "express"
import dotenv from "dotenv"
import { router as userRouter } from "./routes/user.js";

dotenv.config()
const port = process.env.PORT
const app = express();



app.use("/api/v1/", userRouter);

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(port, () => {
    console.log("listening on port 8000")
})
