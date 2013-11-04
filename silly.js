var SILLY = (function(module) {
  module.DoIt = function(zeptoObject) {
    zeptoObject.prepend('<li>' + Date() + '</li>');
  };
  
  return module;
}(SILLY || {}));