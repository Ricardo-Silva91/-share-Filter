var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.UserApi();

var token = getCookie('threadioManyCooks'); // String | The user's token

var threadId_global;


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
            var theElement, linkCode;
            data = response.body;
            for (var i = 0; i < data.length; i++) {

                linkCode = '0' + data[i].no.toString().substring(0, 3) + '/' + data[i].no.toString().substring(3, 5) + '/';


                theElement =
                    '<div class="item col-lg-4 ' + (i == 0 ? 'active' : '') + '">' +
                    '<div class="services-wrapper" style="word-wrap: break-word; max-height: 100%">' +
                    '<a title="' + data[i].no + '" class="threadPic">' +
                    (data[i].tim == undefined ? '<img style="max-width: 100%" src="/assets/img/team/404.jpg">' : '<img style="max-width: 100%" src="https://archive.rebeccablacktech.com/boards/mu/img/' + linkCode + data[i].tim + data[i].ext + '">') +
                    '</a>' +
                    '<p>' +
                    data[i]['sub'] +
                    '</p>' +
                    '</div>' +
                    '</div>';


                /*'<div align="middle" class="services-wrapper item text-center ' + (i == 0 ? 'active' : '') + '">' +
                 '<h3>' +
                 data[i]['sub'] +
                 '</h3>' +
                 '<a title="' + data[i].no + '" class="threadPic">' +
                 //'<img align="middle" style="margin-left:13%;width: 300px" src="https://i.4cdn.org/mu/' + data[i].tim + data[i].ext + '">' +
                 (data[i].tim == undefined ?  '<img style="max-width: 100%" src="/assets/img/team/404.jpg">' : '<img style="max-width: 100%" src="https://archive.rebeccablacktech.com/boards/mu/img/' + linkCode + data[i].tim + data[i].ext + '">') +
                 '</a>' +
                 '</div>'*/
                ;

                $('.carousel-inner').append(theElement);

            }
            $(".threadPic").click(function () {
                console.log(this.title);
                threadId_global = this.title;
                filterThreadAndShow(this.title);
            });
            $("#myModal").on('shown.bs.modal', function () {
                populateMyModal();
                console.log('jogos');
            });
        }
    }
};
apiInstance.threadsBriefGET(token, callback);

function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
        return '<p><a target="_blank" href="' + url + '">' + url + '</a></p>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
function strip(html) {
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

            var theElement, linkCode;

            if (data.length == 0) {
                $('.posts').append('<div class="row"></div>');

                theElement =
                    '<div class="col-lg-4 text-center">' +
                    '<h1>Sorry, no posts</h1>' +
                    '</div>';

                $($('.posts > .row')[$('.posts > .row').length - 1]).append(theElement);
            }
            else {
                for (var i = 0; i < data.length; i++) {

                    if (i % 3 == 0) {
                        $('.posts').append('<div class="row"></div>');
                    }

                    linkCode = '0' + threadId_global.toString().substring(0, 3) + '/' + threadId_global.toString().substring(3, 5) + '/';

                    theElement =
                        '<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">' +
                        '<div class="services-wrapper" style="word-wrap: break-word">' +
                        (data[i].tim == undefined ? '<img style="max-width: 100%" src="/assets/img/team/404.jpg">' : '<img style="max-width: 100%" src="https://archive.rebeccablacktech.com/boards/mu/img/' + linkCode + data[i].tim + data[i].ext + '">') +
                        '<p>' +
                        urlify(strip(data[i].com)).replace(/>/g, '<p></p>') +
                        '</p>' +
                        '</div>' +
                        '</div>';


                    //console.log(urlify(strip(data[i].com)));
                    $($('.posts > .row')[$('.posts > .row').length - 1]).append(theElement);
                }
            }

            document.getElementById("services").style.display = 'block';
            window.location.href = '#services';

        }
    };
    apiInstance.filteredThreadByUserGET(token, threadId, callback);
}
function populateMyModal() {

    var SharioRestApi = require('shario_rest_api');

    var apiInstance = new SharioRestApi.UserApi();

    var token = getCookie("threadioManyCooks"); // String | The user's token


    var callback = function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            //console.log('API called successfully. Returned data: ' + data);
            //console.log(response.body.keywords);

            $('#tags').html('');

            data = response.body;

            for (var i = 0; i < data.keywords.length; i++) {
                $('#tags').append('<span>' + data.keywords[i] + '</span>');
            }
            $('#tags').append('<input style="color: #000;" type="text" value="" placeholder="Add a tag" />');

            makeFormAlive();

        }
    };
    apiInstance.userKeywordsGET(token, callback);
}

$("#editKeysForm").submit(function (event) {
    //alert( "Handler for .submit() called." );
    event.preventDefault();

    var spans = $('#tags > span');
    var newKeyWords = [];

    for (var i = 0; i < spans.length; i++) {
        newKeyWords.push(spans[i].innerText);
    }
    var uniqueNewKeys = [];
    $.each(newKeyWords, function (i, el) {
        if ($.inArray(el, uniqueNewKeys) === -1) uniqueNewKeys.push(el);
    });

    var SharioRestApi = require('shario_rest_api');

    var apiInstance = new SharioRestApi.UserApi();

    var opts = {
        'body': //new SharioRestApi.UserKeywordsPOSTReq() // UserKeywordsPOSTReq | request.
            {
                token: getCookie('threadioManyCooks'),
                keywords: uniqueNewKeys
            }
    };

    var callback = function (error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            window.location.reload();
        }
    };
    apiInstance.userKeywordsPOST(opts, callback);

});

function makeFormAlive() {
    // ::: TAGS BOX

    $("#tags input").on({
        focusout: function () {
            var txt = this.value.replace(/[^a-z0-9\+\-\.\#]/ig, ''); // allowed characters
            if (txt) $("<span/>", {text: txt.toLowerCase(), insertBefore: this});
            this.value = "";
        },
        keyup: function (ev) {
            // if: comma|enter (delimit more keyCodes with | pipe)
            if (/(188|13)/.test(ev.which)) $(this).focusout();
        }
    });
    $('#tags').on('click', 'span', function () {
        /*if(confirm("Remove "+ $(this).text() +"?"))*/
        $(this).remove();
    });
}

$(function () { // DOM ready


});