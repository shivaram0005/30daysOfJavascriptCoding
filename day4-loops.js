        //activity-1 for loop
        //task-1
        for(let i = 1; i<=10; i++){
            //console.log(i)
        }

        //task-2
        for(let i =1; i <= 10; i++){
            //console.log(5*i)
        }

        //activity-2
        //while loop
        //task-3
        let j = 1
        let numbers = 10
        let sum = 0
        while (j <= numbers) {
            sum = sum + j;
            //console.log(sum)
            j++;
        }

        //task-4

        let decendig = 10
        while(decendig >=  1){
            //console.log(decendig)
            decendig--
        }

        //activity-3 do...while loop
        //task-5
        let i = 1
        do {
            //console.log(i)
            i++
        } while (i<=5);

        //task-6
      //need to do factorial problem


        //activity-4 Nested Loops
        //taks-7
        for(let i = 1; i<=5; i++){
            let pattern = ""
            for(let j=1; j<=i; j++){
                pattern += '*'
        
            }
            console.log(pattern)
            
        }

        //activity-5
        //task-8
        for(let i = 1; i <= 10; i++){
           if(i === 5){
            continue
           }
           //console.log(i)
        }

        //task-9
        for(let i = 1; i<=10; i++){
            if(i === 7){
                break;
            }
            //console.log(i)
        }
