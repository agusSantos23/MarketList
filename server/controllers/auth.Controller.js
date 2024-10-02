import dotenv  from 'dotenv';

import User from '../models/user.js';
import { hashPassword, verifyPassword } from '../lib/bcryptHash.js';
import { createdAccessToken, verifyJWT } from '../lib/jwt.js';


dotenv.config();

export const register = async ( req, res ) =>{

  const { username, email, password } = req.body;

  if (!username || !email || !password) return res.status(400).json({ message: "All fields are required"})
  

  try {
    const loweredEmail = email.toLowerCase();
    
    const userExists = await User.findOne({ where: { email: loweredEmail }});
    if (userExists) return res.status(400).json({ message: "Email in use"})
    

    const newUser = await User.create({
      username,
      email: loweredEmail,
      password: await hashPassword(password)
    })

    const { password: _, ...userEnd } = newUser.dataValues;

    res.status(201).json(userEnd);

  } catch (error) {    
    res.status(500).json({ message: "Error to register user", error });
  }

}

export const login = async ( req, res ) => {

  const { email, password } = req.body;

  if ( !email || !password) return res.status(400).json({ message: "All fields are required"})
  

  try {
    const loweredEmail = email.toLowerCase();
    
    const user = await User.findOne({ where: {email: loweredEmail} });
    if (!user) return res.status(400).json({ message: "Incorrect credentials"})

    
    const samePassword = await verifyPassword(password, user.password)

    if (! samePassword ) return res.status(400).json({ message: "Incorrect credentials"})

    const token = await createdAccessToken({
      id: user.id,
      username: user.username,
      email: user.email,
    })

  
    res.cookie('tokenMarketList', token,{
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
      maxAge: 24 * 60 * 60 * 1000
    })

    res.status(200).json({message: "Login successfully"});

  } catch (error) {    
    res.status(500).json({ message: "Error Login", error})
  }

}

export const logout = async ( req, res ) => {
  try {
    
    res.clearCookie('tokenMarketList', { httpOnly: true, secure: true, sameSite: 'Strict' })
    
    return res.status(200).json({ message: "Cookie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error delete cookie"})
  }  
}
 
export const verifyToken = async ( req, res ) => {
  
  const token = req.cookies.tokenMarketList

  if(!token) return res.status(401).json({ message: 'Token not provided'})

  try {
    
    const decoded = await verifyJWT(token)
      
    return res.status(200).json({user: decoded})
  } catch (error) {
    return res.status(403).json({ message: 'Invalid Token'})
  }
}