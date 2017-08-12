xdescribe('functions', function () {

  beforeEach(function () {
    jasmine.addMatchers({
      toBeDivisibleByTwo: function () {
        return (value % 2) === 0;
      }
    });
  });

  it('is divisible by 2', function () {
    console.log(3);
    expect(3).toBeDivisibleByTwo();
  });

});