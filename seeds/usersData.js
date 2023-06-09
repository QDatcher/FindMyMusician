const { User } = require('../models')

const userData = [
    {
        username: "testuser1",
        first_name: "Joe",
        last_name: "Shmo",
        email: "joeshmo@gmail.com",
        password: "password",
        bio: "Love music.",
        project_links: "spotify.com",
        location: "ur moms house",
        profile_pic: "photo"
    },
    {
        username: "testuser2",
        first_name: "Sally",
        last_name: "Walker",
        email: "littlesallywalker@gmail.com",
        password: "password",
        bio: "I play guitar",
        project_links: "soundcloud.com",
        location: "the street",
        profile_pic: "photo"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;