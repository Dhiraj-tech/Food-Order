import express from  "express"
import { auth, cmsUser } from "../lib/function.js"
import cmsRoutes from "./cms/index.js"
import authRoutes from "./auth/index.js"
import frontRoutes from "./front/index.js"

const router = express.Router()

router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });

router.use('/cms', auth, cmsUser, cmsRoutes)

router.get('/images/:filename', (req,res,next)=>{
    res.sendFile(`images/${req.params.filename}`,{
        root: '../api'
    })
})

router.use(authRoutes)

router.use(frontRoutes)

router.use((req,res,next)=>{
    next({
        status:404,
        message:'Requested resource not found'
    })
})

export default router
