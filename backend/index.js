import express from 'express';
import dotenv from 'dotenv'
import databaseConnection from './db.js';
// import path from 'path';
import userRoute from './Routes/userRoute.js';
import BookRoute from './Routes/BookRoute.js'
import cors from 'cors';
dotenv.config()
const app = express()

// iske bina sala lop me chlega pr registration nhi lega
const corsOptions = {  
  origin: '*', // Be cautious with '*' in production; specify allowed origins
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json()) // parse sent data to json
// const port = process.env.PORT || 4000

app.use('/api/user', userRoute)
app.use('/api/books', BookRoute)

// deployment
// if (process.env.NODE_ENV === 'production'){
// const dirPath = path.resolve()
// app.use(express.static(`frontend/build`))
// app.get('*', (req,res) => {
//   res.sendFile(path.resolve(dirPath, 'frontend', 'build', 'index.html'))
// })
// }

databaseConnection();
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.get('/', (req, res) => {
  res.send({
    active : "True"
  })
})
export default app;