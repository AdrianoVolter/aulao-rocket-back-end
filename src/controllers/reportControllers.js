const User = require('../models/User');
const { Op } = require('sequelize');

module.exports = {
    async show(req, res){
        // econtrar users que tem email que termina com @gmail
        // desses usuarios eu quero buscar todos que moram na rua "Rua Donato"
        // desses usuarios eu quero buscar as tecnologias que começam com React

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.like]: '%@adriano.com' 
                    
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Rua Donato ' } }, // endereços
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'React%'
                        }
                    }
                }, // tecnologias
            ]
        })
        return res.json(users)
    }
};