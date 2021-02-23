import User from '../models/user';

class UserController{
    async store(req, res){
        try {
            const user = await User.create(req.body);

            return res.status(200).send({ user });

        }catch (err){
            return res.status(400).send({ message: 'Registration error' })
        }
    }
}

export default new UserController;