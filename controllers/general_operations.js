/**
 * Created by Ricardo on 09/02/2017.
 */
exports.getUserPosByToken = function(users, token)
{
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

exports.checkUserAndGetPosByCredentials = function(users, username, pass)
{
    var result = -1;

    for (var i = 0; i < users.length; i++) {

        if(users[i].username == username)
        {
            if(users[i].password == pass)
            {
                result = i;
            }
            else
            {
                result = -2;
            }

            break;
        }

    }
    return result;

};

exports.getThreadPosById = function(threads, threadId)
{
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

    for(var i=0; i<thread.posts.length; i++)
    {
        if(searchTextForWords(thread.posts[i].com.toLowerCase(), keywords) == true)
        {
            filteredThread.push(thread.posts[i]);
        }
    }

    return filteredThread;

};


/************ Private Methods ***************/
function searchTextForWords(text, keywords) {

    var result = false;

    for (var i=0; i< keywords.length; i++)
    {
        if(text.indexOf(keywords[i]) > -1) {
            result = true;
            break;
        }
    }

    return result;

};