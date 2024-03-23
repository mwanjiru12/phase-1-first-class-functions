function receivesAFunction(callback) {
    return function (name) {
      console.log(`${name}, a spy!`);
      console.log(callback(name));
    }
  }
  
  function returnsANamedFunction() {
    return function named() {
      console.log("The girl is Arya.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('The girl has no name.')
    }
  }m 