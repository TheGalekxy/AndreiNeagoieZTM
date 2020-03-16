const fs = require('fs');   

fs.readFile('./SantaNodeHelper.txt', (err, data) => {     
    console.time('funchallenge');   
    if (err) {
        console.log('error');           
    }
    

    // const regex = /\(/gi;       // creating regular expressions so I can access the brackets in the original file and replace them with other characters, if needed
    // const regex2 = /\)/gi;

    const wholeData = data.toString(); // turning the data into a string so it can be read
    // const up = wholeData.replace(regex, 'up').replace(regex2, 'Down')       // replacing all the brackets with their respective value
    const up = wholeData.split("(").length - 1;
    const down = wholeData.length - up;
    const finalFloor = up - down;
    console.log(finalFloor);


    // console.log(wholeData.length);
    // console.log(up);
    // console.log(down); 
    // console.log(finalFloor);
    

    function checkFloor() {
    let floor = 0;
    let count = 0;

    for (const value of wholeData) {
        if (value === '(' && floor >= 0) {
            floor++;
            count++;

        } else if (value === ')' && floor >= 0) {
            floor--;
            count++;
        } else {
            console.log(count);
            return count;
            
        }
        
        
    }
    
    }

    checkFloor();

    console.timeEnd('funchallenge');

    })                                        


// I could extract all the parenthesis into two seperate strings and the count the string length of each subtract one from the other and then return the result number which is the final floor

