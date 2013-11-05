Google Chrome has a ton of features if you click the config gears icon on 
the bottom right hand side of the Developer Console (CMD-OPT-J).

There's a link in there to shortcuts that work in the console and i think
some of these will be useful.  

[shortcuts in google chrome developer console](https://developers.google.com/chrome-developer-tools/docs/shortcuts)


javascript prototypes are a strange thing for me.  

after a quick scan, the article here explains:
- every object has a prototype
- you can getPrototypeOf(obj) but NOT setPrototypeOf(obj)
- prototypes kindof work like class inheritance but for objects (instances)
- prototype "chains" pass messages up the chain or something like that

[plain english guide to javascript prototypes](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)


this one was good, on stackoverflow

after a quick scan the answer seems to explain:
- you can think of a prototype as a "parent class" in Ruby
- you can make a "subclass" kindof thing by setting an object's prototype to an 
instance of another object
- when you add behavior to the prototype it doesn't go "up the chain"
- when you call methods that are "down the chain" you get an error so methods only
work if they are on the current object or one of it's "prototype chain members"

```javascript
// my goal is to make a new person object that i can "instantiate" (thinking Ruby here)
var Person = function(name){
  this.name = name;
};

// now my goal is to add some behavior to this object and NOT have the behavior "redefined"
// every time i "create a new instance" of this object so i use the object's prototype
// to add my behavior there
Person.prototype.introduction = function() {
  return 'hi my name is ' + this.name;
};

// now i can create a new Person
var john = new Person('John');
alert(john.introduction());

// and then if i want to make a "child class" (thinking Ruby) of Person called Customer
// i would do something like this:

var Customer = function(account) {
  this.account = account
};

Customer.prototype.showAccount = function(){
  return 'account number: ' + this.account;
};

Customer.prototype = new Person();

// now i can call Customer and Person methods but Person doesn't get the Customer methods

var mary = new Customer(123321);
mary.showAccount(); // this works
john.showAccount(); // this doesn't
```

[How does JavaScript .prototype work?](http://stackoverflow.com/a/4778408)

along with this one about [3 ways to define a JS class](http://www.phpied.com/3-ways-to-define-a-javascript-class/)
where we got some of the overview for the above writeup


### unvetted links

found but not read / scanned

- [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Object.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
- [advanced JS by Resig?](http://ejohn.org/apps/learn/)

