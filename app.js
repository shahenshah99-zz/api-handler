const express = require('express');
const app = express();
app.use((req,res,next) => {
  res.status(200).json({
    message: 'Hey there!'
  });
});
app.use((res,req,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error,res,req,next) => {
    res.status(error.status || 500);
    res.json({
      error: {
            message: error.message
        }
    });
});
module.exports = app;
const usersRoutes = require('/root/api/routes/users');
app.use('/users',usersRoutes);
