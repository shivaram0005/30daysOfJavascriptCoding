        //activity-1 function Declaration
        //task-1
        function evenOdd(firstNumber){
            if(firstNumber % 2 == 0){
                //console.log('Even Number')
            }
            else{
                //console.log('Odd Number');
            }
        }
        evenOdd(13)

        //task-2
        function squareOfANumber(secondNumber){
            return secondNumber*secondNumber;
        }
        //console.log(squareOfANumber(5))

        //activity2 function expression
        //task3
        let maximunOfTwoNumbers = function(thirdNumber, fourthNumber){
            if(thirdNumber > fourthNumber){
                console.log(thirdNumber,'is greater')
            }
            else{
                console.log(fourthNumber, 'is greater')
            }
        }
        //maximunOfTwoNumbers(2,5)

        //task-4
        let stringConcatenate = function(stringOne,stringTwo){
            return stringOne + " " + stringTwo
        }
        //console.log(stringConcatenate('shiva', 'ram'))

        //activity-3 Arrow Functions
        //task-5
        let sumOfTwoNumbers = (fifthNumber, sixthNumber) => {
            return fifthNumber + sixthNumber
        }
        //console.log(sumOfTwoNumbers(3,6))

        let stringContainsASpecificCharacter = (character) => {
            let string = 'abcd'
            if(string.includes(character)){
                return true;
            }
            else{
                return false;
            }
            
        }
        //console.log(stringContainsASpecificCharacter('a'))

        //activity-4 function parameters and default values
        //task-7
        let productOfTwoNumbers = (seventhNumber, eigthNumber = 10) => {
            return seventhNumber*eigthNumber;
        }
        //console.log(productOfTwoNumbers(2))

        //task-8
        let greetings = (name, age=20) => {
            return `Hi this is ${name}, and my age is ${age}`
        }
        //console.log(greetings('shiva'))

        //activity-5 higher-order functions
        //task-9
        function repeat(func, times){
            for(let i = 0; i < times; i++){
                func()
            }
        }
        function sayHello(){
            console.log("hello");
        }

        //repeat(sayHello,3)

        //task-10
        function composeFunctions(func1, func2) {
            return function(value) {
                return func2(func1(value));
            };
        }