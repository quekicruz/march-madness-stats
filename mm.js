let userName = prompt('Who is your Sweet 16 Team?');

function getuserName() {
    document.write(userName);
    console.log (userName)
    return userName}


function getTeamName(){
    if (userName == 'Gonzaga'){
        document.write('<h2>' + 'Welcome Bulldog' + '</h2>');
    }
    
    else if (userName == 'Creighton'){
        document.write('<h2>' + 'Welcome BlueJay' + '</h2>');
    }
    
    else if (userName == 'USC'){
        document.write('<h2>' + 'Welcome Trojan' + '</h2>');
    }
    
    else if (userName == 'Oregon'){
        document.write('<h2>' + 'Welcome Duck' + '</h2>');
    }
    
    else if (userName == 'Michigan'){
        document.write('<h2>' + 'Welcome Wolverine' + '</h2>');
    }
    
    else if (userName == 'Florida State'){
        document.write('<h2>' + 'Welcome Seminole' + '</h2>');
    }
    
    else if (userName == 'UCLA'){
        document.write('<h2>' + 'Welcome Bruin' + '</h2>');
    }
     
    else if (userName == 'Alabama'){
        document.write('<h3>' + 'Welcome Tide' + '</h2>');
    }
    
    if (userName == 'Baylor'){
        document.write('<h2>' + 'Welcome Bear' + '</h2>');
    } else {
        document.write;
    }
    
    if (userName == 'Villanova'){
        document.write('<h2>' + 'Welcome Wildcat' + '</h2>');
    } else {
        document.write;
    }
    
    if (userName == 'Arkansas'){
        document.write('<h2>' + 'Welcome Razorback ' + '</h2>')
    } else {
        document.write;
    }
    
    if (userName == 'Oral Roberts'){
        document.write('<h2>' + 'Welcome Golden Eagle' + '</h2>');
    } else {
        document.write;
    }
     
    if (userName == 'Loyola'){
        document.write('<h2>' + 'Welcome Rambler' + '</h2>');
    
    } else {
        document.write;
    }
    
    if (userName == 'Oregon State'){
        document.write('<h2>' + 'Welcome Beaver' + '</h2>');
    } else {
        document.write;
    }
    
    if (userName == 'Syracuse'){
        document.write('<h2>' + 'Welcome Orange' + '</h2>');
    } else {
        document.write;
    }
    
    if (userName == 'Houston'){
        document.write('<h2>' + 'Welcome Cougar ' + '</h2>');
    } else {
        document.write;
    } 
}
function moveForward(){prompt('Do you want your team to win?')
if(moveForward.toLowerCase()== 'yes') {
    moveForward = prompt('Are you sure?')
} 
else {
    document.write('AW');
}
}

function trophies(){
    let trophiesAnswer = confirm('Do you want trophies?')
    let url = 'https://www.seekpng.com/png/detail/139-1391359_trophy-transparent-national-championship-ncaa-championship-trophy-png.png'

    if (trophiesAnswer){
        let trophiesAnswerNumber = prompt('How many Trophies?');
        for(let i = 0; i < trophiesAnswerNumber; i++){
            document.write('<img ' + 'src=' + url + ' id="trophies">')
        }
    }
}

function points(){
    let pointsAnswer = prompt('Do you want to guess the number of points Oregon scored last week?')
    
    while (pointsAnswer.toLowerCase() == 'yes');
        let correctAnswer = 95
        let userGuess = prompt('Please enter a number 1-150');
        let numberOfGuesses = 9;}


     for(let i = 0; i < numberOfGuesses; i++) {
            let guessLeft = numberOfGuesses - i;
            if(userGuess < correctAnswer){
                userGuess = prompt(guessLeft + ' Guesses left. To Low. Please enter a number 1-150');
            } else if (userGuess > correctAnswer) {
                userGuess = prompt(guessLeft + ' Guesses left. To High! Please enter a number 1-150');
            }
            if (userGuess == correctAnswer);
                alert('You got it!');
                break; }