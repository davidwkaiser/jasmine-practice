describe('Hello world', function () {


  it('says hello', function() {
    expect(helloWorld()).toEqual('Hello world!');
  });

  it('contains "hello"', function() {
    expect(helloWorld()).toContain('Hello');
  });
});


