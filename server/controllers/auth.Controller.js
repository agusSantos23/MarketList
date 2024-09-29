import dotenv  from 'dotenv';

import User from '../models/user.js';
import { hashPassword, verifyPassword } from '../lib/bcryptHash.js';
import { createdAccessToken } from '../lib/jwt.js';


dotenv.config();

export const register = async ( req, res ) =>{

  const { username, email, password } = req.body;

  if (!username || !email || !password) return res.status(400).json({ message: "All fields are required"})
  

  try {
    
    const userExists = await User.findOne({ where: { email }});
    if (userExists) return res.status(400).json({ message: "Email in use"})
    

    const newUser = await User.create({
      username,
      email,
      password: await hashPassword(password)
    })


    res.status(201).json({ message: "User register successfully"});

  } catch (error) {    
    res.status(500).json({ message: "Error to register user", error });
  }

}

export const login = async ( req, res ) => {

  const { email, password } = req.body;

  if ( !email || !password) return res.status(400).json({ message: "All fields are required"})
  

  try {
    
    const user = await User.findOne({ where: {email} });
    if (!user) return res.status(400).json({ message: "Incorrect credentials"})


    
    const samePassword = await verifyPassword(password, user.password)

    if (! samePassword ) return res.status(400).json({ message: "Incorrect credentials"})

    const token = await createdAccessToken({
      id: user.id,
      username: user.username,
      email: user.email,
    })

  
    res.cookie('tokenMarketList', token)

    res.status(200).json({message: "Login successfully"});

  } catch (error) {    
    res.status(500).json({ message: "Error Login", error})
  }

}
