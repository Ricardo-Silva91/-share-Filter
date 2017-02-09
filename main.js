/**
 * Created by Ricardo on 09/02/2017.
 */
var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.PublicApi();

var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
apiInstance.rootGET(callback);