// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile( 'greeting.txt' , "Hi " + user.username + "! \n" , () => {
//     console.log("File saved successfully!");

// } )




// const notes = require('./notes') ;

// console.log(notes);
// console.log(notes.age);
// notes.sayHello() ;
// console.log("Server file is availble");



var _ = require('lodash');

let data = ["Person" , "Person" , 1 , 2 , 1 , 2 , "name" , "age" , 2]
console.log(_.uniq(data)); //[ 'Person', 1, 2, 'name', 'age' ]
console.log(_.isString(34));