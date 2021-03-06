'use strict';
// **Github:** https://github.com/toajs/toa
//
// modified from https://github.com/koajs/koa/tree/master/test
//
// **License:** MIT
/*global describe, it, before, after, beforeEach, afterEach*/

/*jshint -W124 */

var assert = require('assert');
var request = require('../context').request;

describe('req.inspect()', function() {
  describe('with no request.req present', function() {
    it('should return null', function() {
      var req = request();
      req.method = 'GET';
      delete req.req;
      assert(req.inspect() == null);
    });
  });

  it('should return a json representation', function() {
    var req = request();
    req.method = 'GET';
    req.url = 'example.com';
    req.header.host = 'example.com';

    assert.deepEqual(req.inspect(), {
      method: 'GET',
      url: 'example.com',
      header: {
        host: 'example.com'
      }
    });
  });
});
