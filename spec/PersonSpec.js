// describe('Person', function () {
//     it('calls the sayHello() function', function () {
//         var fakePerson = new Person();
//         spyOn(fakePerson, 'sayHello');
//         fakePerson.helloSomeone('world');
//         expect(fakePerson.sayHello).toHaveBeenCalled();
//   });
//     it('greets the world', function(){
//       var fakePerson = new Person();
//       spyOn(fakePerson, 'helloSomeone');
//       fakePerson.helloSomeone('world');
//       expect(fakePerson.helloSomeone).toHaveBeenCalledWith('world');
//     });
// });

describe('Person', function () {
  var fakePerson
  beforeEach(function(){
    fakePerson = new Person();
  });

    it('calls the sayHello() function', function () {
        spyOn(fakePerson, 'sayHello');
        fakePerson.helloSomeone('world');
        expect(fakePerson.sayHello).toHaveBeenCalled();
  });
    it('greets the world', function(){
      spyOn(fakePerson, 'helloSomeone');
      fakePerson.helloSomeone('world');
      expect(fakePerson.helloSomeone).toHaveBeenCalledWith('world');
    });

    it('does not greet foo', function(){
      spyOn(fakePerson, 'helloSomeone');
      fakePerson.helloSomeone('world');
      expect(fakePerson.helloSomeone).not.toHaveBeenCalledWith('foo');
    });

    it('says hello', function(){
      fakePerson.sayHello = jasmine.createSpy('Say hello spy').and.returnValue('ello');
      fakePerson.helloSomeone('world');
      expect(fakePerson.sayHello).toHaveBeenCalled();
    });
});