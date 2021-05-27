// **************
// Function scope
// **************

/**
 * Function scope encourages that all variables declared in a function belongs to that function,
 * and can be used and reused throughout the entirety of the function
 * The variables are accessible to even nested scopes
 */

function declaredAtTopLevelScope() {
  var a = 10;
  console.log('Top level can access a with value:', a);

  if (true) {
    console.log('Can access value of a inside if block', a);
  }

  function nestedFn() {
    console.log('Can access value of a inside nested function', a);
  }
  nestedFn();
}
// declaredAtTopLevelScope();

function declaredInIfBlock() {
  if (true) {
    var a = 10;
  }
  console.log('Can access value of a inside if block', a);

  function nestedFn() {
    console.log('Can access value of a inside nested function', a);
  }
  nestedFn();
}

// declaredInIfBlock();

// Usage: Hiding implementation details
function doSomething(a) {
  b = a + doSomethingElse(a * 2);

  console.log(b * 3);
}

function doSomethingElse(a) {
  return a - 1;
}

var b;
// doSomething(2); // 15

// The above code exposes some private details of doSomething(), which are the variable b, and the doSomethingElse method
// A better way would be
function doSomething(a) {
  function doSomethingElse(a) {
    return a - 1;
  }

  var b = a + doSomethingElse(a * 2);

  console.log(b * 3);
}

// doSomething(2); // 15

// *******************************************
// Function Expression vs Function Declaration
// *******************************************

// If you dont want to pollute the scope with your function name,
//  and want to execute the function immediately, use a function expression
// (function a() {
//   console.log('hi');
// })(); // prints 'hi'

// You cant access the name of the function declared inside the ()
// a(); // Will throw an error

// This is how you can use a function expression
const fn1 = function () {
  console.log('i am a function');
}; // Implicit name fn
// fn1();

/**
 * A named function expression will have its variable
 * with a property called name with that name. And the
 * declared name is available ONLY inside of itself.
 * This is useful for recursion
 */
const fn2 = function fnName() {
  console.log('i am a function');
  console.log(fnName);
}; // Implicit name fn
// console.log(fn2);
// console.log(fn2.name);
// fn2();

// ***********
// Block Scope
// ***********

// Scope using const and let
function test() {
  {
    var a = 10; // 10
    // const a = 10; // Reference Error
    // function a() {} // [Function]
    // var a = function () {}; // [Function]
    // const a = function () {}; // Reference Error;
  }
  console.log(a);
}
// test();

// If statement
function iWonderIf() {
  if (true) {
    const a = 10;
  }

  console.log(a);
}
// iWonderIf() // Throw ReferenceError
