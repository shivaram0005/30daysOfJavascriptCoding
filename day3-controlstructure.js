        //activity-1 if-else statement
        //task-1
        let firstNumber = -0
        if(firstNumber > 0){
            console.log("Number is positive")
        }
        if(firstNumber < 0){
            console.log('Number is negative')
        }
        if(firstNumber == 0){
            console.log("Number is zero")
        }

        //task-2
        let secondNumber = 18;
        if(secondNumber >= 18){
            console.log('Person is eligible to vote');
        }else{
            console.log('Person is not eligible to vote')
        }

        //activity-2 nested if-else statements
        //task-3
        let thirdNumber = 23;
        let fourthNumber = 18;
        let fifthNumber = 20;
        if(thirdNumber > fourthNumber && thirdNumber > fifthNumber){
            console.log("thirdNumber is Greater", thirdNumber)
        }else if(fourthNumber > thirdNumber && fourthNumber > fifthNumber){
            console.log("fourthNumber is greater", fourthNumber)
        }else{
            console.log("fifthNumber is greater");
        }

        //activity-3
        //switch-case
        //task-4
        let day = 5;
        switch (day) {
            case 1:
                console.log('sunday')
                break;
            case 2:
                console.log('Monday')
                break;
            case 3:
                console.log('Tuesday')
                break;
            case 4:
                console.log('WednessDay')
                break;
            case 5:
                console.log('thursday')
                break;
            case 6:
                console.log('Friday')
                break;
            case 7:
                console.log('Saturday')
                break;
            default:
                console.log("Please enter a number form 1 to 7")
                break;
        }


            //task-5

            let score = 39;
            switch (score) {
                case score<=100 && score >=85:
                    console.log("A Grade");
                    break;
                case score<=84 && score>=61:
                    console.log("B Grade");
                    break;
                case score<=60 && score>=50:
                    console.log("C Grade");
                    break;
                case score<=49 && score>=41:
                    console.log("D Grade");
                    break;
                case score<=40:
                    console.log("F Grade")
                    break;
                    
                default:
                    console.log("Pleae enter correct score")
                    break;
            }
            
            
            //Activity-4
            //task-6
            let evenOdd = 11
            console.log(evenOdd % 2==0?'even':'odd')

            //Activity-5 combining Conditions
            //task-7
            //combining conditions
            let year = 2021;
            if(
                year % 100 === 0?year % 400 === 0 : year % 4 === 0
            ){
                console.log('input year:', year, 'is a leap year');

            }else{
                console.log('input year:', year, 'is not a leap year');
            }



       

