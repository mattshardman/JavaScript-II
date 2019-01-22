// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outer(data) {
  return function inner() {
    console.log(data);
    return data;
  }
}

const inner = outer('hello');
inner();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    // ==> Not using ++ because: Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application.
    const newCounter = count += 1;
    console.log(newCounter);
    return newCounter;
  }
};
// Example usage: const newCounter = counter();
const newCounter = counter();

newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = start => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = start || 0;
  return {
    increment() {
      const newCount = count += 1;
      console.log(newCount);
      return newCount;
    },
    decrement() {
      const newCount = count -= 1;
      console.log(newCount);
      return newCount;
    }
  }
};

const counterChoice = counterFactory();

counterChoice.increment();
counterChoice.decrement();
