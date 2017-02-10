var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.UserApi();

var token = getCookie('threadioManyCooks'); // String | The user's token


var callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        //console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        var result = data.result;
        if (result == 'fail' || data.length == 0) {
            window.location.href = "login.html";
        }
        else {
            var theElement;
            data = response.body;
            for (var i = 0; i < data.length; i++) {
                theElement = '<div align="middle" class="item text-center ' + (i==0 ? 'active':'') +'">' +
                    '<h3>' +
                    data[i]['sub'] +
                    '</h3>' +
                    '<a title="' + data[i].no + '" class="threadPic"><img align="middle" style="margin-left:13%;width: 300px" src="https://i.4cdn.org/mu/' + data[i].tim + data[i].ext + '">' +
                    '</a>' +
                    '</div>';

                $('.carousel-inner').append(theElement);

            }
            $(".threadPic").click(function () {
                console.log(this.title);
                filterThreadAndShow(this.title);


            });
        }
    }
};
apiInstance.threadsBriefGET(token, callback);

function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<p><a target="_blank" href="' + url + '">' + url + '</a></p>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
function strip(html)
{
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}


function filterThreadAndShow(id) {

    $('.posts').html("");

    var token = getCookie("threadioManyCooks"); // String | The user's token

    var threadId = id; // String | The thread's id

    //console.log("token: " + token + "\nid: " + threadId);

    var callback = function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            //console.log('API called successfully. Returned data: ' + JSON.stringify(response.body[0]));

            data = response.body;

            var theElement;

            for (var i = 0; i < data.length; i++) {
                theElement = '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">' +
                    '<div class="" style="word-wrap: break-word">' +
                    //'<img style="width: 300px" src="https://i.4cdn.org/mu/' + data[i].tim + 's' + data[i].ext + '">' +
                    '<p>' +
                    urlify(strip(data[i].com)).replace(/>/g, '<p></p>') +
                    '</p>' +
                    '</div>' +
                    '</div>';

                console.log(urlify(strip(data[i].com)));
                $('.posts').append(theElement);
            }
            document.getElementById("services").style.display = 'block';
            window.location.href = '#services';

        }
    };
    apiInstance.filteredThreadByUserGET(token, threadId, callback);
}