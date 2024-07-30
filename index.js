function game(input) {
    const choices = ['rock', 'paper', 'scissors'];
    const randNumber = Math.floor(Math.random() * choices.length);
//    console.log(randNumber);
    let value = choices[randNumber];
//    console.log(value);
    const possibleOutcomes = {
        rock : 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

//    console.log(possibleOutcomes[input]);

    const result = input === value ? 'Draw 😳' : possibleOutcomes[input] === value ? 'You win.🤫' : 'You lose. 😂';
    // it's like , if input === value return true, then it's a draw, else if possible outcomes === value return true then win or else lose 
    // possible outcomes is a dictionary and accessing the values with the input value 
    // input value is directly passed from the onclick function 


    document.getElementById("p2").textContent = `System: ${value}`;
    document.getElementById("p3").textContent = result;
}
