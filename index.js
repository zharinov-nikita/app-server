// importing dependencies
import express from "express"
import cors from "cors"
import mongoose from "mongoose"

// importing dependencies





// import routes => импортируем router при создании нового микросервиса
import linkRouter from "./microservices/link/routes/router.js"
import seoRouter from "./microservices/seo/routes/router.js"
// import routes => импортируем router при создании нового микросервиса




// express app setting 
const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3030
// express app setting





// routes => регистрируем роутер при создании нового микросервиса
app.use('/microservice', linkRouter)
app.use('/microservice', seoRouter)
// routes => регистрируем роутер при создании нового микросервиса



// start app and connect mongodb => подлючение к базе данных + запуск приложения
async function start() {
    try {
        await mongoose.connect('mongodb://localhost:27017/dev')
        app.listen(PORT, () => console.log(`The server started on the port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()
// start app and connect mongodb => подлючение к базе данных + запуск приложения

