import  Express  from "express";
import cors from 'cors';
import Routes from "./routes/routes";
const app = Express();


app.use(cors());
app.use(Express.urlencoded({extended:false}));
app.use(Express.json());
app.use("/", Routes)

export default app;