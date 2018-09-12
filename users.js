//users.js
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
  res.status(200).json({
    message: 'Handling GET request of the /users'
  });
});



router.post('/',(req,res,next) => {
  res.status(201).json({
    message: 'Handling POST request of the /users'
  });
});



router.delete('/',(req,res,next) => {
  res.status(200).json({
    message: 'User details have been successfully deleted' // deleting user;
  });
});
module.exports = router
