// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
  let number=+prompt("Enter the number");
  if(number%2===0){
    alert("number is Even");
  }else{
    alert("number is odd");
  }

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
  let num1=+prompt("Enter 1st number");
  let num2=+prompt("Enter 2nd number");
  if(num1>num2){
    alert(`${num1} max value`);
  }else{
    alert(`${num2} max value`);
  }

// 3. Convert the above code using`?` terniary operator
let numA=+prompt("Enter 1st number");
let numB=+prompt("Enter 2nd number");
numA > numB ? alert(`${numA} max value`) : alert(`${numB} max value`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName =prompt("Enter house name");
if(houseName=="stark"){
  alert("Winter is coming");

}else if(houseName=="lannister"){
  alert("A lannister always pays his debt");
}else{
  alert("All men must die")
}
 
// 5. Convert the above code using`?` terniary operator
// let houseName =prompt("Enter house name");
houseName=="stark" ?  alert("Winter is coming") : houseName=="lannister" ? alert("A lannister always pays his debt"): alert("All men must die");
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let month=Number(prompt("Enter No.of Month"));
switch(month){
    case 1:
        alert("31 days in the january Month");
        break;
          case 2:
        alert("28/29 days in the February Month");
        break;
          case 3:
        alert("31 days in the March Month");
        break;
          case 4:
        alert("30 days in the April Month");
        break;
          case 5:
        alert("31 days in the May Month");
        break;
          case 6:
        alert("30 days in the June Month");
        break;
          case 7:
        alert("31 days in the July Month");
        break;
          case 8:
        alert("31 days in the August Month");
        break;
          case 9:
        alert("30 days in the September Month");
        break;
          case 10:
        alert("31 days in the October Month");
        break;
          case 11:
        alert("30 days in the November Month");
        break;
          case 12:
        alert("31 days in the December Month");
        break;
    default:
        alert("Invalid Month No.");
}


let monthName=prompt("Enter No.of MonthName");
switch(monthName){
    case "january":
        alert("31 days in the january Month");
        break;
          case "febuary":
        alert("28/29 days in the February Month");
        break;
          case "march":
        alert("31 days in the March Month");
        break;
          case "april":
        alert("30 days in the April Month");
        break;
          case "may":
        alert("31 days in the May Month");
        break;
          case "june":
        alert("30 days in the June Month");
        break;
          case "july":
        alert("31 days in the July Month");
        break;
          case "august":
        alert("31 days in the August Month");
        break;
          case "september":
        alert("30 days in the September Month");
        break;
          case "october":
        alert("31 days in the October Month");
        break;
          case "november":
        alert("30 days in the November Month");
        break;
          case "december":
        alert("31 days in the December Month");
        break;
    default:
        alert("Invalid Month Name");
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary=Number(prompt("Enter Hand Amount"));
switch(true){
  case salary<=20000:
  alert(`${salary-salary/100*10} in hand`);
  break;
  case salary<=40000:
  alert(`${salary-salary/100*20} in hand`);
  break;
  case salary > 50000:
  alert(`${salary-salary/100*30} in hand`);
  break;
  default:
  alert("No salary");
}

let salery=Number(prompt("Enter Hand Amount"));
switch(true){
  case salery<=20000:
    let tax= (salery*10)/100;
    alert(`your in hand ${salery - tax}`);
    break;
    case salery<=40000:
    let tax= (salery*20)/100;
    alert(`your in hand ${salery - tax}`);
    break;
    case salery>20000:
      let tax= (salery*10)/100;
      alert(`your in hand ${salery - tax}`);
      break;
      default:
        alert("invalid");

}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks=Number(prompt("Enter Marks"));
if(marks>100){
  alert("Marks can't be greater than 100");
}else if(marks>80 && marks<100){
  alert("Grade A");
}else if(marks>50 && marks<80){
  alert("Grade B");
}else if(marks>30 && marks <50){
  alert("Grade C");

}else if(marks>0){
  alert("Grade D");
}else{
  alert("Invalid marks");
}


let marks=Number(prompt("Enter Marks"));
switch(true){

  case marks>100:
    alert("Marks can't be greater than 100");
    break;
  case marks>80 && marks<100:
    alert ("Grade A");
    break;
  case marks>50 && marks<80:
    alert("Grade B");
    break;
  case marks>30 && marks <50:
    alert("Grade C");
    break;
  case marks>0:
    alert("Grade D");
    break;
  default:
    alert("Invalid marks");
    
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather =prompt("What is the weather like outside?");
if(weather=="sunny"){
  alert(`Wear a T-shirt`);
}else if(weather=="rainy"){
  alert(`Don't forget to take your raincoat`);
}else if(weather=="hot"){
  alert(`Get a hanky`);
}else if(weather=="freezing"){
  alert(`Get your sweeter on`);
}else{
  alert(`Not a valid input`);
}

let weather =prompt("What is the weather like outside?");
switch(true){
   case weather=="sunny":
    alert(`Wear a T-shirt`);
    break;
  case weather=="rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case weather=="hot":
    alert(`Get a hanky`);
    break;
  case weather=="freezing":
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);

}

