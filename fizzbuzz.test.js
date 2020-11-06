const Fizzbuzz = require('../fizzbuzz');

test('multiple by 3 should print Fizz', () => {
    //Arrange
    let number = 3
    

    //Act
    let result = fizzbuzz(number)

//Assert
 expect("Fizz").toEqual(result);
})

test('multiple by 5 should print Buzz', () => {

})

test('multiple by 15 should print FizzBuzz', () => {

})

test('multiple by 2 should print 2', () => {

})
