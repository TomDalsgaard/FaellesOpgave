// TODO: Wrap this file's code in an immediately invoked function expression

// TODO: Strict mode

var copyOwnProperties = function (from, to) {
    for (var propertyName in from) {
        if (from.hasOwnProperty(propertyName)) {
            to[propertyName] = from[propertyName];
        }
    }
};

var inherit = function (additionalProperties) {
    // `inherit` creates an factory object that is similar to a Class in C# and Java.
    // The created factory object has a `create` method that creates instances.
    // The factory object also serves as the prototype for created instances.
    // So any properties added to the factory (via the additionalProperties parameter)
    // will available to created instances.
    // If the additionalProperties has a function named `initialize`, then this is
    // called to initialize created instances.
    
    // TODO: Create a variable named `factory`, assign it a new object who's prototype is `this`.

   var factory = function(fabrik){
       var _fabrik

        this.getFactory = function (){
            return _fabrik
        } 

        this.setName = function(value){
            fabrik.setName('Dark n stormy')
      }

        this.hentFactory(fabrik)
   }
   
 Factory.prototype = {
  
    toString: function(){
        return this.getFactory();
    }
 }

     display (fabrik.setName());





    
    // TODO: Add a method called `create` to `factory`, that does the following
    
        // TODO: Define a variable named `instance` 
        //       and assign it a new object that has `factory` as its prototype.
    
        // TODO: If `instance` has a function named "initialize",
        //       then call `initialize`, passing any arguments passed to `create`.
    
        // TODO: return `instance`.
    

    // TODO: Copy properties of `additionalProperties` onto `factory' (using copyOwnProperties).
    
    // TODO: Return the `factory` object.
};

// TODO: Add the inherit function to the built-in `Object` object.

