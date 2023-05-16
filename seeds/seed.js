const sequelize = require('../config/connection');
const {User} = require('../models');

const userData = require('./users.json');

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    const users = await User.bulkCreate(userData,{
        individualHooks: true,
        returning: true,
        user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    process.exit(0);
};

seedDatabase();