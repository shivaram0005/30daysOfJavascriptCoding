  //activity-1 array creation and access
  //task-1
  let arrayOne = [1,2,3,4,5];
  //console.log(arrayOne)

  //task-2
  let arrayTwo = [1,2,3,4,5,12,34,56,78,123,456,78,0]
  //console.log(arrayTwo[0])
  //console.log(arrayTwo[arrayTwo.length-1])

  //activity-2 array methods(basic)
  //task-3
  let arrayThree = [1,2,3]
  arrayThree.push(4)
  //console.log(arrayThree)

  //task-4
  let arrayFour = [1,2,3,4]
  arrayFour.pop()
  //console.log(arrayFour)

  //task-5
  let arrayFive = [1,2,3]
  arrayFive.shift()
  //console.log(arrayFive)

  //task-6
  let arraySix = [1,2,3]
  arraySix.unshift(4);
  //console.log(arraySix)

  //activity-3 arraymethods(intermediate)
  //task-7
  let arraySeven = [1,2,3]
  arraySeven.map((num)=>{
    let newarraySeven = num * 2;
    //console.log(newarraySeven)
    
})

    //task-8
    let arrayEigth = [1,2,3,4]
    arrayEigth.map((num)=>{
       if(num % 2 == 0){
        //console.log(num)
       }
    })

    //task-9
    //need to learn reduce method

    //activity-4 array iteration
    //task-10
    let arrayNine = [1,2,3,4]
    for(let i = 0; i<arrayNine.length; i++){
        //console.log(arrayNine[i])
    }

    //task-11
    let arrayTen = [1,2,3,4,5,6]
    arrayTen.forEach((number) => {
        //console.log(number)
    })

    //activity-5 multi-dimensional arrays
    //task-12
    let mathScoreOne = [
        ['john doe', 20,60,'a'],
        ['jane doe', 10,52,'b']
    ]
    //console.log(mathScore)

    let mathScoreTwo = [
        ['john doe', 20,60,'a'],
        ['jane doe', 10,52,'b']
    ]
    console.log(mathScoreTwo[0][1])