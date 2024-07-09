var rs = require('readline-sync');

//prompt the name question
//prompt the fav hobby
//ask if there's more hobbies
//add hobbies to a list
//store list of users hobbies
//print user hobby list at the end

const hobbies = [];

var userName = rs.question('What is your name? ');
var favHobby = rs.question(userName + ', what is your favorite hobby? ');

hobbies.push(favHobby);

var moreHobbies = rs.questionInt('How many other hobbies do you have? ')


if(moreHobbies > 0){
    var counter = 0;
    while(counter < moreHobbies){
        var input = rs.prompt();
        hobbies.push(input);
        counter++;

        if(counter < moreHobbies){
            console.log('-- Awesome! "' + input + '" is cool! What\'s the other ' + (moreHobbies - counter) + '?');
        }else{
            console.log('I wish I could do ' + hobbies + '...but I\'m not even real');
        }
    }
}else{
    var areYouSure = rs.keyInYN('Are you sure? ' +  hobbies[0] + ' is all you like to do?');
}
//console.log(hobbies);