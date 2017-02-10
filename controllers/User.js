'use strict';

var url = require('url');

var User = require('./UserService');

module.exports.addKeywordPOST = function addKeywordPOST (req, res, next) {
  User.addKeywordPOST(req.swagger.params, res, next);
};

module.exports.userKeywordsPOST = function userKeywordsPOST (req, res, next) {
    User.userKeywordsPOST(req.swagger.params, res, next);
};

module.exports.loginPOST = function loginPOST (req, res, next) {
  User.loginPOST(req.swagger.params, res, next);
};

module.exports.threadGET = function threadGET (req, res, next) {
  User.threadGET(req.swagger.params, res, next);
};

module.exports.threadsDateGET = function threadsDateGET (req, res, next) {
  User.threadsDateGET(req.swagger.params, res, next);
};

module.exports.threadsGET = function threadsGET (req, res, next) {
  User.threadsGET(req.swagger.params, res, next);
};

module.exports.threadsBriefGET = function threadsBriefGET (req, res, next) {
    User.threadsBriefGET(req.swagger.params, res, next);
};

module.exports.userKeywordsGET = function userKeywordsGET (req, res, next) {
    User.userKeywordsGET(req.swagger.params, res, next);
};

module.exports.filteredThreadByUserGET = function filteredThreadByUserGET (req, res, next) {
    User.filteredThreadByUserGET(req.swagger.params, res, next);
};