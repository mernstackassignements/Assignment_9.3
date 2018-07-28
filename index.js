/// Javascript code 

// declare Evens Odds and primes
var evens = [2,4,6,8];
var odds = [1,3,5,7];
var primes = [2,3,5,7,11];

var outArray = [...primes,...evens,...odds];

console.log('Combined Array : '+outArray);

/// Destructuring object
var jamesBond = {
    first : 'Janmes',
    last : 'Bond',
    country : 'United States',
    city : 'New york',
    twitter : '@jamesbond'
};

var {first,last,country,city,twitter} = jamesBond;

console.log(first)
console.log(last)
console.log(country)
console.log(city)
console.log(twitter)

// Destructuring Array

var players = ['paul','andy','darrell','jim'];

var [paul,andy,darrell,jim] = players;

console.log(paul)
console.log(andy)
console.log(darrell)
console.log(jim)

