function ExampleConstructor() {}
console.log('value of the prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('newExampleConstructor', newExampleConstructor);

var instanceOfExampleConstructor = newExampleConstructor instanceof ExampleConstructor;
console.log('instanceOfExampleConstructor', instanceOfExampleConstructor);
