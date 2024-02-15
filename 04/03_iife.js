//iife-- immedeatly invoked functions expression....
//when we want to invoke a function immedeately
//to avoid pollution from global scope
//"pollution" in the context of the global scope in JavaScript means adding too many variables, functions, or other constructs to the global namespace


//("1") ("2");--- ("1") = function def    ("2") = execution call
//first create a random function then for the execution add brackets at the start of function def and add execution brackets()
(
    function fast1() {                                //named iife
        console.log("DB CONNECTED 1");
    }
)();

(
    function fast2() {
        console.log("DB CONNECTED 2");
    }
)();

(                                                   //unnamed iife
    () => {
        console.log("DB CONNECTED 3");
    }
)();


//3 iife ek saath----> uper likha hai

