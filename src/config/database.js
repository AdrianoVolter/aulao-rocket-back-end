const dotenv = require('dotenv');

dotenv.config();

module.exports ={
    host: process.env.HOST ,
    dialect: process.env.DIALECT ,
    username: process.env.USERNAMEDB ,
    password: process.env.PASSWORDDB ,
    database: process.env.DATABASE ,
    port: process.env.PORT ,
    define: {
        timestamps: true,
        underscored: true,
    },
}