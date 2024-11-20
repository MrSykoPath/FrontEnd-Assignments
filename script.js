//Question 1

// var input=Number(window.prompt("Enter a number"));
// console.log(input);

//Question 2
// var input=Number(window.prompt("Enter a number"));

// if(input%3===0 && input%4===0){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

//Question 3
// var input1=Number(window.prompt("Enter first number"));
// var input2=Number(window.prompt("Enter second number"));

// if(input1>input2){
//     console.log(input1);
// }
// else{
//     console.log(input2);
// }

//Question 4
// var input = Number(window.prompt("Enter a number"));

// if(input <0){
//     console.log("Negative");
// }
// else{
//     console.log("Positive");
// }

//Question 5
// var input1 = Number(window.prompt("Enter first number"));
// var input2 = Number(window.prompt("Enter second number"));
// var input3 = Number(window.prompt("Enter third number"));

// if(input1>input2 && input1>input3){
//     console.log("Max: " +input1);
//     if(input2<input3){
//         console.log("Min: " +input2);
//     }
//     else{
//         console.log("Min: " +input3);
//     }
// }
// else if(input2>input1 && input2>input3){
//     console.log("Max: " +input2);
//     if(input1<input3){
//         console.log("Min: " +input1);
//     }
//     else{
//         console.log("Min: " +input3);
//     }
// }
// else{
//     console.log("Max: " +input3);
//     if(input1<input2){
//         console.log("Min: " +input1);
//     }
//     else{
//         console.log("Min: " +input2);
//     }
// }

//Question 6
// var input = Number(window.prompt("Enter a number"));

// if(input%2===0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

//Question 8
// var input = window.prompt("Enter a character");

// if(input==='a' || input==='e' || input==='i' || input==='o' || input==='u' || input==='A' || input==='E' || input==='I' || input==='O' || input==='U'){
//     console.log("Vowel");
// }
// else{
//     console.log("Consonant");
// }

// //Question 9
//  var input = Number(window.prompt("Enter a number"));

//  for(var i=1; i<=input; i++){
//         console.log(i);
//  }

//Question 10
// var input = Number(window.prompt("Enter a number"));

// for(var i=1; i<=12; i++){
//     console.log(i*input);
// }

//Question 11
// var input = Number(window.prompt("Enter a number"));

// for(var i=2; i<input; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

//Question 12
// var number = Number(window.prompt("Enter a number"));
// var power = Number(window.prompt("Enter a power"));


// console.log(number**power);

//Question 12
// var input1 = Number(window.prompt("Enter first number"));
// var input2 = Number(window.prompt("Enter second number"));
// var input3 = Number(window.prompt("Enter third number"));
// var input4 = Number(window.prompt("Enter fourth number"));
// var input5 = Number(window.prompt("Enter fifth number"));

// var sum = input1+input2+input3+input4+input5;
// var average = parseInt(sum/5);
// var percentage = parseInt((sum/500)*100);

// console.log("Sum: " +sum);
// console.log("Average: " +average);
// console.log("Percentage: " +percentage);

//Question 13
// var month = Number(window.prompt("Enter a month number"));

// switch(month){
//     case 1:
//         console.log(31);
//         break;
//     case 2:
//         console.log(28);
//         break;
//     case 3:
//         console.log(31);
//         break;
//     case 4:
//         console.log(30);
//         break;
//     case 5:
//         console.log(31);
//         break;
//     case 6:
//         console.log(30);
//         break;
//     case 7:
//         console.log(31);
//         break;
//     case 8:
//         console.log(31);
//         break;
//     case 9:
//         console.log(30);
//         break;
//     case 10:
//         console.log(31);
//         break;
//     case 11:
//         console.log(30);
//         break;
//     case 12:
//         console.log(31);
//         break;
//     default:
//         console.log("Invalid month");
//         break;
// }

