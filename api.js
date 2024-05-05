const express = require("express");
const cors = require("cors");
const AppError = require('./error/app.error')
const adminRouter = require('./routes/auth.route')
const ErrorController = require('./controllers/Error/error.controller')
const app = express()
app.use(cors())
app.use(express.json())



app.use('/api/v1/admin',adminRouter)

app.all('*',(req,res,next) => {
    // const err = new Error(`can't find ${req.originalUrl} on this server`)
    // err.status = 'failed'
    // err.statusCode = 404
    
    next(new AppError(`can't find ${req.originalUrl} on this server`,404))
    })
    
    app.use(ErrorController)
    
    
    module.exports = app;
