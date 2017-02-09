/**
 * Shario REST API
 * API for share-thread-filter REST Server
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SharioRestApi);
  }
}(this, function(expect, SharioRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SharioRestApi.Post();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Post', function() {
    it('should create an instance of Post', function() {
      // uncomment below and update the code to test Post
      //var instane = new SharioRestApi.Post();
      //expect(instance).to.be.a(SharioRestApi.Post);
    });

    it('should have the property no (base name: "no")', function() {
      // uncomment below and update the code to test the property no
      //var instane = new SharioRestApi.Post();
      //expect(instance).to.be();
    });

    it('should have the property com (base name: "com")', function() {
      // uncomment below and update the code to test the property com
      //var instane = new SharioRestApi.Post();
      //expect(instance).to.be();
    });

    it('should have the property filename (base name: "filename")', function() {
      // uncomment below and update the code to test the property filename
      //var instane = new SharioRestApi.Post();
      //expect(instance).to.be();
    });

    it('should have the property ext (base name: "ext")', function() {
      // uncomment below and update the code to test the property ext
      //var instane = new SharioRestApi.Post();
      //expect(instance).to.be();
    });

    it('should have the property pubDate (base name: "pub_date")', function() {
      // uncomment below and update the code to test the property pubDate
      //var instane = new SharioRestApi.Post();
      //expect(instance).to.be();
    });

    it('should have the property keyWords (base name: "keyWords")', function() {
      // uncomment below and update the code to test the property keyWords
      //var instane = new SharioRestApi.Post();
      //expect(instance).to.be();
    });

  });

}));