//Question 14 //percentage from 100
// var Physics = Number(window.prompt("Enter Physics marks"));
// var Chemistry = Number(window.prompt("Enter Chemistry marks"));
// var Biology = Number(window.prompt("Enter Biology marks"));
// var Mathematics = Number(window.prompt("Enter Mathematics marks"));
// var Computer = Number(window.prompt("Enter Computer marks"));

// if(Physics >= 90){
//     console.log("Grade A");
// }
// else if(Physics >= 80){
//     console.log("Grade B");
// }
// else if(Physics >= 70){
//     console.log("Grade C");
// }
// else if(Physics >= 60){
//     console.log("Grade D");
// }
// else if(Physics >= 40){
//     console.log("Grade E");
// }
// else{
//     console.log("Grade F");
// }

// if(Chemistry >= 90){
//     console.log("Grade A");
// }
// else if(Chemistry >= 80){
//     console.log("Grade B");
// }
// else if(Chemistry >= 70){
//     console.log("Grade C");
// }
// else if(Chemistry >= 60){
//     console.log("Grade D");
// }
// else if(Chemistry >= 40){
//     console.log("Grade E");
// }
// else{
//     console.log("Grade F");
// }

// if(Biology >= 90){
//     console.log("Grade A");
// }
// else if(Biology >= 80){
//     console.log("Grade B");
// }
// else if(Biology >= 70){
//     console.log("Grade C");
// }
// else if(Biology >= 60){
//     console.log("Grade D");
// }
// else if(Biology >= 40){
//     console.log("Grade E");
// }
// else{
//     console.log("Grade F");
// }

// if(Mathematics >= 90){
//     console.log("Grade A");
// }
// else if(Mathematics >= 80){
//     console.log("Grade B");
// }
// else if(Mathematics >= 70){
//     console.log("Grade C");
// }
// else if(Mathematics >= 60){
//     console.log("Grade D");
// }
// else if(Mathematics >= 40){
//     console.log("Grade E");
// }
// else{
//     console.log("Grade F");
// }

// if(Computer >= 90){
//     console.log("Grade A");
// }
// else if(Computer >= 80){
//     console.log("Grade B");
// }
// else if(Computer >= 70){
//     console.log("Grade C");
// }
// else if(Computer >= 60){
//     console.log("Grade D");
// }
// else if(Computer >= 40){
//     console.log("Grade E");
// }
// else{
//     console.log("Grade F");
// }

//Question 15 Done above

//Question 16
// var input = window.prompt("Enter a character");

// switch(input){
//     case ('a' || 'A' || 'e' || 'E' || 'i' || 'I' || 'o' || 'O' || 'u' || 'U'):
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
//         break;
// }

//Question 17
// var input1 = Number(window.prompt("Enter a number"));
// var input2 = Number(window.prompt("Enter a number"));

// switch(input1>input2){
//     case true:
//         console.log(input1);
//         break;
//     case false:
//         console.log(input2);
//         break;
// }

//Question 18
// var input = Number(window.prompt("Enter a number"));

// switch(input%2===0){
//     case true:
//         console.log("Even");
//         break;
//     case false:
//         console.log("Odd");
//         break;
// }

//Question 19
// var input = Number(window.prompt("Enter a number"));

// switch(input > 0){
//     case true:
//         console.log("Positive");
//         break;
//     case false:
//         switch(input === 0){
//             case true:
//                 console.log("Zero");
//                 break;
//             case false:
//                 console.log("Negative");
//                 break;
//         }
//         break;
// }

//Question 20
// var input1 = Number(window.prompt("Enter first number"));
// var input2 = Number(window.prompt("Enter second number"));
// var operator = window.prompt("Enter an operator");

// switch(operator){
//     case '+':
//         console.log(input1+input2);
//         break;
//     case '-':
//         console.log(input1-input2);
//         break;
//     case '*':
//         console.log(input1*input2);
//         break;
//     case '/':
//         console.log(input1/input2);
//         break;
//     case '%':
//         console.log(input1%input2);
//         break;
//     case '**':
//         console.log(input1**input2);
//         break;
//     default:
//         console.log("Invalid operator");
//         break;
// }
