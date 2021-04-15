const { Post } = require('../models');

const postData = [
  {
    post_title: 'Test Post',
    create_date: 'April 20, 2021 07:00:00',
    contents: 'This is my test post. I\'m writing a test post because I need to test a post. Thank you for reading this post, which is testing whether or not I can post',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
