const { Posts } = require('../models')

const postsData = [
    {
        title: "Please someone help me!!!",
        text_content: "Really need someone who knows how to tear up a guitar. My guitarist got the COVIDs and we have a set tomorrow night we can't bail on. You wont get paid.",
        tag: "guitar",
        user_id: "1"
    },
    {
        title: "Looking for a groovy person to collab with",
        text_content: "I have never written a song or played an instrument but I want to write a song so bad. I need someone who knows how to write compose and play, however is totatlly okay not being named on the track or record. I want everyone to think I was able to do this by myself. Willing to do some pretty scary things for this collab. Please reply if interested!",
        tag: "Collaboration",
        user_id: "2"
    }
];

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;
