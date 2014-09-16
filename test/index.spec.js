'use strict'

var angular = require('angular-bsfy')
angular.module('test', [])
angular.module('test').directive('socialCell', require('../'))

require('angular-bsfy/mocks')

describe('social-cell', function() {
  var element, scope

  beforeEach(global.module('test'))

  beforeEach(inject(function($rootScope, $compile) {

    scope = $rootScope.$new()
    element = $compile('<social-cell>swagger</social-cell>')(scope)

    scope.$apply()
  }))


  it('should foo', function() {
    expect(element.text()).toBe('swagger')
  })

  it('should bar', function() {
    expect(element.hasClass('swag')).toBeTruthy()
  })

})
