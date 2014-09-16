'use strict'

module.exports = function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {
      element.addClass('swag')
    }
  }
}
