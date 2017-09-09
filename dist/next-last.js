(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.last = function (inArray) {
    var len_ = inArray.length - 1;
    return inArray[len_];
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.last;
  }

}());
