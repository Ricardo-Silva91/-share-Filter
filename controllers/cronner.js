/**
 * Created by Ricardo on 09/02/2017.
 */


var fs = require("fs");
var async = require("async");

var paths = require('./../paths');
var general_operations = require('./general_operations');

var cron = require('cron');
//var cronJob = cron.job("*/2 * * * * *", function () {
var cronJob = cron.job("0 0 * * * *", function () {

    var filesPath = [paths.threads_path];

    async.map(filesPath, function (filePath, cb) { //reading files or dir
        fs.readFile(filePath, 'utf8', cb);
    }, function (err, results) {

        var threads = JSON.parse(results[0]);


        general_operations.getThreadsFrom4Chan(function (newThreads) {


            //console.log("threads before:\n" + threads);
            threads = general_operations.updateThreads(threads, newThreads);
            //console.log("threads:\n" + threads);


        });


    });

    // perform operation e.g. GET request http.get() etc.
    console.info('cron job completed');
});
cronJob.start();