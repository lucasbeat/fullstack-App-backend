import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import auth from '../config/auth';
import User from '../models/User';

class SessionController{
    async store(req, res){
        const { email, password } = req.body;

        const user = await User.findOne({ email } ).select('+password');

        if(!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        if(! await bcrypt.compare(password, user.password)){
            return res.status(400).json({ message: 'Invalid password' });
        }

        const { id, name } = user;

        return res.json({
            user:{
                id,
                name
            },
            token: jwt.sign({ id }, auth.secret, {
                expiresIn: auth.expiresIn,
            }),
        })
    }
}

export default new SessionController;