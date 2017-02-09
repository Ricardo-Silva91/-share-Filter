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
    instance = new SharioRestApi.UserApi();
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

  describe('UserApi', function() {
    describe('addKeywordPOST', function() {
      it('should call addKeywordPOST successfully', function(done) {
        //uncomment below and update the code to test addKeywordPOST
        //instance.addKeywordPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loginPOST', function() {
      it('should call loginPOST successfully', function(done) {
        //uncomment below and update the code to test loginPOST
        //instance.loginPOST(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('threadGET', function() {
      it('should call threadGET successfully', function(done) {
        //uncomment below and update the code to test threadGET
        //instance.threadGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('threadsDateGET', function() {
      it('should call threadsDateGET successfully', function(done) {
        //uncomment below and update the code to test threadsDateGET
        //instance.threadsDateGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('threadsGET', function() {
      it('should call threadsGET successfully', function(done) {
        //uncomment below and update the code to test threadsGET
        //instance.threadsGET(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
