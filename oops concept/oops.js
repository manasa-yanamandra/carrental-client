class Car {
  //class contains methods and properties. Without any objects we can't access methods and properties.
  //Properties
  name
  model
  color

  //Methods
  start() {}
  running() {}
  stop() {}
}

const myCar = new Car() //new- keyword, myCar - object
//Now we can access methods and properties from class by using object.
myCar.name
myCar.start()

//Inheritance - creating a subclass/derived-class from a parent class
class latestCar extends Car {
  //latest car is a class name; extends Car - parent class and latestCar is the child class
  warrenty
  service() {}
}

//myCar is the object of parent class, we can't access the properties using parent object
myCar.warrenty //can't access

//Inheritance - from parent class object we can only access its own methods and properties and you can't access you child class methods or properties.

// can create a number of objects using 1 class
// const anotherCar = new Car; //we can do it
//ex:
//const a = 5;
//const b = 5;

const anotherCar = new latestCar() //latest car is the class; anotherCar is the object

anotherCar.warrenty //warrenty is a property from child class so we can access it
anotherCar.name //we can access this
//from derived/child class object we can access its own methods and properties also parent class methods and properties
//so anotherCar has new features but can still have old features.

//React JS- library of JS. In react we use only child class as the parent class is pre-defined - so we don't have to start from scratch

class Car {
  //class contains methods and properties. Without any objects we can't access methods and properties.
  //Properties
  name
  model
  color

  //Methods
  start() {
    this.running() //to call any method we require an obj but inside class we don't know the obj. so, we can use this keyword inside class and it represents current object
  }
  running() {}
  stop() {}
}
