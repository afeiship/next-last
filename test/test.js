var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-last');

describe('next/last', function () {

  it('nx.last -> pure array', function () {
    var arr1 = [1,2,4];
    assert.equal( nx.last(arr1),4 );
  });


  it('nx.last -> pure array - like', function () {
    var obj1 = {
      0: 'a',
      1: 'b',
      2: 'c',
      length:3
    };

    assert.equal( nx.last(obj1),'c' );
  });

});
