const sequelize = require('../config/connection');
const {User} = require('../models');
const seedComments = require('./commentsData');
const seedPosts = require('./postsData');
const seedUser = require('./usersData');



const seedDatabase = async () => {
    await sequelize.sync({force: true});

    // await User.bulkCreate(userData,{
    //     individualHooks: true,
    //     returning: true,
    // });

    await seedUser();
    await seedPosts();
    await seedComments();
    process.exit(0);

};

seedDatabase();