import app from "./server";
import "dotenv/config";

const PORT:number | string  = process.env.PORT || 5000;  

app.listen(PORT, () => console.log("running at port:", PORT));