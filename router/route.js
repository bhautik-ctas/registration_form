import express from "express";
const route = express.Router()
import studentApi from '../controller/firstController.js'

route.get('/read',studentApi.readData)
route.post('/create',studentApi.createData)
route.patch('/update/:id',studentApi.updateData)
route.delete('/delete/:id',studentApi.deleteData)

export default route
