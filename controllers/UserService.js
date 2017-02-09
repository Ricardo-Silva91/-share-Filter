'use strict';

var fs = require("fs");
var async = require("async");
var randomstring = require("randomstring");

var paths = require('./../paths');
var general_operations = require('./general_operations');


exports.addKeywordPOST = function (args, res, next) {
    /**
     * new keyword
     * Adds a new keyword to the key list.
     *
     * body AddKeyword_req request. (optional)
     * returns Ok_res
     **/
    var examples = {};
    examples['application/json'] = {
        "result": "aeiou"
    };
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

exports.loginPOST = function (args, res, next) {
    /**
     * login
     * user sends credentials and gets token.
     *
     * body Login_info request. (optional)
     * returns login_res
     **/
    var examples = {};
    examples['application/json'] = {
        "result": "aeiou",
        "token": "aeiou"
    };
    if (Object.keys(examples).length > 0) {

        var username = args.body.value.user;
        var pass = args.body.value.pass;

        var filesPath = [paths.users_path];

        async.map(filesPath, function (filePath, cb) { //reading files or dir
            fs.readFile(filePath, 'utf8', cb);
        }, function (err, results) {

            var users = JSON.parse(results[0]);

            var userPos = general_operations.checkUserAndGetPosByCredentials(users, username, pass);

            if (userPos > -1) {
                users[userPos].last_access = new Date();
                users[userPos].current_token = randomstring.generate();

                fs.writeFile(paths.users_path, JSON.stringify(users), function (err) {
                    console.error(err)
                });

                examples = {
                    result: "success",
                    token: users[userPos].current_token
                };

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples, null, 2));

            }
            else {
                switch (userPos) {
                    case -1:
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({
                            result: "fail",
                            code: -1,
                            message: "user not found",
                            fields: "username"
                        }));
                        break;
                    case -2:
                        res.setHeader('Content-Type', 'application/json');
                        res.end(JSON.stringify({
                            result: "fail",
                            code: -2,
                            message: "wrong password",
                            fields: "pass"
                        }));
                        break;
                    default:
                        break;
                }
            }


        });

    } else {
        res.end();
    }
}

exports.threadGET = function (args, res, next) {
    /**
     * get Thread by id
     * get one thread from the server, by id.
     *
     * token String The user's token
     * threadId String The thread's id
     * returns thread
     **/
    var examples = {};
    examples['application/json'] = {
        "com": "aeiou",
        "ext": "aeiou",
        "no": 123,
        "pub_date": "aeiou",
        "filename": "aeiou",
        "posts": [{
            "com": "aeiou",
            "ext": "aeiou",
            "no": 123,
            "pub_date": "aeiou",
            "keyWords": ["aeiou"],
            "filename": "aeiou"
        }]
    };
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

exports.threadsDateGET = function (args, res, next) {
    /**
     * get Threads after a date
     * get threads from the server, starting from given date.
     *
     * token String The user's token
     * date String The date
     * returns threads
     **/
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
    } else {
        res.end();
    }
}

exports.threadsGET = function (args, res, next) {
    /**
     * get All Threads
     * get every thread in the server
     *
     * token String The user's token
     * returns threads
     **/
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {

        var userToken = args.token.value;

        var filesPath = [paths.users_path, paths.threads_path];

        //console.log(paths.users_path);


        async.map(filesPath, function (filePath, cb) { //reading files or dir
            fs.readFile(filePath, 'utf8', cb);
        }, function (err, results) {

            var users = JSON.parse(results[0]);
            var threads = JSON.parse(results[1]);
            //console.log(userToken);

            //console.log(users);

            var userPos = general_operations.getUserPosByToken(users, userToken);

            if (userPos != -1) {
                //examples.userPos = userPos;
                examples = threads;
                examples.result = "success";

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples, null, 2));

            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                    result: "fail",
                    code: 1,
                    message: "user not found",
                    fields: "token"
                }));
            }


        });

    } else {
        res.end();
    }
}

exports.filteredThreadByUserGET = function (args, res, next) {
    /**
     * get All Threads
     * get every thread in the server
     *
     * token String The user's token
     * returns threads
     **/
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {

        var userToken = args.token.value;
        var threadId = args.threadId.value;

        var filesPath = [paths.users_path, paths.threads_path];

        //console.log(paths.users_path);


        async.map(filesPath, function (filePath, cb) { //reading files or dir
            fs.readFile(filePath, 'utf8', cb);
        }, function (err, results) {

            var users = JSON.parse(results[0]);
            var threads = JSON.parse(results[1]);
            //console.log(userToken);

            //console.log(users);

            var userPos = general_operations.getUserPosByToken(users, userToken);
            var threadPos = general_operations.getThreadPosById(threads, threadId);

            if (userPos != -1 && threadPos != -1) {
                //examples.userPos = userPos;
                examples = general_operations.filterThreadByKeywords(threads[threadPos], users[userPos].keywords);
                examples.result = "success";

                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(examples, null, 2));

            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                    result: "fail",
                    code: 1,
                    message: "user or thread not found",
                    fields: "token or threadId"
                }));
            }


        });

    } else {
        res.end();
    }
}

