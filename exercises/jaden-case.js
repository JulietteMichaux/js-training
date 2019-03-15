'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (phrase) => {
        return phrase
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
      
      let result = jadenCase('how are you');
      console.log(result);
      
    

//* Begin of tests
const assert = require('assert')



assert.strictEqual(jadenCase('how are you'), 'How Are You')
assert.strictEqual(jadenCase('je sUiS ton pERe'), 'Je Suis Ton Pere')
assert.strictEqual(jadenCase('hELlo wILD'), 'Hello Wild')

// End of tests */
