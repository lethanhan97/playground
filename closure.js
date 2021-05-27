// *******
// Closure
// *******

/**
 * Closure is when a function is able to remember
 * and access its lexical scope even when the
 * function is executing outside of its lexical scope
 */

function foo() {
  const a = 10;
  function bar() {
    console.log(a);
  }

  return bar;
}

const baz = foo();
// baz(); // 10

// Each instance of the function has its own variable as well

function foo2() {
  const a = Math.random();
  function bar() {
    console.log(a);
  }

  return bar;
}

const baz2 = foo2();
const baz3 = foo2();

// baz2();
// baz2();
// baz2();
// baz3();
// baz3();
// baz3();

// Other usages of closure
function wait(message) {
  setTimeout(() => {
    console.log(message);
  }, 1000);
}

// wait('Hello');

// Loop + Closure
function looper() {
  for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// Fix using IIFE
function looper2() {
  for (var i = 0; i <= 5; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

// Fix using block scope
function looper() {
  for (var i = 0; i <= 5; i++) {
    let j = i;
    setTimeout(() => {
      console.log(j);
    }, j * 1000);
  }
}

// Using with Modules
/**
 * Essentially, JS Modules are just Javascript functions. We can use closure
 * to power the module pattern like so
 */

function MyModule() {
  const name = 'An';
  const greetings = 'Hello';

  function sayHello() {
    console.log(greetings);
  }

  function introduce() {
    console.log(`Hi my name is ${name}`);
  }

  return {
    sayHello: sayHello,
    introduce: introduce,
  };
}

// const mod = MyModule();
// mod.introduce(); // Hi my name is An
// mod.sayHello(); // Hello
