1.what is jsx?
its a javascript xml
It is a extension of javascript which is allow us to write react element like html syntax 

in behind the scene the jsx will be transplit to core javascript code using bebel and its call React.createElement() to create the react element 

its create the react element
--------
const element = React.createElement(
  'h1',              // type of element
  { className: 'greeting' }, // props
  'Hello, world!'    // children
);

console.log(element);  

console data 
-----------
react element
{
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
}

 React will later render it to the DOM as
<h1 class="greeting">Hello, world!</h1>

JSX is just syntactic sugar for the same thing
<h1>Hello world</h1>



2.what is Curly braces / JSX Expression Block?

{ /*  here we can write the expression */}
variables, turnarry operator, map etc 

here it will not allow run if an for loop.
becuase the it is return any value if we use map() it will return the data if we use ternary operator that also return 

example : 
const consoledata= false ? "trueValue" : "false value"

console.log(consoledata) 

how the console only work becuase console is return a value that is "undefined" if react see that will not print 
 
3. why we cannot use class in tag?
jsx is not a html tag its javasciprt xml so class is reserved key word in javascript we we cannot use that 
