import express from "express"

const app = express()

app.use(express.json());

//import routes here
import hw from "./routes/user.route.js";

//routes declaration
app.use("/", hw)
export default app;