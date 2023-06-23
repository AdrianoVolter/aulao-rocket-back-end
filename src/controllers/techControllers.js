const Tech = require('../models/Techs');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        const { user_id } = req.params;

        const user  = await User.findByPk(user_id,{
            include: { association: 'techs', through: { attributes: [] } }
        });

        if(!user){
            return res.status(400).json({error: 'User not found!'})
        }
        return res.json(user)
        
    },


    async store(req, res ){
        const { user_id } = req.params;
        const { name } = req.body;

        const user  = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'User not found!'})
        }

        const [ tech ] =  await Tech.findOrCreate({
            where: { name }
        })
        await user.addTech(tech)
        return res.json(tech);
    },

    async delete (req, res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user  = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({error: 'User not found!'})
        }
        if(!name){
            return res.status(400).json({error: 'Tech name not found!'})
        }
        const tech = await Tech.findOne({
            where: { name }
        })
        await user.removeTech(tech)
        return res.json(
            {message: `Tech ${name} removed with success!`}
        );
    }



};

