# SharioRestApi.UserApi

All URIs are relative to *http://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addKeywordPOST**](UserApi.md#addKeywordPOST) | **POST** /addKeyword | new keyword
[**loginPOST**](UserApi.md#loginPOST) | **POST** /login | login
[**threadGET**](UserApi.md#threadGET) | **GET** /getThread | get Thread by id
[**threadsDateGET**](UserApi.md#threadsDateGET) | **GET** /getThreadsAfter | get Threads after a date
[**threadsGET**](UserApi.md#threadsGET) | **GET** /getThreads | get All Threads


<a name="addKeywordPOST"></a>
# **addKeywordPOST**
> OkRes addKeywordPOST(opts)

new keyword

Adds a new keyword to the key list.

### Example
```javascript
var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.UserApi();

var opts = { 
  'body': new SharioRestApi.AddKeywordReq() // AddKeywordReq | request.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addKeywordPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AddKeywordReq**](AddKeywordReq.md)| request. | [optional] 

### Return type

[**OkRes**](OkRes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginPOST"></a>
# **loginPOST**
> LoginRes loginPOST(opts)

login

user sends credentials and gets token.

### Example
```javascript
var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.UserApi();

var opts = { 
  'body': new SharioRestApi.LoginInfo() // LoginInfo | request.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginPOST(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginInfo**](LoginInfo.md)| request. | [optional] 

### Return type

[**LoginRes**](LoginRes.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="threadGET"></a>
# **threadGET**
> Thread threadGET(token, threadId)

get Thread by id

get one thread from the server, by id. 

### Example
```javascript
var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.UserApi();

var token = "token_example"; // String | The user's token

var threadId = "threadId_example"; // String | The thread's id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.threadGET(token, threadId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The user&#39;s token | 
 **threadId** | **String**| The thread&#39;s id | 

### Return type

[**Thread**](Thread.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="threadsDateGET"></a>
# **threadsDateGET**
> Threads threadsDateGET(token, _date)

get Threads after a date

get threads from the server, starting from given date. 

### Example
```javascript
var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.UserApi();

var token = "token_example"; // String | The user's token

var _date = "_date_example"; // String | The date


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.threadsDateGET(token, _date, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The user&#39;s token | 
 **_date** | **String**| The date | 

### Return type

[**Threads**](Threads.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="threadsGET"></a>
# **threadsGET**
> Threads threadsGET(token)

get All Threads

get every thread in the server 

### Example
```javascript
var SharioRestApi = require('shario_rest_api');

var apiInstance = new SharioRestApi.UserApi();

var token = "token_example"; // String | The user's token


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.threadsGET(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| The user&#39;s token | 

### Return type

[**Threads**](Threads.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

