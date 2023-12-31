function CustomArray() {
    const arrayin = Array.from(arguments);
  
    arrayin.push = function (element) {
      this[this.length] = element;
      return this.length;
    };
  
    arrayin.pop = function () {
      if (this.length === 0) return undefined;
      const popElement = this[this.length - 1];
      this.length--;
      return popElement;
    };
  
    arrayin.top = function () {
      return this[this.length - 1];
    };
  
    arrayin.print = function () {
      console.log(`[${this.join(',')}]`);
    };
  
    arrayin.printReverse = function () {
      console.log(`[${this.reverse().join(',')}]`);
    };
  
    return arrayin;
  }
  
  const stack = CustomArray(1, 2, 3, 4);
  stack.push(5);
  stack.print(); 
  console.log('Top element:', stack.top()); 
  stack.pop();
  stack.print(); 
  stack.printReverse();
  console.log('Stack size:', stack.length); 
  
  