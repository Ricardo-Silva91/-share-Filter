# SharioRestApi.PublicApi

All URIs are relative to *http://localhost/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rootGET**](PublicApi.md#rootGET) | **GET** / | nothing


<a name="rootGET"></a>
# **rootGET**
> &#39;String&#39; rootGET()

nothing

just to see if server is awake. 

### Example
```javascript
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
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

