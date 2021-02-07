/** STACK IMPLEMENTATION.
 * 4 METHODS --> push, pop, peek & length
 */

var Stack = function () {
  this.store = {};
  this.count = 0;

  this.push = (val) => {
    this.store[this.count] = val;
    this.count++;
  };

  this.pop = () => {
    if (this.count === 0) return null;
    this.count--;
    var deletedValue = this.store[this.count];
    delete deletedValue;
    return deletedValue;
  };

  this.peek = () => {
    if (this.count === 0) return null;
    return this.store[--this.count];
  };

  this.size = () => {
      return this.count;
  }
};

var testStack = new Stack();
testStack.push(5);
testStack.push(8);
testStack.push(8);
testStack.push(8);
testStack.push(8);
testStack.push(85);
testStack.push(85);
testStack.push(85);
testStack.pop();
console.log(testStack.size());
// console.log(this.pop())
