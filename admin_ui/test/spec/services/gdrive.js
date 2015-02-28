'use strict';

describe('Service: Gdrive', function () {

  // load the service's module
  beforeEach(module('adminApp'));

  // instantiate service
  var Gdrive;
  beforeEach(inject(function (_Gdrive_) {
    Gdrive = _Gdrive_;
  }));

  it('should do something', function () {
    expect(!!Gdrive).toBe(true);
  });

});
