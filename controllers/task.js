import ErrorHandler from '../middlewares/error.js'
import {Task} from '../models/task.js'

export const newTask = async (req,res,next)=>{
    try{
        const {title, description} = req.body

        // const task =new Task({title})
        // await task.save()
    
        await Task.create({
            title:title,
            description:description,
            user:req.user,
        })
    
        res.status(201).json({
            success:true,
            message:"Task Added successfully"
        })
    }catch (error) { 
        next(error)
    }
}

export const getMyTask = async (req, res, next)=>{
    try {
        const userId = req.user._id

        const tasks = await Task.find({user:userId})

        res.status(201).json({
            success:true,
            message:"Task found Successfully",
            tasks:tasks,
        })
    } catch (error) {
        next(error)
    }
}

export const updateTask = async (req, res, next)=>{

    try {
        const task =await Task.findById(req.params.id)

        if(!task) return next(new ErrorHandler("Invalid Id: Id has been removed",404))

        task.isCompleted = !task.isCompleted

        await task.save()

        res.status(201).json({
            success:true,
            message:"Task Updated Successfully",
        })
    } catch (error) {
        next(error)
    }
}

export const deleteTask = async (req, res, next)=>{

    try {
        const task =await Task.findById(req.params.id)

        if(!task) return next(new ErrorHandler("Invalid Id: Id was deleted previously",404))

        await task.deleteOne()

        res.status(201).json({
            success:true,
            message:"Task Deleted Successfully",
        })
    } catch (error) {
        next(error)
    }
}