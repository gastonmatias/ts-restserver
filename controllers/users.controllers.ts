import { Request, Response } from "express"
import User from "../models/user"

//! READ ALL
export const getUsers = async (req : Request,res: Response) => {
    
    const users = await User.findAll()

    res.status(200).json({
        msg:'get usuarios',
        users
    })
}

//! READ ONE
export const getUserById = async (req : Request,res: Response) => {
    
    const {id} = req.params

    const user = await User.findByPk(id)

    if (!user) {
        return res.status(404).json({
            msg:'user not found!'
            
        })
    }
    
    res.status(200).json({
        msg:'get User x id',
        user
    })
}

//! CREATE
export const postUser = async(req : Request,res: Response) => {
    
    const {name, email, status} = req.body

    try {
        
        const emailExists = await User.findOne({ where: {email } })
        
        if (emailExists) {
            return res.status(400).json({
                msg:'Email already registered'
            })
        }
        
        // Create a new user
        const newUser = await User.create({ 
            name, email,status
        });
        
        res.status(200).json({
            msg:'user Created',
            newUser
        })

    } catch (err) {
        console.log(err);

        res.status(500).json({
            msge: 'Contact the admin'
        })
    }
    
}

//! UPDATE
export const putUser = async(req : Request,res: Response) => {
    
    const {id} = req.params
    const {name, email, status } = req.body

    try {
        // valida que usuario a actualizar efectivamente exista
        const userExists = await User.findByPk(id)
        
        if (!userExists) {
            return res.status(400).json({
                msg: `there's no user with id ${id}`
            })
        }

        // actualizacion user
        const updateUser = await User.update(
            {name,email,status},
            {
                where: {id},
                returning: true
            }
        )

        const [,user] = updateUser

        res.status(200).json({
            msg:'user updated!',
            user
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            msge: "Contact the admin"
        })
    }
    
}

//! DELETE
export const deleteUser = async(req : Request,res: Response) => {
    
    const {id} = req.params
    
    try {
        
        const userExists = await User.findByPk(id)

        if (!userExists) {
            return res.status(400).json({
                msg: `there's no user with id ${id}`
            }) 
        }

        const userToDelete = await User.destroy({
            where:{id}
        })

        res.status(200).json({
            msge: 'User deleted!'
        })

    } catch (err) {
        console.log(err);
        
        res.status(500).json({
            msg:'Contact the admin'
        })
    }

}


