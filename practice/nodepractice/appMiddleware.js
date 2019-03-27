const express = require('express');
const router = express.Router();
//const port = 3000;

router.use((req,res,next) => {
    console.log(`logged ${req.url}  ${req.method} -- ${new Date()}`);
    next();
})
//no need of app when router instance of Router class is created
 //const app = express();
//application leve middleware
//app.use(loggerMiddleware);

//users route
router.get('/users',(req,res)=>{
    res.json({'status':true})
})
router.post('/users',(req,res)=>{
    res.json({'status':false})
})

/* express().listen(port,(req,res)=>{
    console.log(`you are at port  ${port}`);
}) */
module.exports = router