var rs = require('readline-sync');

//prompt the name question
//prompt the fav hobby
//ask if there's more hobbies
//add hobbies to a list
//store list of users hobbies
//print user hobby list at the end

var hobbies = [];

//var userName = rs.question('What is your name? ');
var favHobby = rs.question('What is your favorite hobby? ');
hobbies.push(favHobby);



console.log(hobbies);