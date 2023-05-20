const {Comments} = require('../models')

const comments = [
    {
        text_content: "Ur a sicko... nobody wants to play music with you",
        user_id: "1",
        post_id: "2"
    },
    {
        text_content: "I dont know how to play guitar but do you want to write a song with me?",
        user_id: "2",
        post_id: "1"
    }
]

const seedComments = () => Comments.bulkCreate(comments);

module.exports = seedComments;