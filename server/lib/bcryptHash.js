import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const saltRounds = parseInt(process.env.SALT);

export const hashPassword = async (password) => {
    try {

        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword

    } catch (error) {

        console.error('Error password hashed:', error)
    }
}

export const verifyPassword = async (password, hashedPassword) => {
    try {
        
        const match = await bcrypt.compare(password, hashedPassword)
        if (match) {
            return true
        } else {
            return false
        }

    } catch (error) {

        console.error("Error password verify:", error)
    }
}

