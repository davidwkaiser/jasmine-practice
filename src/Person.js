class Person{
  constructor(){}
  helloSomeone(toGreet){
    return this.sayHello() + ' ' + toGreet;
  }
  sayHello(){
    return "Hello";
  }
}
