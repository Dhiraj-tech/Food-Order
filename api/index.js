import express from "express"
import routes from "./routes/index.js"
import { config } from "dotenv"
import db from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

config()

const app = express()






app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://food-order-sepia-alpha.vercel.app/"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  });



app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(routes)

app.use((err, req, res, next)=>{
    res.status(err.status || 400)
        .json({message: err.message || 'There seems to be some problem.'})
})

app.listen(process.env.API_PORT, process.env.API_HOST, async ()=>{
    console.log(`Server started on http://${process.env.API_HOST}:${process.env.API_PORT}`)
    console.log('Press Ctrl+C to stop')
    
    await db.connect(process.env.MONGO_URL)
    console.log('MongoDB connected')
    
})


