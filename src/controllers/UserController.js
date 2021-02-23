import User from '../models/User';

class UserController{
    async store(req, res){
        try {
            const newUserValidation = await User.findOne({ email: req.body.email });

            if (newUserValidation){
                
                return res.status(400).json({ message: 'User already exist' });
            }

            const user = await User.create(req.body);

            return res.status(200).send({ user });

        }catch (err){
            return res.status(400).send({ message: 'Registration error' })
        }
    }
}

export default new UserController;