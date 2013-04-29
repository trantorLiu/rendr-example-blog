var express = require('express');

//
// This is the error handler used with Rendr routes.
//
module.exports = function() {
  return function errorHandler(err, req, res, next) {
    if (err.status === 401) {
      res.redirect('/login');
    } else {
      express.errorHandler()(err, req, res, next);
    }
  };
};
