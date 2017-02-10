/**
 * Created by Ricardo on 10/02/2017.
 */
/**
 * Created by Ricardo on 09/02/2017.
 */

var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.UserApi();


var callback1st = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        if(data.length != 0)
        {
            console.log("valid token");
            window.location.href = "index.html";
        }
        else
        {
            console.log("bad token");
        }
    }
};

$("form").on('submit', function (e) {
    //ajax call here
    //stop form submission
    e.preventDefault();

    var alias = $('#inputAlias')[0].value;
    var pass = $('#inputPassword')[0].value;

    var logInf = {
        user: alias,
        pass: pass
    }

    var opts = {
        'body': //new SharioRestApi.LoginInfo(logInf) // LoginInfo | request.
            {
                user: alias,
                pass: pass
            }
    };

    console.log(JSON.stringify(opts.body));

    var callback = function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            //console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            var result = data.result;
            if(result != 'fail')
            {
                document.cookie="threadioManyCooks = " + data.token + ";path=/;";
                window.location.href = "index.html";
            }
            else
            {
                alert("bad user or pass");
            }
        }
    };
    apiInstance.loginPOST(opts, callback);

});

$(document).ready(function () {

    console.log("doc ready");

    var cookness = getCookie('threadioManyCooks');
    if (cookness != "") {
        apiInstance.threadsGET(cookness, callback1st);
    }

});