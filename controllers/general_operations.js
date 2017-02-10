/**
 * Created by Ricardo on 09/02/2017.
 */

var request = require("request");


exports.getUserPosByToken = function (users, token) {
    var result = -1;

    for (var i = 0; i < users.length; i++) {

        //console.log('private getUserPosByToken: checking user ' + users[i].username);
        //console.log('private getUserPosByToken: user ' + users[i].username + ' token ' + users[i].current_token);

        if (users[i].current_token == token) {
            console.log('private getUserPosByToken: user found.');
            result = i;
            break;
        }
    }
    return result;

};

exports.checkUserAndGetPosByCredentials = function (users, username, pass) {
    var result = -1;

    for (var i = 0; i < users.length; i++) {

        if (users[i].username == username) {
            if (users[i].password == pass) {
                result = i;
            }
            else {
                result = -2;
            }

            break;
        }

    }
    return result;

};

exports.getThreadPosById = function (threads, threadId) {
    var result = -1;

    for (var i = 0; i < threads.length; i++) {

        //console.log('private getUserPosByToken: checking user ' + users[i].username);
        //console.log('private getUserPosByToken: user ' + users[i].username + ' token ' + users[i].current_token);

        if (threads[i].no == threadId) {
            console.log('private getThreadPosById: thread found.');
            result = i;
            break;
        }
    }
    return result;

};

exports.filterThreadByKeywords = function (thread, keywords) {

    var filteredThread = [];

    for (var i = 0; i < thread.posts.length; i++) {
        if (searchTextForWords(thread.posts[i].com, keywords) == true) {
            filteredThread.push(thread.posts[i]);
        }
    }

    return filteredThread;

};

exports.getThreadsFrom4Chan = function (cb) {

    console.log("private method getThreadsFrom4Chan entered");
    var host_url = chanUrl + "catalog.json";
    console.log("private method getThreadsFrom4Chan host url: " + host_url);


    request({
        url: host_url,
        method: "GET",
        json: true
    }, function (error, response, body) {
        if (response != null) {
            if (!error && response.statusCode === 200) {
                //cb(body);
                //console.log(body);

                var shareThreads = filterForShareThreads(body);
                //console.log(shareThreads);

                cb(shareThreads);
            }
            else {

                console.log("error.");
                cb("no_ack");
            }
        }
        else {

            console.log("no res");
            cb("no_ack");
        }

    })
};

exports.updateThreads = function (threads, newThreads) {

    console.log("private method updateThreads entered");

    var threadId, threadPos;

    for (var i = 0; i < newThreads.length; i++) {
        threadId = newThreads[i].no;

        threadPos = searchForIdInRecentThreads(threads, threadId, howManyThreads);

        if (threadPos == -1) {

            console.log("private method updateThreads: new thread");

            threads.push(newThreads[i]);

            getThreadPosts(threadId, function (posts) {
                //console.log(threads);
                threads[threads.length - 1].posts = posts;
            });

        }
        else
        {
            console.log("private method updateThreads: old thread - updating");

            getThreadPosts(threadId, function (posts) {
                //console.log(threads);
                threads[threadPos].posts = posts;
            });
        }
    }

    return threads;

};

exports.briefThreads = function (threads) {

    console.log("private method briefThreads entered");

    for (var i=0; i<threads.length; i++)
    {
        delete threads[i].last_replies;
        delete threads[i].posts;
    }

    return threads;

};

/************ Private Methods/Variables ***************/

var chanUrl = "https://a.4cdn.org/mu/";
var shareThread_identifiers = ["sharethread"];
var howManyThreads = 5;

function searchTextForWords(text, keywords) {

    var result = false;

    for (var i = 0; i < keywords.length; i++) {
        if (text.toLowerCase().indexOf(keywords[i]) > -1) {
            result = true;
            break;
        }
    }

    return result;

};

function filterForShareThreads(pages) {

    var result = [];
    var threads, thread;

    //console.log(pages[0].threads[0].com);

    for (var i = 0; i < pages.length; i++) {
        threads = pages[i].threads;
        for (var j = 0; j < threads.length; j++) {
            //console.log(threads[j].com);
            thread = threads[j];
            //if (i == 0 && j == 0) {

            //console.log(i + ' ' + j + ':\n' + thread.sub);

            if (thread.sub != undefined && searchTextForWords(thread.sub, shareThread_identifiers) == true) {
                result.push(thread);
            }
            //}
            /*
             }*/
        }
    }

    return result;

}

function searchForIdInRecentThreads(threads, id, howMany) {

    var result = -1;

    for (var i = threads.length - 1; (i > threads.length - howMany) && i>0; i--) {
        if (threads[i].no == id) {
            result = i;
            break;
        }
    }

    return result;

}

function getThreadPosts(threadId, cb) {
    console.log("private method getThreadPosts entered");
    var host_url = chanUrl + "thread/" + threadId + ".json";
    console.log("private method getThreadPosts host url: " + host_url);


    request({
        url: host_url,
        method: "GET",
        json: true
    }, function (error, response, body) {
        if (response != null) {
            if (!error && response.statusCode === 200) {
                //cb(body);
                //console.log(body);


                //console.log(shareThreads);

                cb(body.posts);
            }
            else {

                console.log("error.");
                cb("no_ack");
            }
        }
        else {

            console.log("no res");
            cb("no_ack");
        }

    })
}