'use strict';

exports.rootGET = function(args, res, next) {
  /**
   * nothing
   * just to see if server is awake. 
   *
   * returns String
   **/
  var examples = {};
  examples['application/json'] = "good evening...";
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

