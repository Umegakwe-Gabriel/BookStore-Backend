import express, {Application} from "express"
import mongoose from "./Config/Database"
import Router from "./Router/BookRouter";

const port: number = 3500;

//Extantiated my server from express
const app: Application = express();
mongoose;
app.use(express.json())

//Configuring the routes for the project
app.use("/api", Router)
app.listen(port, ()=>{
    console.log("App is listening to database", port);    
})

